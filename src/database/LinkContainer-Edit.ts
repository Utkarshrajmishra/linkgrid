import { db } from "@/firebase"
import { doc, setDoc } from "firebase/firestore";

export const user = sessionStorage.getItem("Auth")
    ? JSON.parse(sessionStorage.getItem("Auth")!)
    : null;

export const deleteSocials = async ( provider:any, link:any, userData: any) => {
  try {
    const dbType =  "userInfo";
    const docRef = doc(db, dbType, `${user.email}`);
    await setDoc(docRef, {
          username: userData.username,
          template: userData.template,
          bio: userData.bio,
          name: userData.name,
          soicalProviders: provider,
          socialLink: link,
          profileImage: userData.profileImage,
        });
   
    return { status: true, msg: "Doc updated" };
  } catch (error) {
    return { status: false, msg: `${error}` };
  }
};


export const deleteLink = async(provider: any, link: any, userData: any) => {
  try {
    const dbType='userLink'
    const docRef=doc(db, dbType, `${user.email}`)
    await setDoc(docRef, {link:link})
    return { status: true, msg: "Doc updated" };
  } catch (error) {
    return { status: false, msg: `${error}` };
  }
};