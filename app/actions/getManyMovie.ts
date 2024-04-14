import prisma from '@/app/lib/prismadb';

const getManyMovie = async () => {
    try {
        const randomMovies = await prisma.movie.findMany()
        return randomMovies;
    } catch (error: any) {
        console.log(error)
    }
}
export default getManyMovie;