"use server"
import {sql} from "@/ydb"


export async function createServices(prevState:string | [], formData: FormData){
    const name = formData.get("name")
    const short_text = formData.get("shortText")
  
    const result = await sql`INSERT INTO services (name, short_text) VALUES(${name}, ${short_text});`
    return "result"
}

// interface Service {
//   id: number;
//   name: string;
//   short_text: string;
// }

export async function GetPost() {
  const result = await sql`SELECT * FROM services`;
//   const data = result.map((row: any): Service => ({
//     id: row.id,
//     name: row.name,
//     short_text: row.short_text
//   }));
//   return data
  return result
}