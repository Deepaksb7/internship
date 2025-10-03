import dbConnect from "@/db/dbConnect";
import { authOptions } from "@/lib/AuthOptions";
import User from "@/models/User";
import { getServerSession } from "next-auth";


export async function GET(req:Request){
    await dbConnect();

    try {
        const session = await getServerSession(authOptions)

        if(!session?.user?.email){
            return Response.json({message:"Unauthorized"},{status:401})
        }

        const user = await User.findOne({email: session.user.email}).select("-password")

        return Response.json({user},{status:200})

    } catch (error) {
        console.error("Error fetching profile",error)
        return Response.json({message:"Error fetching profile"},{status:500})        
    }
}

export async function PUT(req:Request){
    await dbConnect()

    try {
        const session = await getServerSession(authOptions)

        if(!session?.user?.email){
            return Response.json({message:"Unauthorized"},{status:401})
        }
    
        const { name } = await req.json()

        const user = await User.findOneAndUpdate(
            {email:session?.user?.email},
            {name},
            {new:true}
        ).select("-password")

        return Response.json({user},{status:200})

    } catch (error) {

        console.error("Error Editing profile",error)
        return Response.json({message:"Error Editing profile"},{status:500})     
        
    }

}