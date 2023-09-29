"use client"
import React, { useState } from 'react'
import { Dialog ,DialogTrigger,DialogContent} from './ui/dialog'
import { Button } from './ui/button'

import DropZone from "react-dropzone"

const UploadDropZone=()=>{
return <DropZone>
    {({getRootProps,getInputProps})=>(
      <div{...getRootProps({className:"border h-64 m-4 border-dashed border-gray-300 rounded-xl"})}></div>
    )}

  </DropZone> 

}

const fileUpload = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Dialog open={isOpen}
    onOpenChange={(v)=>{
      if (!v){
        setIsOpen(v)
      }
    }}>
      <DialogTrigger onClick={()=>setIsOpen(true)} asChild>
        <Button>Upload PDF</Button>
      </DialogTrigger>

      <DialogContent>
        <UploadDropZone/>
      </DialogContent>
    </Dialog>
  )
}

export default fileUpload

