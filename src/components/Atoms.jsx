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
    default: { users: {} }
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

export const calendarViewDataAtom = atom({
    key: 'calendarViewData',
    default: []
})

export const hoverBoxDataAtom = atom({
    key: 'hoverBoxData',
    default: ""
})

export const hoverBoxPositionAtom = atom({
    key: 'hoverBoxPosition',
    default: {left: 0, top: 0}
})

export const showHoverBoxAtom = atom({
    key: 'showHoverBox',
    default: false
})

export const calPeopleDataAtom = atom({
    key: 'calPeopleData',
    default: [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""]
    ]
})

export const maxCalendar =
    [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 1, 1, 0],
        [0, 0, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1, 0, 0],
        [0, 1, 1, 1, 0, 1, 0],
        [0, 1, 1, 1, 0, 1, 0],
        [0, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ]

export const shreyCalendar =
    [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1],
        [0, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 0, 1],
        [0, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 0, 1, 0, 0],
        [0, 1, 1, 0, 1, 0, 0],
        [0, 1, 1, 1, 1, 0, 0],
        [0, 1, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ]

export const ethanCalendar =
    [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ]

export const shivamCalendar =
    [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 1, 0, 1, 1],
        [1, 0, 1, 0, 1, 0, 0],
        [1, 1, 1, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 0, 0],
        [1, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ]


export const nullCalendar =
    [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ]

export const addCalendar = (cal1, cal2, cal3, cal4) => {
    let newcal = [
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1]
    ]

    const availability = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""]
    ]

    for (let hour = 0; hour < 18; hour++) {
        for (let day = 0; day < 7; day++) {
            newcal[hour][day] = cal1[hour][day] + cal2[hour][day] + cal3[hour][day] + cal4[hour][day];
            let busylist = []
            if (cal1[hour][day]) busylist.push("Max")
            if (cal2[hour][day]) busylist.push("Ethan")
            if (cal3[hour][day]) busylist.push("Shrey")
            if (cal4[hour][day]) busylist.push("Shivam")
            availability[hour][day] = busylist.join(", ")
        }
    }

    return { "busy": newcal, "people": availability };

}