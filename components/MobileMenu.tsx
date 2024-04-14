'use client'
interface MobileMenuProps {
    visible: boolean
}
const MobileMenu: React.FC<MobileMenuProps> = ({
    visible
}) => {
    if (!visible) {
        return null;
    }
    return (
        <div className="bg-black w-56 absolute top-8 left-0 flex flex-col py-5 opacity-90 gap-3">
            <div className="px-3 text-center text-white hover:underline">
                Trang chủ
            </div>
            <div className="px-3 text-center text-white hover:underline">
                Series
            </div>
            <div className="px-3 text-center text-white hover:underline">
                Phim
            </div>
            <div className="px-3 text-center text-white hover:underline">
                Mới & Phổ biến
            </div>
            <div className="px-3 text-center text-white hover:underline">
                Danh sách của tôi
            </div>
            <div className="px-3 text-center text-white hover:underline">
                Duyệt phim theo ngôn ngữ
            </div>
        </div>
    );
}

export default MobileMenu;