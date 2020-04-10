import {User} from "../utils/types";

export const usersData: User[] = new Array(50).fill("").map((_, index) => ({
    id: index,
    firstName: `Name ${index}`,
    secondName: `Surname ${index}`,
    phone: Math.round(Math.random() * (89999999999 - 80000000000) + 80000000000),
    cabinet: Math.round(Math.random() * 500 + 1),
    post: `Post ${index}`,
    internalPhone: Math.round(Math.random() * 1000 + 100),
}));
