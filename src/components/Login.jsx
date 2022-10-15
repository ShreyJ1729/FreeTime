import React from 'react';
import { userLoggedInAtom } from './Atoms';
import { useRecoilValue } from 'recoil';
import { Navigate } from 'react-router-dom';

export const Login = () => {
    const loggedIn = useRecoilValue(userLoggedInAtom)
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
    };
    return (
        <>
            {loggedIn && <Navigate to="/home" /> }

            <div className='h-screen flex bg-gray-bg1'>
                <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                    <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                        Log in to your account to access FreeTime
                    </h1>

                    <form onSubmit={handleFormSubmit}>
                        <div className='flex justify-center items-center mt-6'>
                            <button
                                className={`bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
                            >
                                Sign In With Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};