
import { prisma } from '@/lib/utils';
import { generateJwtToken } from '@/lib/auth';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    const token = generateJwtToken(user.id);

    return NextResponse.json({ message: 'User signed in successfully', token }, { status: 200 });

  } catch (error) {
    console.error('Error signing in user:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
