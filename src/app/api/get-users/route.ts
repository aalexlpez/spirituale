import { NextRequest, NextResponse } from 'next/server';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
];

export async function GET(req: NextRequest) {
  return NextResponse.json(users);
}
