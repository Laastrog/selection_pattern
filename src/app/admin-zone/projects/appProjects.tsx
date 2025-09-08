"use client"

import Link from "next/link";
import { useActionState, useState } from "react";
import { createProjects } from "./action";

export default function AppProjects( ){
    const [state, formAction, pending] = useActionState(createProjects, "")
    const [photos, setPhotos] = useState<any>([])

    const changeFille = async (e: any) =>{
        console.log(e)
        const photki =[]
        for(let i = 0; i < e.target.files.length; i++){
            photki.push(e.target.files[i])
        }
        const result =[]
        for(const photo of photki){
            // let reader = new FileReader()
            const dataUrl = await readFille(photo)
            result.push(dataUrl)

            // reader.readAsDataURL(photo)

            // reader.onload = function(){
            //     setPhotos([...photo, reader.result])
            // }

            // reader.onerror = function(){
            //     console.log(onerror)
            // }
        }
        setPhotos([...photos, ...result])
    }
    function readFille(file: any){
        return new Promise ((resolve, reject)=>{
            const reader = new FileReader()
            reader.readAsDataURL(file)

            reader.onload = function(){
                resolve(reader.result)
            }
            reader.onerror = reject
        })
    }

    return(
         <div className="flex flex-col h-screen">
            <div className="flex gap-2 p-2 items-center" >
                <Link className="font-bold text-lg text-gray-800 mb-1 p-3 " href={"/admin-zone/"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M16 20H5a1 1 0 0 1-1-1v-7.86a1 1 0 0 1 .281-.695l5.5-5.7a1 1 0 0 1 1.439 0l2.8 2.9l-1.43 1.402L10.5 6.88L6 11.54v6.455h11v1A1 1 0 0 1 16 20Zm4-6h-8v-2h8v2Z"/></svg></Link>
                <Link className="font-bold text-lg text-gray-800 mb-1 " href={"/admin-zone/service"}>Добавить услуги</Link>
                    <p className="font-bold text-lg text-gray-800 mb-1" >|</p>
                <Link className="font-bold text-lg text-gray-800 mb-1" href={"/admin-zone/projects"}>Просмотр проектов</Link>
            </div>
            <br />
           <form action={formAction} className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex flex-col gap-8 p-8 bg-gradient-to-br bg-gray-100 shadow-lg overflow-hidden items-center rounded-xl w-full max-w-md mx-auto">
                     <div className="flex flex-col w-full">
                        <label className="text-xl font-extralight text-gray-800" htmlFor="name">Название проекта</label>
                        <input className="bg-neutral-300 w-full px-5 text-gray-800 rounded-lg hover:shadow-md transition-shadow" type="text" name="name" />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-xl text-gray-800" htmlFor="name">Краткий обзор проекта</label>
                        <textarea className="bg-neutral-300 w-full px-5 text-gray-800 resize-none rounded-lg hover:shadow-md transition-shadow" name="shortText" rows={3}/>
                    </div>
                    <input className="text-lg text-gray-800" type="file" name="photos" multiple onChange={changeFille} accept=".jpg,.jpeg,.png"></input>
                    {/* {photos } */}
                    <button type="submit" disabled={pending} className="text-xl h-9 w-full max-w-xs rounded-lg text-gray-200 bg-gray-800">Опубликовать</button>
                </div>
            </form>
            <div className="flex flex-col w-full max-w-4xl mx-auto gap-10 p-3 h-[calc(100vh-500px)] overflow-y-auto">
            
            </div>  
        </div>
    )
}