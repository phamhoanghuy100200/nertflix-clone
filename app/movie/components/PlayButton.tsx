import { useRouter } from "next/navigation";
import { BsFillPlayFill } from "react-icons/bs";

interface PlayButtonProps {
    movieId: string | undefined
}
const PlayButton: React.FC<PlayButtonProps> = ({
    movieId
}) => {
    const router = useRouter()

    return (
        <button
            onClick={() => router.push(`/movie/${movieId}`)}
            className="
        bg-white rounded-md py-2 md:py-3 px-2 md:px-4 w-auto
        text-xs lg:text-lg font-semibold flex flex-row items-center
        hover:bg-neutral-300 transition gap-2 text-black
        ">
            <BsFillPlayFill size={20} />
            Play
        </button>
    );
}

export default PlayButton;