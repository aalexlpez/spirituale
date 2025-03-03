import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../lib/utils/firebaseConfig';
import { CollectionReference, DocumentData } from 'firebase-admin/firestore';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Todos los campos son obligatorios' }, { status: 400 });
  }

  try {
    const usersCollection: CollectionReference<DocumentData> = db.collection('potencialCliente');
    await usersCollection.add({
      nombreCompleto: name,
      correo: email,
      mensajeSpiritual: message,
      fechaInscripcion: new Date(),
    });

    try {
      await sendEmail({ name, email, message });
    } catch (error) {
      return NextResponse.json({ error: 'Error enviando correo: ' + error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Usuario guardado exitosamente' }, { status: 200 });
  } catch (error) {
    console.error('Error guardando el usuario:', error);
    return NextResponse.json({ error: 'Error guardando el usuario' }, { status: 500 });
  }
}

const sendEmail = async (json: { name: string; email: string; message: string }) => {
  try {
    const url = new URL('/api/send-mail', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000');
    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json),
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};