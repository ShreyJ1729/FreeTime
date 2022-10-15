import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import {app} from "./Firebase"
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useEffect } from 'react';
import { FcGoogle } from "react-icons/fc"
import { useRecoilState, useSetRecoilState } from 'recoil';
import { jwtTokenInfoAtom, userLoggedInAtom } from './Atoms';

export const LoginModal = () => {
    const [jwtTokenInfo, setJwtTokenInfo] = useRecoilState(jwtTokenInfoAtom);
    const setUserLoggedIn = useSetRecoilState(userLoggedInAtom);

    const googleLogin = useGoogleLogin({
        scope: "https://www.googleapis.com/auth/calendar.readonly",
        onSuccess: async (tokenResponse) => {
            console.log(tokenResponse);
            const userInfo = await axios.get(
                'https://www.googleapis.com/oauth2/v3/userinfo',
                { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } },
            );

            console.log(userInfo);
        },
        onError: errorResponse => console.log(errorResponse),
    });

    const onSuccess = (response) => {
        console.log(response);
        let decoded = jwt_decode(response.credential);
        setUserLoggedIn(true);
        setJwtTokenInfo(decoded)
    }

    useEffect(() => {
        if (jwtTokenInfo) console.log(jwtTokenInfo);
    }, [jwtTokenInfo]);


    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const db = getFirestore(app);

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });


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
                                    {/* <div className="mx-auto px-auto">
                                    <GoogleLogin
                                        onSuccess={onSuccess}
                                        onError={() => {
                                            console.log('Login Failed');
                                        }}
                                    />
                                </div> */}
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