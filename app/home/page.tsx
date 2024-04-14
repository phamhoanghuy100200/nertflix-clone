'use client'
import InfoModal from "@/components/InfoModal";
import Navbar from "@/components/Navbar";
import { useInfoModal } from "@/hooks/useModalInfo";
const Home = () => {
    const { closeModal, isOpen } = useInfoModal()

    return (
        <div className="text-white">
            <Navbar />
            <InfoModal onClose={closeModal} visible={isOpen} />

        </div>
    );
}

export default Home;