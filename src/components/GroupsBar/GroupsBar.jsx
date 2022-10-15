import { useRecoilState, useRecoilValue } from "recoil"
import { userLoggedInAtom, userPhotoURLSelector } from "../Atoms"
import { GroupIcon } from "./GroupIcon"

export const GroupsBar = () => {
    const userLoggedIn = useRecoilValue(userLoggedInAtom)
    const userPhotoURL = useRecoilValue(userPhotoURLSelector);

    return (
        <>
            <div className="hidden overflow-y-scroll p-3 md:block scrollbar-hide" style={{ "backgroundColor": "#E4E5E8" }}>
                {/* this button will toggle open/close a signin/signout menu */}
                {/* it will also be a signin button if user not signed in */}
                <button className="mt-0 mb-2">
                    <img
                        className="rounded-full"
                        src={userLoggedIn ? userPhotoURL : "/images/default-avatar.jpeg"}
                        alt={"somelabel"}
                        width={48}
                        height={48}
                    />
                </button>

                <hr />
                <GroupIcon pictureURL="https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png" />
                <hr />
                <GroupIcon pictureURL="https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png" />
                <hr />
            </div>
        </>
    )
}