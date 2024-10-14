
export interface UserInfoTypes{
    username:string,
    template:string,
    bio:string,
    name:string,
}

export interface UserContextTypes{
    userData:UserInfoTypes,
    setUserData:(userData:UserInfoTypes)=>void;
}