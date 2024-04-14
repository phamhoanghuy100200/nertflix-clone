import prisma from '@/app/lib/prismadb';

const getMovieRandom = async () => {
    try {
        const moiveCount = await prisma.movie.count();
        const randomIndex = Math.floor(Math.random() * moiveCount);
        const randomMovies = await prisma.movie.findMany({
            take: 1,
            skip: randomIndex
        })
        return randomMovies[0];
    } catch (error: any) {
        console.log(error)
    }

}
export default getMovieRandom;