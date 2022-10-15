import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useEffect } from 'react';
import { FcGoogle } from "react-icons/fc"
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { firebaseDataAtom, tokenUserInfoAtom, userLoggedInAtom } from './Atoms';

export const LoginModal = () => {
    const [tokenUserInfo, setTokenUserInfo] = useRecoilState(tokenUserInfoAtom);
    const setUserLoggedIn = useSetRecoilState(userLoggedInAtom);

    const googleLogin = useGoogleLogin({
        scope: "https://www.googleapis.com/auth/calendar.readonly",
        onSuccess: async (tokenResponse) => {
            console.log("tokenResponse:", tokenResponse);
            const userInfo = await axios.get(
                'https://www.googleapis.com/oauth2/v3/userinfo',
                { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } },
            );

            console.log("user info from token response: ", userInfo);

            setUserLoggedIn(true);
            setTokenUserInfo(userInfo);
        },
        onError: errorResponse => console.log(errorResponse),
    });

    useEffect(() => {
        if (tokenUserInfo) console.log("tokenUserInfo Updated:", tokenUserInfo);
    }, [tokenUserInfo, setTokenUserInfo]);

    return (<>
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="mt-3 sm:flex">
                        <div className="mt-2 text-left mx-auto">
                            <h4 className="text-lg font-medium text-gray-800">
                                Login to access FreeTime
                            </h4>
                            <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                FreeTime might ask for access to your google calendar
                            </p>
                            <div className="items-center gap-2 mt-3 sm:flex">
                                <button
                                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                    onClick={() => { googleLogin() }}
                                >
                                    <span><FcGoogle className="inline text-xl" /> Login with Google</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}