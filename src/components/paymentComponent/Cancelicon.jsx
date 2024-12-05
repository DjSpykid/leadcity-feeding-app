import Link from 'next/link';
import React from 'react'
import { GiCancel } from "react-icons/gi";

function Cancelicon() {
  return (
    <Link href={'/'}>
      
     <GiCancel className='w-10 h-10 text-purple-800'/>

    </Link>
  )
}

export default Cancelicon