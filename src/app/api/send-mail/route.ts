import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { template } from '../../../utils/email-template'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, message } = await request.json()
  console.log(name, email, message)

  try {
    const emailTemplate = template(name)

    await resend.emails.send({
      from: 'Spirituale Team <info@spiritualelife.com>',
      to: email,
      subject: '¡Estás a 1 paso de reservar tu lugar! |  3 PASOS PARA REVELAR TU ABUNDANCIA CONSCIENTE',
      html: emailTemplate
    });
    return NextResponse.json({ message: 'Correo enviado con éxito' })
  } catch (error) {
    console.error('Error enviando correo: ', error)
    return NextResponse.json(
      { message: 'Error al enviar el correo' },
      { status: 500 }
    )
  }
  finally {
    return NextResponse.json({ message: 'Proceso finalizado' })
  }
}
