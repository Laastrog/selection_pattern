import Link from "next/link";


export default function ServicePage(){
    return (
        <>
            <div className="flex gap-2 p-4 items-center">
                <Link href={"/admin-zone/service"}>Мэнювка дабавлэныэ услуги</Link>
                <Link href={"/admin-zone/project-post"}>Мэнювка дабавлэныэ проэээкта</Link>
            </div>
            <br />
            <form action="/api/service" method="POST" className="flex flex-col p-5 ">
                <div className="flex flex-col gap-8 bg-zinc-300 shadow-md overflow-hidden items-center-safe">
                    <div className="flex flex-col">
                        <label className="text-xl text-zinc-500" htmlFor="name">Название услуги</label>
                        <input className="bg-neutral-600 rounded-2xl w-2xl px-5 shadow-gray-950 shadow-2xl" type="text" name="name" />
                    </div>
                    <div className="flex flex-col ">
                        <label className="text-xl text-zinc-500" htmlFor="name">Краткий обзор услуги</label>
                        <textarea className="bg-neutral-600 rounded-2xl w-2xl" name="shortText" rows={3}/>
                    </div>
                    <button type="submit" className="text-xl h-9 w-40 rounded-xl bg-gray-500">Опубликовать</button>
                </div>
            </form>
        </>
    )
}