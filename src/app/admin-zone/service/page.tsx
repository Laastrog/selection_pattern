// "use client"
import { GetPost } from "./action";
import AppService, { AppServiceUslui } from "./appService";
import useSWR from "swr";

export default async function ServicePage(){
// let url = "http://localhost:1200/api/service"
// const fetcher = (url: string | URL | Request) => fetch(url).then((r) => r.json())
    const data = await GetPost()
    const uslugi: any[] = data[0]
    // const {data, error, isLoading} = useSWR("http://localhost:1200/api/service", fetcher)

//   if (isLoading) return <div>Loading...</div>
//   if (error) return <div>Error: {error.message}</div>

    return (
        <AppService uslugi={uslugi} 
        // data={data}
        />
    //     <ul>
    //   {data.map((post: { name: string; shortText: string }) => (
    //     <li key={post.name}>{post.shortText}</li>
    //   ))}
    // </ul>
    )
}