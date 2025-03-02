import { NextResponse } from 'next/server'
import { db } from 'c:/Users/1/Desktop/proyectos/Personal/spirituale/lib/utils/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

// const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET(request: Request) {
  try {
    const usersCollection = collection(db, 'potencialCliente');
    const usersSnapshot = await getDocs(usersCollection);
    const usersList = usersSnapshot.docs.map((doc: any) => doc.data());
    return NextResponse.json(usersList);
  } catch (error) {
    return NextResponse.json({ error: 'Error consultando usuarios' }, { status: 500 });
  }
}
