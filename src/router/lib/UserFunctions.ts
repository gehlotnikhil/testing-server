import { Request,Response } from "express"
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const isUserExist = async(email:string)=>{
    let check1 = await prisma.user.findFirst({where:{email}})
    if(check1 === null){
        return false
    }
    return true
}



const UserFunctions = {isUserExist}
export default UserFunctions