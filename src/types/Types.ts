
export interface UserInfoTypes{
    username:string,
    template:Number,
    bio:string,
    soicalProviders:Number[]
    name:string,
    socialLink:string[],
}

export interface UserContextTypes{
    userData:UserInfoTypes,
    setUserData:(userData:UserInfoTypes)=>void;
}