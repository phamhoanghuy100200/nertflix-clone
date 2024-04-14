'use client'
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Movie } from "@prisma/client";
import PlayButton from "@/app/movie/components/PlayButton";
import { useCallback } from "react";
import { useInfoModal } from "@/hooks/useModalInfo";
interface BillBoardProps {
    data: Movie | undefined | null
}
const BillBoard: React.FC<BillBoardProps> = ({
    data
}) => {
    const { openModal } = useInfoModal()
    const handleOpenModal = useCallback(() => {
        openModal(data?.id)
    }, [openModal, data?.id])
    return (
        <div className="relative h-[40vw] ">

            <video autoPlay className="w-full max-h-[40vw] object-cover brightness-[60%]" src={data?.videoUrl} loop muted poster={data?.thumbnailUrl}></video>
            <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16 w-full">
                <p className="text-white text-sm w-[50%] md:text-4xl h-full  lg:text-5xl font-bold drop-shadow-xl">
                    {data?.title}
                </p>
                <p className="mt-3 md:mt-8 text-white text-[8px] md:text-lg md:w-[80%] w-[90%] lg:w-[50%] drop-shadow-xl truncate">
                    {data?.description}
                </p>
                <div

                    className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                    <PlayButton movieId={data?.id} />
                    <button onClick={handleOpenModal} className="bg-white text-white bg-opacity-30 rounded-md 
                    px-1 md:px-2 py-2 md:py-3 w-auto text-xs lg:text-lg font-semibold flex flex-row
                    items-center hover:bg-opacity-20 transition gap-1
                    ">
                        <AiOutlineInfoCircle />
                        <p>More info</p>
                    </button>

                </div>
            </div>
        </div>
    );
}

export default BillBoard;