import prisma from '@/app/lib/prismadb';

const getMovieRandom = async () => {
    try {
        const moiveCount = await prisma.movie.count();
        const randomIndex = Math.floor(Math.random() * moiveCount);
        const randomMovies = await prisma.movie.findFirst()
        return randomMovies;
    } catch (error: any) {
        console.log(error)
    }

}
export default getMovieRandom;