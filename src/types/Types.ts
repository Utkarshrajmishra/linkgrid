
export interface UserInfoTypes{
    username:string,
    template:Number,
    bio:string,
    soicalProviders:Number[]
    name:string,
    socialLink:LinkTypes[],
    profileImage:string
}

export interface AuthInfoTypes{
    isLogin:boolean,
    userEmail:string,
}

export interface AuthContextTypes{
    auth:AuthInfoTypes,
    setAuth:(auth:AuthInfoTypes)=>void,
}

export interface LinkTypes{
    link:string,
    status:boolean,
    totalClicks:Number
}

export interface UserContextTypes{
    userData:UserInfoTypes,
    setUserData:(userData:UserInfoTypes)=>void;
}