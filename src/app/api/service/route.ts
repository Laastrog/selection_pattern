import type { NextRequest } from "next/server";
import { AppDataSource}  from "@/data-source";


export async function GET(request: NextRequest){

    const serviceRepository = AppDataSource.getRepository("service")
    const result = await serviceRepository.find()
    
    // Attention
    // console.log("GETresult",result)
    // console.log("PGETserviceRepository",serviceRepository)

    return  Response.json({result})

}

export async function POST(request: NextRequest){
    // console.log(await request.formData())

    
    // const queryRunner = AppDataSource.createQueryRunner()
    // await queryRunner.connect()

    const data = await request.formData()
    const name = data.get("name")
    const shortText = data.get("shortText")
    const serviceRepository = AppDataSource.getRepository("service")

    const result = await serviceRepository.save({name, shortText})

    // Attention
    // console.log("POSTresult",result)
    // console.log("POSTdata",data)
    // console.log("POSTserviceRepository",serviceRepository)
    // Attention    // Attention    // Attention
    // await AppDataSource
    // .createQueryBuilder()
    // .insert()
    // .into(Service.name)
    // .values(FormData)
    // .execute()

    return  Response.json({result})
}