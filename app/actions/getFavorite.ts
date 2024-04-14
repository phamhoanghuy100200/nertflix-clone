// import prisma from '@/app/lib/prismadb';
// import getCurrentUser from './getUser';

// const getFavotite = async () => {
//     try {
//         const currentUser = await getCurrentUser();
//         const favoriteMovies = await prisma.movie.findMany({
//             where: {
//                 id: {
//                     in: currentUser?.favoriteIds,
//                 }
//             }
//         })
//         return favoriteMovies;
//     } catch (error: any) {
//         console.log(error)
//     }
// }
// export default getFavotite;