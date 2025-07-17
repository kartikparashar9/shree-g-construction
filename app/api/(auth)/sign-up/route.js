import { prisma } from "@/lib/utils";
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';



export async function POST(req) {
    try {
        const body = await req.json();
    
        const {
        firstName,
        lastName,
        email,
        mobile,
        password,
        } = body;
    
        if (!firstName ||  !lastName || !email || !mobile || !password ) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }
    
       
        const hashedPassword = await bcrypt.hash(password, 10);

    
        // Create User
        const newUser = await prisma.user.create({
        data: {
            firstName,
            lastName,
            email,
            mobile,
            password:hashedPassword,
        },
        });
    
       return NextResponse.json({ message: 'User created successfully', user: newUser }, { status: 201 });
    
    } catch (error) {
        console.error('Error creating user:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
    }


    export async function GET() {
            return NextResponse.json({ message: 'success' }, { status: 200 });

    }