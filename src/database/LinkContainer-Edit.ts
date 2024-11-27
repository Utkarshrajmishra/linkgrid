import { db } from "@/firebase"
import { doc, setDoc } from "firebase/firestore";

export const user = sessionStorage.getItem("Auth")
    ? JSON.parse(sessionStorage.getItem("Auth")!)
    : null;

export const deleteSocials = async (item: any, type: boolean, provider:any, link:any, userData: any) => {
  try {
    const dbType = type == true ? "userInfo" : "userLink";
    const docRef = doc(db, dbType, `${user}`);
    await setDoc(docRef, item);
    return { status: true, msg: "Doc updated" };
  } catch (error) {
    return { status: false, msg: `${error}` };
  }
};