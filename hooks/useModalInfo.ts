import { create } from "zustand";

export interface ModalStoreInterface {
    movieId?: any;
    isOpen: boolean;
    openModal: (movieId: any) => void;
    closeModal: () => void;
}
export const useInfoModal = create<ModalStoreInterface>((set) => ({
    movieId: undefined,
    isOpen: false,
    openModal: (movieId: any) => set({ isOpen: true, movieId }),
    closeModal: () => set({ isOpen: false, movieId: undefined })
}))
