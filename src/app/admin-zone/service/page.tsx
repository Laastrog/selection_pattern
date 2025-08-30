// "use client"

import { GetPost } from "./action";
import AppService from "./appService";
import useSWR from "swr";

export default async function ServicePage(){
// let url = "http://localhost:1200/api/service"
// const fetcher = (url: string | URL | Request) => fetch(url).then((r) => r.json())
    const data = await GetPost()
    const uslugi: any[] = data[0]
    // const {data, error, isLoading} = useSWR("http://localhost:1200/api/service", fetcher)

    return (
        <AppService uslugi={uslugi}/>
    )
}