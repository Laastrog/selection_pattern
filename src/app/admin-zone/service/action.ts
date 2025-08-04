"use server"

import { POST } from "@/app/api/service/route"

export async function createServices(prevState:any, formData: FormData){
    const name = formData.get("name")
    const shortText = formData.get("shortText")

    const result = await fetch("/api/service",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, shortText})
    })

    const data = await result.json()
    console.log("DATAACTION", data)
    return "fsda"
}