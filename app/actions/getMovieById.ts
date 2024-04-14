// import prisma from '@/app/lib/prismadb'

// const getMovieById = async (
//     movieId: string
// ) => {
//     try {
//         if (!movieId) {
//             return null;
//         }
//         const movie = await prisma.movie.findUnique({
//             where: {
//                 id: movieId
//             }
//         })
//         if (!movie) {
//             throw new Error('Dont have this movie')
//         }
//         return movie
//     } catch (error: any) {
//         console.log(error)
//     }
// }
// export default getMovieById