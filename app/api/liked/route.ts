import getCurrentUser from '@/app/actions/getUser';
import prisma from '@/app/lib/prismadb'
import { NextResponse } from 'next/server'
import { without } from 'lodash';

export async function POST(request: Request) {


    try {
        const currentUser = await getCurrentUser();
        const body = await request.json();
        const { movieId } = body
        const existingMovie = await prisma.movie.findUnique({
            where: {
                id: movieId
            }
        });
        if (!existingMovie) {
            return NextResponse.json('Invalid ID', { status: 422 });

        }


        const movieUser = await prisma.user.findUnique({
            where: {
                id: currentUser?.id,
                favoriteIds: {
                    has: movieId
                }
            },

        })

        if (!movieUser) {
            const user = await prisma.user.update({
                where: {
                    email: currentUser?.email || '',
                },
                data: {
                    favoriteIds: {
                        push: movieId,
                    }
                }
            })
            return NextResponse.json(user);

        }
        else {

            const updatedFavoriteUser = without(currentUser?.favoriteIds, movieId);
            const user = await prisma.user.update({
                where: {
                    email: currentUser?.email || '',
                },
                data: {
                    favoriteIds: updatedFavoriteUser,
                }
            })
            return NextResponse.json(user);

        }




    } catch (error: any) {
        console.log(error);
        return new NextResponse('Internal Error g', { status: 500 });

    }
}