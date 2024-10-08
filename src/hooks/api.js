// import useFetch from "./useFetch";

// export const useHome = ()=>useFetch('https://travel-diary-api.anxoso.com/entries');

// export const useUserInfo = ()=> useFetch(`https://travel-diary-api.anxoso.com/users`)

// export const useRegister = ()=> useFetch(`https://travel-diary-api.anxoso.com/user/register`)
import useFetch from "./useFetch";

export const useHome = () =>
    useFetch("https://travel-diary-api.anxoso.com/entries");

export const useUserInfo = () =>
    useFetch(`https://travel-diary-api.anxoso.com/users`);

export const useRegister = () =>
    useFetch(`https://travel-diary-api.anxoso.com/user/register`);