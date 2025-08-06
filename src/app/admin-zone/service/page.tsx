import AppService from "./appService";

export default async function ServicePage(){
    const data = await fetch("http://localhost:1200/api/service")
    const uslugi = await data.json()
    return (
        <AppService uslugi={uslugi}/>
    )
}