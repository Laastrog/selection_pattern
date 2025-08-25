"use client"
import Link from "next/link";
import React, { useActionState, useState } from "react";
import { createServices } from "./action";
// import {AddPost} from "@/ydb"

// export const initialState = {
//     name: "",
//     shortText: "",
// }

export interface AppServiceUslui{
    uslugi:ServiceProps[]
}
export type ServiceProps = {
        id: number
        name: string
        short_text: string
}
export default function AppService( 
    // data:any,
    {uslugi}: AppServiceUslui
    
){
    const [state, formAction, pending] = useActionState(createServices, "")
    const [stateUslugi, setstateUslugi] = useState(uslugi)
    return (
        <>
            <div className="flex gap-2 p-4 items-center">
                <Link href={"/admin-zone/service"}>Мэнювка дабавлэныэ услуги</Link>
                <Link href={"/admin-zone/project-post"}>Мэнювка дабавлэныэ проэээкта</Link>
            </div>

            <br />
            <form action={formAction} className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all ">
                <div className="flex flex-col gap-8 p-6 bg-zinc-300 shadow-md overflow-hidden items-center-safe">
                    <div className="flex flex-col">
                        <label className="text-xl text-zinc-500" htmlFor="name">Название услуги</label>
                        <input className=" bg-neutral-600 rounded-2xl w-80 px-5 shadow-gray-950 shadow-2xl" type="text" name="name" />
                    </div>
                    <div className="flex flex-col ">
                        <label className="text-xl text-zinc-500" htmlFor="name">Краткий обзор услуги</label>
                        <textarea className="bg-neutral-600 rounded-2xl w-80 px-5 resize-none" name="shortText" rows={3}/>
                    </div>
                    
                    <button type="submit" disabled={pending} className=" text-xl h-9 w-40 rounded-xl bg-gray-500">Опубликовать</button>
                </div>
            </form>
            <div>

{/* Читать доку + попытать Аврору */}

           {stateUslugi.length ? (
            <div className="p-5 shadow-2xl">
                {stateUslugi.map(({id, name, short_text})=>(
                   <p key={id}>#{id}, {name}, {short_text}</p>
                ))}
            </div>
        ): null}
           
            
            </div>
            
        </>
    )
}