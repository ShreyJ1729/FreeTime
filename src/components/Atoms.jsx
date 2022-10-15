import { atom, selector } from "recoil"

export const userLoggedInAtom = atom({
    key: 'userLoggedIn',
    default: false,
})

export const tokenUserInfoAtom = atom({
    key: 'tokenUserInfo',
    default: null,
})

// config: {}
// data:
// - email:"shreyjoshi2004@gmail.com"
// - email_verified:true
// - family_name:"Joshi"
// - given_name:"Shrey"
// - locale:"en"
// - name:"Shrey Joshi"
// - picture:"https://lh3.googleusercontent.com/a/ALm5wu3bwSPc7bIOMwyj-6uxah97FOVaxJ9dLJzpasR4vg=s96-c"
// - sub:"109592410078630474114"
// headers: {}
// request: {} 
// status : number
// statusText: ""

export const userIdSelector = selector({
    key: 'userId',
    get: ({ get }) => {
        return get(tokenUserInfoAtom).data.sub
    }
})

export const userEmailSelector = selector({
    key: 'userEmail',
    get: ({ get }) => {
        return get(tokenUserInfoAtom).data.email
    }
})

export const userNameSelector = selector({
    key: 'userName',
    get: ({ get }) => {
        return get(tokenUserInfoAtom).data.name
    }
})

export const userPhotoURLSelector = selector({
    key: 'userPhotoURL',
    get: ({ get }) => {
        const jwtTokenInfo = get(tokenUserInfoAtom)
        return jwtTokenInfo?.data.picture;
    }
})

export const firebaseDataAtom = atom({
    key: 'firebaseData',
    default: {users: {}}
})

export const userListSelector = selector({
    key: 'userListSelector',
    get: ({ get }) => {
        const firebaseData = get(firebaseDataAtom)
        return firebaseData?.users;
    }
})

export const selectedUsersAtom = atom({
    key: 'selectedUsers',
    default: []
})