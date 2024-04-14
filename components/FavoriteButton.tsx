import getFavotite from "@/app/actions/getFavorite";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { use, useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
interface FavoriteButtonProps {
    movieId: string;
    currentUser: User | null
}
const FavoriteButton: React.FC<FavoriteButtonProps> = ({
    movieId, currentUser
}) => {
    const router = useRouter();

    const [isFavorite, setIsFavorite] = useState(false);



    useEffect(() => {
        const list = currentUser?.favoriteIds || [];
        if (list.includes(movieId)) {
            setIsFavorite(true)
        }
        else {
            setIsFavorite(false)
        }
    }, [currentUser, movieId])

    const toggleFavorite = useCallback(async () => {
        axios.post('/api/liked', { movieId: movieId })
            .then(() => toast.success('success'))
            .catch((error) => console.log(error))
            .finally(() => router.refresh())
    }, [movieId, isFavorite, currentUser,])


    const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;
    return (
        <div onClick={() => toggleFavorite()} className="
        cursor-pointer group/item
        w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center
        transition hover:border-neutral-300
        "
        >
            <Icon className="text-white" />
        </div>
    );
}

export default FavoriteButton;