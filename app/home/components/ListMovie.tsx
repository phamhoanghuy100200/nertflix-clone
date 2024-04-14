'use client'



import { Movie, User } from "@prisma/client";
import MovieItem from "./MovieItem";
import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";

interface ListMovieProps {
    ManyMovie: Movie[] | undefined,
    title: string;
    currentUser: User | null
}

const ListMovie: React.FC<ListMovieProps> = (
    {
        ManyMovie, title, currentUser
    }
) => {

    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };
    return (
        <div className="">

            <p className="text-white font-semibold text-md md:text-1xl lg:text-2xl ml-4 my-3">
                {title}</p>


            <Carousel responsive={responsive} className="ml-2 px-8">
                {ManyMovie?.map((item) => (
                    <MovieItem
                        key={item.id}
                        onClick={() => { }}
                        data={item}
                        currentUser={currentUser}
                    />

                ))}
            </Carousel>;

        </div>

    );
}

export default ListMovie;