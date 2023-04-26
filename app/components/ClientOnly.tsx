
"use client";
import { useEffect, useState } from "react";
interface ClientOnlyProps {
    children:React.ReactNode;
}

// the clientonly is going to change we are in the server side or not
const ClientOnly : React.FC<ClientOnlyProps> =({children})=>{
    //if the childen (which is the compoent which the parent is wrapping into) is being rendered which is checked by the useEffect function
    // it will return true otherwise if the childern is not rendered then it will return null and  if the null is being returned it will not execute the return from the parent compoent which fixes the error 
    // if the childern is rendered then it will make the useState thing true and then will return the render thing specified !
    // where there is {childern} which is the compoent itself
    const[hasMounted, setHasMounted] = useState(false);
    // the moment this component loads, it means that the serverside rendering is finished
    // and client side rendering can be done
    useEffect(()=>{
        setHasMounted(true);
    },[])
    // if the server side is not mounted then return null, don't render client side rendering

    if(!hasMounted){
        return null
    }
    return(
        <>
        {children}
        </>

    );
}
export default ClientOnly;

