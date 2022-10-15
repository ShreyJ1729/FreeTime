import React from "react";
import { useRecoilValue } from "recoil";
import { userLoggedInAtom } from "./Atoms"
import { Calendar } from "./Calendar/Calendar"
import { GroupsBar } from "./GroupsBar/GroupsBar"
import { MembersBar } from "./MembersBar/MembersBar"
import { LoginModal } from "./LoginModal";

export const Home = () => {
    const userLoggedIn = useRecoilValue(userLoggedInAtom)

    return (
        <>

            {!userLoggedIn && <LoginModal></LoginModal>}

            <div className="flex h-screen text-black">
                <GroupsBar />
                <MembersBar />
                <Calendar />
            </div>
        </>
    )
}