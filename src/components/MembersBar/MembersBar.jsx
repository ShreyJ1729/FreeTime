import { getDatabase, ref, set, onValue } from "firebase/database";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { firebaseDataAtom, userListSelector, selectedUsersAtom } from "../Atoms";
import { db } from "../Firebase";

export const MembersBar = () => {
    const [firebaseData, setFirebaseData] = useRecoilState(firebaseDataAtom)
    const userList = useRecoilValue(userListSelector)
    const [selectedUsers, setSelectedUsers] = useRecoilState(selectedUsersAtom);

    // manage checking/unchecking users
    const toggleUser = (userId) => {
        const classList = document.getElementById("button-" + userId).classList;
        const userButton = document.getElementById("checkbox-" + userId);

        userButton.checked = !userButton.checked;
        if (classList.contains("text-gray-900")) { // uncheck
            setSelectedUsers(selectedUsers.filter((arrUID) => {
                return arrUID !== userId;
            }))

            classList.remove("text-gray-900");
            classList.add("text-gray-400");
        } else {
            setSelectedUsers([...selectedUsers, userId])
            classList.remove("text-gray-400"); // check
            classList.add("text-gray-900");
        }
    }

    useEffect(() => {
        console.log("selected users changed:, " + selectedUsers);
        // send a message to the backend with selected user IDs
    }, [
        selectedUsers
    ])

    useEffect(() => {
        // single point of truth atom
        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();
            setFirebaseData(data);
        });
    }, [])

    // useEffect((firebaseData) => {
    //     console.log("firebase data updated!", firebaseData)
    // }, [firebaseData, setFirebaseData])


    return (
        <>
            <div className="hidden flex-col w-60 md:flex" style={{ "backgroundColor": "#F2F3F5" }}>
                <button className="flex items-center mx-auto h-12 font-title text-[18px] font-semibold text-black">
                    My Friends
                </button>
                <hr className=" border-1" />
                <div className="overflow-y-scroll flex-1 pt-3 space-y-2 font-medium text-gray-400 scrollbar-hide">
                    {Object.keys(userList).map((userId) => {
                        return (
                            <div key={userId}>
                                <button onClick={() => { toggleUser(userId) }} id={"button-" + userId} className="flex items-center pl-5 w-full font-title text-sm tracking-wide hover:text-black uppercase">
                                    <input type="checkbox" value="" id={"checkbox-" + userId} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-700 checked:border-purple-700 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer ml-0 mr-1" />
                                    <img className="w-1/12 h-1/12 mx-1 rounded-full" src={firebaseData?.users[userId].picture} alt=""/>
                                    {userList[userId].name}
                                </button>
                            </div>
                        )
                    })}
                </div>

                {/* <hr className="border-1" />

                <div className="items-center mx-auto font-title my-2 ml-2 mr-auto px-0 text-black grid grid-cols-2">
                    <div className="col-span-1 grid grid-cols-2">
                        <img
                            className="rounded-full mx-2 col-span-1"
                            src="https://avatars.githubusercontent.com/u/23284483?v=4"
                            alt=""
                            width={36}
                            height={36}
                        />
                        <p className="col-span-1 text-[12px]">Shrey</p>
                    </div>
                    <div className="col-span-1">
                        Signout
                    </div>
                </div> */}
            </div>
        </>
    )
}