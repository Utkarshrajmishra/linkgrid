export interface UserInfoTypes {
  username: string;
  template: Number;
  bio: string;
  soicalProviders: Number[];
  name: string;
  socialLink: LinkTypes[];
  profileImage: string;
}

export interface AuthInfoTypes {
  isLogin: boolean;
  userEmail: string;
}

export interface AuthContextTypes {
  auth: AuthInfoTypes;
  setAuth: (auth: AuthInfoTypes) => void;
}

export interface LinkTypes {
  link: string;
  show: boolean;
  totalClicks: number;
  title:string;
}

export interface UserContextTypes {
  userData: UserInfoTypes;
  setUserData: (userData: UserInfoTypes) => void;
}

export interface LinksTypes {
  link: string;
  show: boolean;
  title: string;
  totalClicks: number;
}

export interface LinkContextTypes {
  userLink: LinksTypes[];
  setUserLink: (userLink: LinksTypes[]) => void;
}


export interface DialogIndexTypes{
  index: Number,
  dataTypes:string,
  dataIndex:number
}
