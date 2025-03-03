import { NextResponse } from 'next/server';
import { db } from '../../../../../lib/utils/firebaseConfig';
import { QueryDocumentSnapshot } from 'firebase-admin/firestore';

export async function GET() {
  console.log('GET /api/admin/get-users called');
  try {
    const usersCollection = db.collection('potencialCliente');
    const usersSnapshot = await usersCollection.get();
    
    // Log the number of documents fetched
    console.log(`Total documents fetched: ${usersSnapshot.size}`);
    
    // Log each document's data
    usersSnapshot.docs.forEach((doc: QueryDocumentSnapshot) => console.log(doc.id, doc.data()));
    
    const usersList = usersSnapshot.docs.map((doc: QueryDocumentSnapshot) => doc.data());
    
    // Log the final users list
    console.log('Final users list:', usersList);
    
    const response = NextResponse.json(usersList);
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    response.headers.set('Surrogate-Control', 'no-store');
    return response;
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Error consultando usuarios' }, { status: 500 });
  }
}