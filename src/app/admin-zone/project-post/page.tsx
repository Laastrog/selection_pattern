import Link from "next/link";


export default function ProjectPostPage(){
    return (
        <div className="flex">
            <Link href={"/admin-zone/service"}>Мэнювка дабавлэныэ услуги</Link>
            <Link href={"/admin-zone/project-post"}>Мэнювка дабавлэныэ проэээкта</Link>
        </div>
    )
}