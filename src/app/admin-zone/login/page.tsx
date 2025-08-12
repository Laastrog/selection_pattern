export default function LoginPage(){
    return(
            <form method="POST" className="max-w-sm mx-auto h-screen flex flex-col justify-center">
                <div className="flex flex-col gap-8 p-6 overflow-hidden items-center-safe">
                    <div className="flex flex-col">
                        <label className="text-xl text-green-700" htmlFor="name">Логин:</label>
                        <input className=" bg-slate-400 rounded-se-xl w-80 px-5 shadow-gray-950 shadow-2xl" type="text" name="login" />
                    </div>
                    <div className="flex flex-col ">
                        <label className="text-xl text-green-800" htmlFor="name">Пароль:</label>
                        <input className=" bg-slate-400 rounded-es-xl w-80 px-5  shadow-gray-950 shadow-2xl" type="text" name="password"/>
                    </div>
                    
                    <button type="submit" className="text-xl h-9 w-40">Добавить учётку</button>
                </div>
            </form>
    )   
}