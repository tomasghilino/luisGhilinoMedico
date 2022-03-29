import React from "react"

import {
  FooterContainer,
  FooterTitle,
  FooterItem,
  FooterItemText,
  FooterItemLink,
  FooterDescription,
} from "./FooterElements"

import { FiMail, FiPhoneCall, FiCode } from "react-icons/fi"
const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <FooterTitle>Dr. Ghilino Luis Antonio</FooterTitle>
        <FooterDescription>
          <FooterItem>
            <FiMail />
            <FooterItemText>traumatologoluis@gmail.com</FooterItemText>
          </FooterItem>

          <FooterItem>
            <FiPhoneCall />
            <FooterItemText>011 4033-6567</FooterItemText>
          </FooterItem>
        </FooterDescription>
      </div>
      <div>
        <FooterTitle>Más Información</FooterTitle>
        <FooterDescription>
          <FooterItem>
            <FiMail />
            <FooterItemText>traumatologoluis@gmail.com</FooterItemText>
          </FooterItem>

          <FooterItem>
            <FiPhoneCall />
            <FooterItemText>011 4033-6567</FooterItemText>
          </FooterItem>
          <FooterItem>
            <FiCode />
            <FooterItemLink>Desarrolladores</FooterItemLink>
          </FooterItem>
        </FooterDescription>
      </div>
    </FooterContainer>
  )
}

export default Footer
