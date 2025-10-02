import dbConnect from "@/db/dbConnect";
import UserSchema from "@/models/User";
import bcrypt from "bcrypt"

export async function POST(request : Request){

    await dbConnect()

    try {
        const {name , email , password } = await request.json()
        
        const userAlreadyExists = await UserSchema.findOne({email})

        if (userAlreadyExists){
            return Response.json({message:"User already exists"},{status:400})  
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const user = await UserSchema.create({
            name,
            email,
            password:hashedPassword
        })

        return Response.json({
            message:"User created successfully",
            user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
        },{
            status:201
        })
        
    } catch (error) {
        console.error("Error registering user",error)
        return Response.json(
            {
                message:"Error registering user"
            },
            {
                status:500
            }
        )
    
    }
}