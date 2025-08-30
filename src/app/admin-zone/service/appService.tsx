"use client"

import Link from "next/link";
import React, { useActionState, useState } from "react";
import { createServices } from "./action";

export interface AppServiceUslui{
    uslugi:ServiceProps[]
}
export type ServiceProps = {
        id: number
        name: string
        short_text: string
}
export default function AppService( 
    {uslugi}: AppServiceUslui
    
){
    const [state, formAction, pending] = useActionState(createServices, "")
    const [stateUslugi, setstateUslugi] = useState(uslugi)

    return (
        <div className="flex flex-col h-screen m-auto ">
            <div className="flex gap-2 p-4 items-center grid-rows-2 " >
            <Link className="font-bold text-lg text-gray-800 mb-1 p-3 " href={"/admin-zone/"}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 14"><path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z"/></svg></Link>
            <Link className="font-bold text-lg text-gray-800 mb-1 " href={"/admin-zone/service"}>Добавить услуги</Link>
                <p className="font-bold text-lg text-gray-800 mb-1" >|</p>
            <Link className="font-bold text-lg text-gray-800 mb-1" href={"/admin-zone/projects"}>Просмотр проектов</Link>
        </div>

            <br />
            <form action={formAction} className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex flex-col gap-8 p-8 bg-gradient-to-br bg-gray-100 shadow-lg overflow-hidden items-center rounded-xl">
                     <div className="flex flex-col">
                        <label className="text-xl font-extralight text-gray-800" htmlFor="name">Название услуги</label>
                        <input className=" bg-neutral-300 w-80 px-5 text-gray-800 rounded-lg hover:shadow-md transition-shadow" type="text" name="name" />
                    </div>
                    <div className="flex flex-col ">
                        <label className="text-xl text-gray-800" htmlFor="name">Краткий обзор услуги</label>
                        <textarea className="bg-neutral-300 w-80 px-5 text-gray-800 resize-none  rounded-lg hover:shadow-md transition-shadow" name="shortText" rows={3}/>
                    </div>
                    
                    <button type="submit" disabled={pending} className=" text-xl h-9 w-40 rounded-lg text-gray-200 bg-gray-800">Опубликовать</button>
                </div>
            </form>
            <div className="flex flex-col mx-auto gap-10">

           {stateUslugi.length ? (
            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
                {stateUslugi.map(({id, name, short_text})=>(
                <div key={id} className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg text-gray-800 mb-1">#{id} /{name}</h3>
                    <p className="text-gray-600">{short_text}</p>
                    {/* truncate */}
                </div>
                ))}
            </div>
            ): null}
            </div>  
        </div>
    )
}