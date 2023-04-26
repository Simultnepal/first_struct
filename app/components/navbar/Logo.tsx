"use client";


import Image from "next/image";
// next/image is accessing the public/images dir
import {useRouter } from "next/navigation";
//next/navigation is accessing the useRouter

const Logo = () => {
    const router = useRouter();
  return (
   
      <Image
      alt="Logo"
      className="display-block cursor-pointer gap-2"
      height="100"
      width="100"
      
      src="/images/logo.png"
      
      />
 
  )
}

export default Logo;
