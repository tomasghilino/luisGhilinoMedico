import React from "react"

import {
  FooterContainer,
  FooterTitle,
  FooterItem,
  FooterItemText,
  FooterItemLink,
  FooterDescription,
} from "./FooterElements"

import { css } from "styled-components"

import {
  FiMail,
  FiPhoneCall,
  FiCode,
  FiMapPin,
  FiClock,
  FiAlertCircle,
} from "react-icons/fi"
const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <FooterTitle>Dr. Ghilino Luis Antonio</FooterTitle>
        <FooterDescription>
          <FooterItem>
            <FiMail
              css={css`
                flex-shrink: 0; // icons gets smaller on responsive, this style code prevents it
              `}
            />
            <FooterItemText>traumatologoluis@gmail.com</FooterItemText>
          </FooterItem>

          <FooterItem>
            <FiPhoneCall
              css={css`
                flex-shrink: 0;
              `}
            />
            <FooterItemText>011 4033-6567</FooterItemText>
          </FooterItem>

          <FooterItem>
            <FiMapPin
              css={css`
                flex-shrink: 0;
              `}
            />
            <FooterItemText>
              Maestro Ángel D'Elía 1367, San Miguel, Provincia de Buenos Aires
            </FooterItemText>
          </FooterItem>
        </FooterDescription>
      </div>
      <div>
        <FooterTitle>Más Información</FooterTitle>
        <FooterDescription>
          <FooterItem>
            <FiClock
              css={css`
                flex-shrink: 0;
              `}
            />
            <FooterItemText>
              Martes de 9 a 12 hs (orden de llegada) en consultorio.
            </FooterItemText>
          </FooterItem>

          {/* <FooterItem>
            <FiAlertCircle
              css={css`
                flex-shrink: 0;
              `}
            />
            <FooterItemText>
              Valor de la consulta (en consultorio): $1400
            </FooterItemText>
          </FooterItem> */}
          <FooterItem>
            <FiCode
              css={css`
                flex-shrink: 0;
              `}
            />
            <FooterItemLink
              href="https://pastebin.com/CDvqnEDP"
              target="_blank"
            >
              Desarrolladores
            </FooterItemLink>
          </FooterItem>
        </FooterDescription>
      </div>
    </FooterContainer>
  )
}

export default Footer
