import dbConnect from "@/db/dbConnect";
import { authOptions } from "@/lib/AuthOptions";
import Task from "@/models/Task";
import { getServerSession } from "next-auth";


export async function PATCH(req:Request, context: { params: Promise<{ id: string }>}){

    const { params } = context;
    const { id } = await params;

    await dbConnect()

    try {
        const session = await getServerSession(authOptions)

        if (!session?.user?.email){
            return Response.json({message:"Unauthorized"},{status:401})
        }

        const {text,completed} = await req.json()

        const updatedTask = await Task.findOneAndUpdate(
            {_id:id, user:session?.user?.email},
            {$set:{...(text && {text}),...(completed !== "undefined" && {completed})}},
            {new:true}
        )
        
        return Response.json( updatedTask)

    } catch (error) {
        console.error("Error updating the Task",error)
        return Response.json({message:"Error updating the Task"},{status:500})
    }
}

export async function DELETE(req:Request,context: { params: Promise<{ id: string }>}){

    const { params } = context;
    const { id } = await params;

    await dbConnect()

    try {

        const session = await getServerSession(authOptions)

        if (!session?.user?.email){
            return Response.json({message:"Unauthorized"},{status:401})
        }

        await Task.deleteOne({_id : id, user:session?.user?.email})

        return Response.json( {message:"Task successfully deleted."} )
        

    } catch (error) {
        console.error("Error deleting the Task",error)
        return Response.json({message:"Error deleting the Task"},{status:500})
    }

}