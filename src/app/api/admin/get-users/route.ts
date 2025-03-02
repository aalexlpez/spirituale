import { NextResponse } from 'next/server';
import { db } from '../../../../../lib/utils/firebaseConfig';
import { collection, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';

export async function GET() {
  try {
    const usersCollection = collection(db, 'potencialCliente');
    const usersSnapshot = await getDocs(usersCollection);
    const usersList = usersSnapshot.docs.map((doc: QueryDocumentSnapshot) => doc.data());
    return NextResponse.json(usersList);
  } catch {
    return NextResponse.json({ error: 'Error consultando usuarios' }, { status: 500 });
  }
}