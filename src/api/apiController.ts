require('dotenv').config()
export const sgMail = require('@sendgrid/mail')
export const SENDER = process.env.SENDER
const KEY = process.env.API_KEY
sgMail.setApiKey(KEY)

export type mensagemEmail = {
    subject: string,
    text: string,
    html: string
}

export type resposta = {
    statusCode: number,
    headers: string
}

export default function enviarEmail(menssagem: mensagemEmail, destinatario: string) {

    let res : resposta = {
        statusCode: 500, // Status code padrão de erro
        headers: '' 
    }

    const msg = {
        to: destinatario,
        from: SENDER,
        subject: menssagem.subject,
        text: menssagem.text,
        html: menssagem.html,
      }

    sgMail
    .send(msg)
    .then((response : any) => {
        res.statusCode = response[0].statusCode
        res.headers = response[0].headers
    })
    .catch((error : any) => {
        res.statusCode = 500
        res.headers = error
    })

    return res
}



