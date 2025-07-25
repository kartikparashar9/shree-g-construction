// import { prisma } from "@/lib/utils";
// import { NextResponse } from 'next/server';
// import bcrypt from 'bcryptjs';



// export async function POST(req) {
//     try {
//         const body = await req.json();
    
//         const {
//         firstName,
//         lastName,
//         email,
//         mobile,
//         password,
//         } = body;
    
//         if (!firstName ||  !lastName || !email || !mobile || !password ) {
//       return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
//         }
    
       
//         const hashedPassword = await bcrypt.hash(password, 10);

    
//         // Create User
//         const newUser = await prisma.user.create({
//         data: {
//             firstName,
//             lastName,
//             email,
//             mobile,
//             password:hashedPassword,
//         },
//         });
    
//        return NextResponse.json({ message: 'User created successfully', user: newUser }, { status: 201 });
    
//     } catch (error) {
//         console.error('Error creating user:', error);
//       return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//     }
//     }


// app/api/sign-up/route.js
import { prisma } from "@/lib/utils";
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, mobile, password } = body;

    if (!firstName || !lastName || !email || !mobile || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check for existing user
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        mobile,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: 'User created successfully', user: newUser }, { status: 201 });
  } catch (error) {
    console.error("❌ Internal Server Error:", error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
