"use server"

import { createSession } from "@/lib/session"
import { redirect } from "next/navigation"

export async function loginAction(prevState: any, formData: FormData ){
    
    const login = formData.get("login")
    const password = formData.get("password")
    if(login == "admine" && password == "123"){  
        await createSession("1")
        redirect("/admin-zone")
        // const data = await db
        // .insert(users)
        // .values({
        //   login,
        //   password,
        // })
        // .returning({ id: users.id })
        //   const user = data[0]
        //   if (!user) {
        //     return {
        //       message: 'Произошла ошибка при создании вашей учетной записи.',
        //     }
        //   }
        return login && password

        
    }
    return

    
}