import { collection, doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "../Firebase";
import { IUser } from "@models/UserInterface";
import { User } from "@models/UserClass";

const NameCollection = "User";

interface Users {
    data: IUser[],
    user: User,
    getall: () => void,
    setuser: (uid: string) => void,
    add: (uid: string, user: User) => void
}

export const useUserDataStore = create<Users>((set) => ({
    data: [] as IUser[],
    user: {} as User,
    getall: async () => {
        onSnapshot(collection(db, NameCollection), (querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data().users
            })) as IUser[];
            set({ data: data })
        })
    },
    setuser: (uid: string) => {
        async function d(): Promise<any> {
            const docRef = doc(db, NameCollection, uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                set({user: docSnap.data().user});
            } else {
                console.log("No such document!");
            }
        }
        d();
    },
    add: async (uid: string, user: User) => {
        await setDoc(doc(db, NameCollection, uid), { user });
    }
}))
