import { NextResponse } from 'next/server';
import { db } from '../../../../../lib/utils/firebaseConfig';
import { collection, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';

export async function GET() {
  try {
    const usersCollection = collection(db, 'potencialCliente');
    const usersSnapshot = await getDocs(usersCollection);
    
    // Log the number of documents fetched
    console.log(`Total documents fetched: ${usersSnapshot.size}`);
    
    // Log each document's data
    usersSnapshot.docs.forEach((doc) => console.log(doc.id, doc.data()));
    
    const usersList = usersSnapshot.docs.map((doc: QueryDocumentSnapshot) => doc.data());
    
    const response = NextResponse.json(usersList);
    response.headers.set('Cache-Control', 'no-store');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    return response;
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Error consultando usuarios' }, { status: 500 });
  }
}