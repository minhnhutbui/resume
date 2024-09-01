import connectMongoDB from '../../../../lib/mongodb';
import Skill from '../../../../models/Skill';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { name, description } = await req.json();
    await connectMongoDB();
    await Skill.create({ name, description });
    return NextResponse.json({ message: 'Skill created' }, { status: 200 });
}
