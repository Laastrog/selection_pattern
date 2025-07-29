import type { NextRequest } from "next/server";
import { AppDataSource}  from "@/data-source";

export async function GET(request: NextRequest){
    return  Response.json({})
}

export async function POST(request: NextRequest){
    console.log(await request.formData())

    AppDataSource.createQueryRunner
    return  Response.json({ok:"ok"})
}