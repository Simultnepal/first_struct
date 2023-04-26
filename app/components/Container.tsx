'use client';
interface ContainerProps {
    children : React.ReactNode;
}
const Container : React.FC<ContainerProps> = ({children}) => {
  return (
    <div
    className="
     max-w-[2520px]
     w-fill
     mx-[25px]
     
     xl:px-5
     
     
      flex
      flex-row
     md:px-5
     sm:px-1
     
    ">
        {/* 
        max-w-[2520]{fixing max} max width of the element
        mx-auto centers the element horizontally on the page by setting its margin to auto
        xl:px-20{screen>1280px or wider} this sets the padding on the x-axis 
        md:px-10{1280>screen>768px} sets the padding on the x-axis to 10px
        sm:px-2{for 768>screen>640} sets the x-axis to 2 pixels
        px-4 : this sets the padding on the x-axis to 4 px for all screen sizes
*/}
      {children}
    </div>
  )
}

export default Container
