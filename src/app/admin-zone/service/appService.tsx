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
            <form action={formAction} className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
                <div className="flex flex-col gap-8 p-8 bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg overflow-hidden items-center rounded-xl">
                     <div className="flex flex-col">
                        <label className="text-xl text-gray-800 " htmlFor="name">Название услуги</label>
                        <input className=" bg-neutral-400 rounded-2xl w-80 px-5 shadow-gray-950 shadow-2xl" type="text" name="name" />
                    </div>
                    <div className="flex flex-col ">
                        <label className="text-xl text-gray-800 " htmlFor="name">Краткий обзор услуги</label>
                        <textarea className="bg-neutral-400 rounded-2xl w-80 px-5 resize-none" name="shortText" rows={3}/>
                    </div>
                    
                    <button type="submit" disabled={pending} className=" text-xl h-9 w-40 rounded-xl bg-neutral-500">Опубликовать</button>
                </div>
            </form>
            <div>

{/* Читать доку + попытать Аврору */}

           {stateUslugi.length ? (
             <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
                {stateUslugi.map(({id, name, short_text})=>(
                   <div key={id} className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-gray-800 mb-1">#{id} /{name}</h3>
                <p className="text-gray-600">{short_text}</p>
            </div>
                ))}
            </div>
        ): null}
           
            
            </div>
            
        </>
    )
}