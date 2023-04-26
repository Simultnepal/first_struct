'use client';
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai"
import { MdOutlineDarkMode } from "react-icons/md"
import MenuItem from "./MenuItem";
import {useRouter } from "next/navigation";
import { FaTimes } from 'react-icons/fa';





const Usermenu = () => {
    const[Menu, setMenu] = useState(false);
    const [Color,setColor ] = useState(false);

    const router = useRouter();
   
    const Open = useCallback(() => {
        setMenu(!Menu);
      }, [Menu]);

      const Copen = useCallback(()=>{
        setColor(!Color)
      },[Color]);

      
  return (
    <>
   <div className="relative">
    <div className="
    flex
    flex-row
    sm:gap-4
    
    items-center
    gap-3
    ">
<div 
onClick={()=>{}}
className="
    hidden
    md:block
    border-[1px]
    py-3
    px-3
    gap-[2px]
    hover:cursor-pointer
    hover:bg-white
    hover:text-black
    dark:hover:bg-black
    dark:hover:text-white

    font-semibold
    rounded-[15px]
    transition
">

      Download&nbsp;Proposal
    </div>
    <div
onClick={()=>{Copen}}
className="
 
border-neutral-200
 
md:py-3
md:px-3
flex

flex-row
items-center
gap-4
cursor-pointer
hover:shadow-md
hover:scale-105 
transition ">

    <MdOutlineDarkMode/>
   
</div>
   
    
    
<div
onClick={Open}
className="
hidden
@media screen(sm) {
    sm:block
    mm:block
    md:hidden
    xl:hidden
  }
blue-200

p-2
border-[1px]
border-neutral-200
md:py-1
md:px-3
flex
flex-row
items-center
gap-4
cursor-pointer
hover:shadow-md
hover:scale-10
transition  
">
    
<AiOutlineMenu/>




<div className="absolute z-20 flex  flex-col cursor-pointer 
bg-black-800
  w-fill
">

            {Menu && (
              
              <>
              <div onClick={Open} className=" text-gray-400 ml-auto flex justify-end float-right text-2xl " >
                
              <FaTimes onClick={Open}  />
              </div>
              <div className=" 
              bg-black
            
              hover:bg-black
               
              hover:cursor-pointer
              
              ">

                <MenuItem 
                  label="Services" 
                  onClick={() => router.push('/services')}
                  />
                <MenuItem 
                  label="Portfolio" 
                  onClick={() => router.push('/portfolio')}
                  />
                <MenuItem 
                  label="Contact us" 
                  onClick={() => router.push('/contactus')}
                  />
                <MenuItem 
                  label="FAQs" 
                  onClick={() => router.push('/faqs')}
                  />
                
                <hr />
                <MenuItem 
                  label="Download Proposal" 
                  onClick={() =>router.push('/download')}
                  />
                  <MenuItem 
                  label="Request" 
                  onClick={() =>router.push('/request')}
                  />
                  </div>
              </>
            ) }
            </div>

    </div>
</div>
    </div>
       </>

  )
};

export default Usermenu
