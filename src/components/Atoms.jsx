import { atom, selector } from "recoil"

export const userLoggedInAtom = atom({
    key: 'userLoggedIn',
    default: false,
})

export const jwtTokenInfoAtom = atom({
    key: 'jwtTokenInfo',
    default: null,
})

export const userPhotoURLSelector = selector({
    key: 'userPhotoURL',
    get: ({get}) => {
        const jwtTokenInfo = get(jwtTokenInfoAtom)
        return jwtTokenInfo?.picture;
    }
})