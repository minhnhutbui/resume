import Project from '../../../../models/Project';
import { NextRequest } from 'next/server';
import { handleGET, handlePOST } from '@/utils/request';

export async function POST(req: NextRequest) {
    return handlePOST(req, Project);
}

export async function GET() {
    return handleGET(Project);
}
