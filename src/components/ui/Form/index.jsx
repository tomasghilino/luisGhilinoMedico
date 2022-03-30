import React, { useState, useRef } from 'react';
import { Formik, useField } from 'formik';
import * as yup from 'yup';
import {
  FormInfo,
  FormTextArea,
  FormSubmit,
  FormInput,
  FormError,
} from './FormElements';
import AlertaMail from '../AlertaMail';
import emailjs from '@emailjs/browser';
import {GATSBY_SERVICE_ID_EMAILJS, GATSBY_TEMPLATE_ID_EMAILJS, GATSBY_USER_ID_EMAILJS} from 'gatsby-env-variables';

// Functions and validations FORMIK
const MyTextInput = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <FormInput className="text-input" {...field} {...props} />
    </>
  );
};

const MyTextArea = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <FormTextArea rows={8} className="text-area" {...field} {...props} />
    </>
  );
};

const validaciones = yup.object().shape({
  from_name: yup
    .string()
    .required('Campo requerido')
    .min(3, `Mínimo 3 caracteres`),
  user_email: yup
    .string()
    .email('Correo electrónico inválido')
    .required('Campo requerido'),
  message: yup
    .string()
    .required('Campo requerido')
    .min(15, `Minimo 15 caracteres`),
});

const Formulario = () => {

  const [ mailSentStatus, setMailSentStatus ] = useState(false); //data
  const [ alertShow, setAlertShow ] = useState(false);
  const form = useRef();

  const sendEmail = async () => {                                // SEND MAIL
    try {
      const result = await emailjs.sendForm(
        GATSBY_SERVICE_ID_EMAILJS,
        GATSBY_TEMPLATE_ID_EMAILJS,
        form.current,
        GATSBY_USER_ID_EMAILJS
      );
      if (result.status === 200) {
        setMailSentStatus(true);
        setAlertShow(true);
        setTimeout(() => {
          setAlertShow(false);
        }, 5000);
      }
    } catch (error) {
      setMailSentStatus(false);
      setAlertShow(true);
      setTimeout(() => {
        setAlertShow(false);
      }, 5000);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          from_name: '',
          user_email: '',
          message: '',
        }}
        validationSchema={validaciones}
        onSubmit={(values, { resetForm }) => {
          sendEmail();
          resetForm({ values: '' });
        }}
        enableReinitialize={true}
      >
        <FormInfo
        ref={form}
        >
          <h1>Contacto</h1>

          {alertShow ? <AlertaMail mailSentStatus={mailSentStatus} /> : null}

          <MyTextInput
            id="from_name"
            name="from_name"
            type="text"
            placeholder="Tu Nombre"
          />
          <FormError name="from_name" component="div" />

          <MyTextInput
            id="user_email"
            name="user_email"
            type="email"
            placeholder="Tu Email"
          />
          <FormError name="user_email" component="div" />

          <MyTextArea
            as="textarea"
            id="message"
            name="message"
            placeholder="¿Qué necesitas saber?"
          />
          <FormError name="message" component="div" />

          <FormSubmit type="submit" value="Enviar" />
        </FormInfo>
      </Formik>
    </>
  );
};

export default Formulario;
