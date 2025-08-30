"use client"

import { useActionState } from "react"
import { loginAction } from "./action"

export default function LoginPage(){
    const [state, formAction, pending] = useActionState(loginAction, "")
    
    return(
            <form action={formAction} className="max-w-sm mx-auto h-screen flex flex-col justify-center">
                <div className="flex flex-col gap-8 p-6 overflow-hidden items-center-safe mt-8 bg-gray-100 rounded-xl shadow-lg w-full ">
                    <div className="flex flex-col">
                        <label className="font-bold text-lg text-gray-800 mb-1" htmlFor="login">Логин:</label>
                        <input className=" bg-neutral-300 rounded-se-xl w-80 px-5 shadow-gray-950 shadow-2xl" id="login" type="text" name="login" />
                    </div>
                    <div className="flex flex-col ">
                        <label className="font-bold text-lg text-gray-800 mb-1" htmlFor="password">Пароль:</label>
                        <input className=" bg-neutral-300 rounded-es-xl w-80 px-5  shadow-gray-950 shadow-2xl" id="password" type="password" name="password"/>
                    </div>                    
                    <button disabled={pending} type="submit" className="text-xl h-9 w-40 cursor-pointer">Инициализация</button>
                </div>
            </form>
    )   
}
