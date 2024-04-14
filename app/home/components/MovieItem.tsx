'use client'

import FavoriteButton from "@/components/FavoriteButton";
import { useInfoModal } from "@/hooks/useModalInfo";
import { Movie, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsPlayFill } from "react-icons/bs";
interface MovieItemProps {
    data: Movie,
    currentUser: User | null
}
const MovieItem: React.FC<MovieItemProps> = ({
    data, currentUser
}) => {
    const route = useRouter()


    const { openModal } = useInfoModal()

    const handleOpenModal = useCallback(() => {
        openModal(data?.id)
    }, [openModal, data?.id])
    return (
        <div className="group col-span relative w-[90%] max-h-[10vw] items-center  justify-center pr-4 

        ">
            <img className="
            cursor-pointer object-cover transition duration shadow-md rounded-md group-hover:opacity-0
            delay-300 w-full max-h-[10vw] z-10
            "
                src={data.thumbnailUrl} alt="thumbnail" />
            <div className="
                opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300
                w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw]
                group-hover:translate-x-[2vw] group-hover:opacity-100
                ">
                <img
                    className="cursor-pointer  transition duration shadow-xl rounded-t-md w-full h-[10vw] "
                    src={data.thumbnailUrl} alt='thumbnail' />
                <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
                    <div className="flex flex-row items-center gap-3">
                        <div
                            className="cursor-pointer w-6 h-6 rounded-full lg:w-10 lg:h-10 bg-white flex justify-center items-center 
                        transition hover:bg-neutral-300"
                            onClick={() => route.push(`/movie/${data.id}`)}
                        >
                            <BsPlayFill size={30} />
                        </div>
                        <FavoriteButton movieId={data.id} currentUser={currentUser} />
                        <div onClick={handleOpenModal} className="
                        cursor-pointer flex items-center justify-center h-6 w-6 lg:h-10 lg:w-10
                        border-2 border-white rounded-full transition group/item ml-auto 
                        hover:border-neutral-300
                        ">
                            <BiChevronDown className="text-white" />
                        </div>
                    </div>
                    <p className="text-green-400 font-semibold mt-4">
                        Mới <span className="text-white">2023</span>
                    </p>
                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <p className="text-white text-[10px] lg:text-sm">
                            {data.duration}
                        </p>
                        <p className="text-white text-[10px] lg:text-sm">
                            {data.genre}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieItem;