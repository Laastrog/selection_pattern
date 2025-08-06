"use server"

export async function createServices(prevState:string, formData: FormData){
    const name = formData.get("name")
    const shortText = formData.get("shortText")

    const result = await fetch("http://localhost:1200/api/service",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, shortText})
    })

    const data = await result.json()
    console.log("DATAACTION", data)
    return "fsda"
}