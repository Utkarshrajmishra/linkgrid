
export interface UserInfoTypes{
    username:string,
    template:string,
    bio:string,
    soicalProviders:string[]
    name:string,
}

export interface UserContextTypes{
    userData:UserInfoTypes,
    setUserData:(userData:UserInfoTypes)=>void;
}