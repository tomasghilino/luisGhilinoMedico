import React from "react"

import { css } from "styled-components"

import { WhatsappButton } from "./WhatsAppElements"

import { BsWhatsapp } from "react-icons/bs"

const WhatsApp = () => {
  return (
    <WhatsappButton href="https://wa.me/5491140336567" target="_blank">
      <BsWhatsapp
        css={css`
          display: block;
        `}
      />
    </WhatsappButton>
  )
}

export default WhatsApp
