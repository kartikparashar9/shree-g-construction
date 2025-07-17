import { prisma } from '@/lib/utils';
import { NextResponse } from 'next/server';


export async function POST(req) {
  try {
    const body = await req.json();

    const {
      projectName,
      projectNumber,
      type,
      zone,
      wardNumber,
      area,
      imageUrls,
      description,
      workCategory,
    } = body;


    if (!projectName || !projectNumber || !type || !imageUrls) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const allowedTypes = ['GOVERNMENT', 'PRIVATE'];
    if (!allowedTypes.includes(type)) {
      return NextResponse.json({ error: 'Invalid work type' }, { status: 400 });
    }

    // ✅ Check imageUrls length
    // if (!Array.isArray(imageUrls) || imageUrls.length <= 1) {
    //   return NextResponse.json({ error: 'At least 10 image URLs are required' }, { status: 400 });
    // }

    // ✅ Create Work
    const newWork = await prisma.work.create({
      data: {
        projectName,
        projectNumber,
        type,
        zone,
        wardNumber,
        area,
        imageUrls,
        description,
        workCategory,
      },
    });

    return NextResponse.json({ message: 'Work created successfully', work: newWork }, { status: 201 });

  } catch (error) {
    console.error('Error creating work:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


export async function GET(req) {
  try {
    // ✅ Fetch all works
    const works = await prisma.work.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(works, { status: 200 });
  } catch (error) {
    console.error('Error fetching works:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


// put api
export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, ...updateData } = body;

    // ✅ Required fields check
    if (!id || !Object.keys(updateData).length) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // ✅ Update Work
    const updatedWork = await prisma.work.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json({ message: 'Work updated successfully', work: updatedWork }, { status: 200 });

  } catch (error) {
    console.error('Error updating work:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


// delete work
export async function DELETE(req) {
  try {
    const body = await req.json();
    const { id } = body;

    // ✅ Required fields check
    if (!id) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // ✅ Delete Work
    await prisma.work.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Work deleted successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error deleting work:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}