'use client'

import UserCard from "@/components/UserCard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const Profiles = () => {
    const router = useRouter();
    const session = useSession()
    const selectProfile = useCallback(() => {
        router.push('/home');
    }, [router]);

    return (
        <div className='flex items-center h-full justify-center'>
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-white text-center">
                    Who&#39;s watching?
                </h1>
                <div className="flex items-center justify-center gap-8 mt-10">
                    <div onClick={() => selectProfile()}>
                        <UserCard name={session.data?.user?.name} />

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Profiles;