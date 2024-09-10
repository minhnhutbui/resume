import { NextRequest, NextResponse } from 'next/server';
import { Model } from 'mongoose';
import connectMongoDB from '../../lib/mongodb';

export async function handlePOST<T>(req: NextRequest, model: Model<T>) {
    try {
        const body = await req.json();
        await connectMongoDB();
        const createdDocument = await model.create(body);
        return NextResponse.json({ message: `${model.modelName} created`, data: createdDocument }, { status: 200 });
    } catch (error) {
        console.error('Error creating document:', error);
        return NextResponse.json({ message: 'Failed to create document' }, { status: 500 });
    }
}

export async function handleGET<T>(model: Model<T>) {
    await connectMongoDB();
    const data = await model.find();
    return NextResponse.json({ data });
}
