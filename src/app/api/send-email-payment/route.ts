import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    const { email, firstName, lastName, idPersonal, address, state, paymentMethod, price } = await request.json()
    console.log(email, firstName, lastName, idPersonal, address, state, paymentMethod, price)

    try {

        await resend.emails.send({
            from: 'NOTIFICACION DE PAGO <info@spiritualelife.com>',
            to: "spiritualetarot@gmail.com",
            subject: `NOTIFICACIÓN DE PAGO SPIRITUALELIFE DE CLIENTE ${firstName} ${lastName}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2>Notificación de Pago</h2>
                    <p>Estimado equipo de Spirituale,</p>
                    <p>Se ha recibido un nuevo pago con los siguientes detalles:</p>
                    <ul>
                        <li><strong>Nombre y apellido:</strong> ${firstName} ${lastName}</li>
                        <li><strong>Cédula:</strong> ${idPersonal}</li>
                        <li><strong>Correo Electrónico:</strong> ${email}</li>
                        <li><strong>Estado:</strong> ${state}</li>
                        <li><strong>Dirección:</strong> ${address}</li>
                        <li><strong>Método de Pago:</strong> ${paymentMethod}</li>
                        <li><strong>Precio:</strong> ${price}</li>
                    </ul>
                    <p>Por favor, verifique y procese este pago a la brevedad posible.</p>
                    <p>Gracias,</p>
                    <p>El equipo de Spirituale</p>
                </div>
            `
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