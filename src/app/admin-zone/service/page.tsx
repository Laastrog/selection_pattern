import Link from "next/link";


export default function ServicePage(){
    return (
        <>
            <div className="flex">
                <Link href={"/admin/service"}>Мэнювка дабавлэныэ услуги</Link>
                <Link href={"/admin/project-post"}>Мэнювка дабавлэныэ проэээкта</Link>
            </div>
            <br />
            <div className="flex flex-col">
                <input type="text" />
                <input type="text" />
            </div>
        </>
    )
}