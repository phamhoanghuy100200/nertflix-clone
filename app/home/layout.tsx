import BillBoard from "@/components/BillBoard"
import getMovieRandom from "../actions/getMovieRandom"
import getManyMovie from "../actions/getManyMovie"
import ListMovie from "./components/ListMovie"
import getCurrentUser from "../actions/getUser"
import getFavotite from "../actions/getFavorite"


export default async function ConversationsLayout({
    children
}: {
    children: React.ReactNode
}) {
    const getMovie = await getMovieRandom()
    const ManyMovie = await getManyMovie()
    const user = await getCurrentUser()
    const favoriteMovie = await getFavotite();


    return (
        <div className="w-full">

            {children}
            <BillBoard data={getMovie} />
            <div className="pb-40">
                <ListMovie ManyMovie={ManyMovie} currentUser={user} title="Trending now" />
                <ListMovie ManyMovie={favoriteMovie} currentUser={user} title="Danh sách của tôi" />
            </div>

        </div>
    )
}