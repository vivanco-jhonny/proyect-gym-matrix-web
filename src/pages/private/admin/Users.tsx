import { useEffect, useState } from "react";
import { useUserDataStore } from "../../../store/UserDataStore";
import { IUser } from "@models/UserInterface";

export const Users = () => {
    const data = useUserDataStore((state) => state.data);
    const [info, setInfo] = useState<IUser[]>();
    const getall = useUserDataStore((state) => state.getall);
    useEffect(() => {
        getall();
        setInfo(data);
        console.log(data);
    }, [info])
    return (
        <div>
            gsdf
            {
                data?.map((d) => {
                    return (
                        <div key={d.id}>
                            <label style={{color: "black"}}>{d.id}</label>
                            <label style={{color: "black"}}>{d.name}</label>
                            <label style={{color: "black"}}>{d.phone}</label>
                            <label style={{color: "black"}}>{d.email}</label>
                        </div>
                    )
                })
            }
        </div>
    );
}