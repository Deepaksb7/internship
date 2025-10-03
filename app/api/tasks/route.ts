import dbConnect from "@/db/dbConnect";
import { authOptions } from "@/lib/AuthOptions";
import Task from "@/models/Task";
import { getServerSession } from "next-auth";

export async function GET(req:Request){

    await dbConnect()

    try {
        const session = await getServerSession(authOptions)

        if (!session?.user?.email){
            return Response.json({message:"Unauthorized"},{status:401})
        }

        const tasks = await Task.find({user:session.user.email}).sort({createdAt:-1})
        
        return Response.json(tasks,{status:200})


    } catch (error) {
        console.error("Error fetching tasks",error)
        return Response.json({message:"Error fetching tasks"},{status:500})
    }
}

export async function POST(req:Request){

    await dbConnect()

    try {
        const session = await getServerSession(authOptions)

        if (!session?.user?.email){
            return Response.json({message:"Unauthorized"},{status:401})
        }

        const {text} = await req.json()

        const task = await Task.create({
            text,
            user:session.user.email
        })
        return Response.json({task},{status:201})
        
    } catch (error) {
        console.error("Error creating task",error)
        return Response.json({message:"Error Creating task"},{status:500})
    }

}