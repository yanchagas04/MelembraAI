"use client"
require('dotenv').config()
export const SENDER = process.env.SENDER
const KEY = process.env.API_KEY as string
const SECRET_KEY = process.env.API_SECRET_KEY as string
// const mailjet = require('node-mailjet').connect(
//     KEY,
//     SECRET_KEY
//   )
  
import mailjet from 'node-mailjet'
mailjet.apiConnect(KEY, SECRET_KEY)

export default async function enviarEmail(destinario: string) { 
    let response = {
      status: 200,
      message: 'Email enviado com sucesso',
    }
    const request = mailjet.HttpMethods.Post) ('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: SENDER,
            Name: 'MelembraAI',
          },
          To: [
            {
              Email: destinario,
              Name: 'Usuário',
            },
          ],
          Subject: 'Email da plataforma de tarefas!',
          TextPart: 'Olá!',
          HTMLPart:
            '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
        },
      ],
    })
    request
      .then((result: { body: any }) => {
        console.log(result.body)
        return response
      })
      .catch((err: { statusCode: any }) => {
        console.log(err.statusCode)
        response.status = 500
        response.message = 'Erro ao enviar o email'
        return response
      })
}
