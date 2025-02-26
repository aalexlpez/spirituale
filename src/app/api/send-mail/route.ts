import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { name, email, message } = await request.json();
    console.log(name, email, message)

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Bienvenido a Tu Viaje Espiritual",
      html: `
        <h1>Hola ${name},</h1>
        <p>Gracias por unirte a nuestro camino espiritual.</p>
        <p>Tu mensaje: <strong>${message}</strong></p>
        <p>Recibirás meditaciones guiadas y más. ¡Pronto te contactaremos!</p>
      `,
    });
    return NextResponse.json({ message: "Correo enviado con éxito" });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return NextResponse.json(
      { message: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}