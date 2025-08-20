"use client"

import { useActionState } from "react"
import { loginAction } from "./action"

export default function LoginPage(){
    const [state, formAction, pending] = useActionState(loginAction, "")
    
    return(
            <form action={formAction} method="POST" className="max-w-sm mx-auto h-screen flex flex-col justify-center">
                <div className="flex flex-col gap-8 p-6 overflow-hidden items-center-safe">
                    <div className="flex flex-col">
                        <label className="text-xl text-green-700" htmlFor="login">Логин:</label>
                        <input className=" bg-slate-400 rounded-se-xl w-80 px-5 shadow-gray-950 shadow-2xl" id="login" type="text" name="login" />
                    </div>
                    <div className="flex flex-col ">
                        <label className="text-xl text-green-800" htmlFor="password">Пароль:</label>
                        <input className=" bg-slate-400 rounded-es-xl w-80 px-5  shadow-gray-950 shadow-2xl" id="password" type="password" name="password"/>
                    </div>
                    
                    {/* <p className="text-2xl text-red-700 border-2 border-b-orange-700">{state}</p> */}
                    
                    <button disabled={pending} type="submit" className="text-xl h-9 w-40 cursor-pointer">Инициализация</button>
                </div>
            </form>
    )   
}