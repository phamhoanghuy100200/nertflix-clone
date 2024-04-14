import getCurrentUser from '@/app/actions/getUser';
import prisma from '@/app/lib/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {


    try {
        const body = await request.json();
        const { movieId } = body
        const movie = await prisma.movie.findUnique({
            where: {
                id: movieId
            }
        });
        return NextResponse.json(movie);


    } catch (error: any) {
        console.log(error);
        return new NextResponse('Internal Error', { status: 500 });

    }
}