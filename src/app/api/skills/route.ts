import Skill from '../../../../models/Skill';
import { NextRequest } from 'next/server';
import { handleGET, handlePOST } from '@/utils/request';

export async function POST(req: NextRequest) {
    return handlePOST(req, Skill);
}

export async function GET() {
    return handleGET(Skill);
}
