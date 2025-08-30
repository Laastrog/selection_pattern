import Link from "next/link"

export default function AdminPage(){
    return (
        <>
         <div className="flex gap-2 p-4 items-center grid-rows-2 " >
            <Link className="font-bold text-lg text-gray-800 mb-1 p-3 " href={"/admin-zone/"}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 14"><path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z"/></svg></Link>
            <Link className="font-bold text-lg text-gray-800 mb-1 " href={"/admin-zone/service"}>Добавить услуги</Link>
                <p className="font-bold text-lg text-gray-800 mb-1">|</p>
            <Link className="font-bold text-lg text-gray-800 mb-1" href={"/admin-zone/projects"}>Просмотр проектов</Link>
             
        </div>
        {/* <hr className="bg-gray-800 w-auto size-0.5 "></hr> */}
        </>
       
        
    )
}