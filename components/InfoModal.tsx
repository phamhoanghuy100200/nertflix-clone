'use client'

import getMovieById from "@/app/actions/getMovieById";
import PlayButton from "@/app/movie/components/PlayButton";
import { useInfoModal } from "@/hooks/useModalInfo";
import { Movie } from "@prisma/client";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import FavoriteButton from "./FavoriteButton";
import { useSession } from "next-auth/react";

interface InfoModalProps {
    visible?: boolean;
    onClose: () => void
    // movie: Movie
}
const InfoModal: React.FC<InfoModalProps> = ({
    visible, onClose
}) => {
    const currentUser = useSession()

    const [isVisible, setIsVisible] = useState(!!visible);
    // console.log('data:', movieId)


    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Movie | undefined>(undefined);

    const { movieId } = useInfoModal()
    useEffect(() => {
        if (movieId) {

            const fetchData = async () => {
                setLoading(true);
                try {
                    const { data: response } = await axios.post('/api/movie', { movieId: movieId });
                    setData(response);
                } catch (error) {
                    console.error(error);
                }
                setLoading(false);
            }

            fetchData();
        }

    }, [movieId]);
    // console.log(data.)

    useEffect(() => {
        setIsVisible(!!visible)
    }, [visible])

    const handleClose = useCallback(async () => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 300)
    }, [onClose])

    if (!visible) {
        return null
    }

    return (
        <div className=" fixed
        z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center
        overflow-x-hidden overflow-y-hidden inset-0
        ">
            <div className="
            relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden
            ">
                <div className={`${isVisible ? 'scale-100' : 'scale-0'}
                transform
                duration-300 relative flex-auto bg-zinc-900 drop-shadow-md
                `}>
                    <div className="relative h-96">
                        <video className="w-full brightness-[60%] object-cover h-full" autoPlay muted loop poster={data?.thumbnailUrl} src={data?.videoUrl} />
                        <div className="
                        cursor-pointer absolute top-3 right-3 w-10 h-10 flex items-center
                        justify-center bg-opacity-70 rounded-full
                        "
                            onClick={() => handleClose()}
                        >
                            <AiOutlineClose className="text-white" />
                        </div>
                        <div className="absolute bottom-[10%] left-10">
                            {data && (
                                <p className="text-white text-2xl md:text-3xl h-full lg:text-4xl">
                                    {data.title}
                                </p>
                            )}

                            <div className="flex flex-row gap-4 items-center mt-2">
                                <PlayButton movieId={data?.id} />
                                {/* {data?.id && (
                                    // <FavoriteButton currentUser={currentUser.data?.user?.email} movieId={data?.id} />

                                )} */}
                            </div>
                        </div>
                    </div>

                    <div className="px-12 py-8">
                        <p className="text-green-400 font-semibold text-lg">
                            New
                        </p>
                        <p className="text-white text-lg">
                            {data?.duration}
                        </p>
                        <p className="text-white text-lg">
                            {data?.genre}
                        </p>
                        <p className="text-white text-lg">
                            {data?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoModal;