import type { NextRequest } from "next/server";

export async function GET(request: NextRequest){
    return  Response.json({})
}

export async function POST(request: NextRequest){
    console.log(await request.formData())
    return  Response.json({ok:"ok"})
}