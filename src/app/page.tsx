import FileUpload from "@/components/fileUpload"
import { Button } from "@/components/ui/button"
import { UserButton, auth } from "@clerk/nextjs"
import { LogIn } from "lucide-react"
import Link from "next/link"


export default async function  Home() {
    const {userId}=await auth()
 
    const isAuth=!!userId
 return (
  <div className="w-screen min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900">

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center">
                <h1 className="mr-3 text-5xl font-semibold">CHAT WITH YOUR PDF</h1>  
                <UserButton afterSignOutUrl="/"/>
            </div>
            <div className="flex mt-2">
                {isAuth && <Button>Go to Chats</Button>}
            </div>
            <p className=" max-w-xl mt-1 text-lg text-slate-600">
                Join millions of students, researchers and professionals and understand with AI
            </p>
                  <div className="flex justify-center w-full mt-4">
                    {isAuth ? <FileUpload/>:<Link href="/signin"><Button>Login to get Started! <LogIn className="w-4 h-4 ml-2"/></Button></Link>}
                </div>
                
                
    </div>
    </div>
  </div>
 )
}