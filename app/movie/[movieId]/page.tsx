// import getMovieById from "@/app/actions/getMovieById";
import { useRouter } from 'next/router'
import { AiOutlineArrowLeft } from "react-icons/ai";

interface IParams {
    movieId: string
}
const Movie = async ({ params }: { params: IParams }) => {
    // const movie = await getMovieById(params.movieId);
    if (!params) {
        return (
            <div className="">
                404
            </div>
        )
    }
    return (
        <div className="h-screen w-screen bg-black">
            <nav className="fixed w-full p-4 z-10 flex flex-row items-center
            gap-8 bg-black bg-opacity-70
            ">
                <p className="text-white text-1xl md:text-2xl font-bold">
                    <span className="mr-2 font-light">Watching:</span>
                    {/* {movie?.title} */}
                </p>
            </nav>
            {/* <video autoPlay controls className="h-full w-full" src={movie?.videoUrl} /> */}
        </div>
    );
}

export default Movie;