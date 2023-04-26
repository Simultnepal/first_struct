import Container from "../Container"
import Logo from "./Logo"
import Search from "./Search"
import Usermenu from "./Usermenu"



const Navbar = () => {
  return (
    <div className="
      fixed 
      flex 
     justify-center
     items-center
      top-0 
     
      bg-dark
      text-white
      border-b-[2px]
      bg-opacity-50
      backdrop-blur-lg
      backdrop-opacity-80
      
       top-0
      w-full
      z-50 
      sm:gap-12
      shadow-sm
    ">
      <div className="
        py-4 
        border-b-[1px]
      ">
        <Container>
          <div className="
            flex 
            flex-row 
            items-center 
            justify-between 
            
            sm:gap-4
            md:gap-7 
            mm:gap-4
            max-w-6xl 
            mx-auto
          ">
            <Logo  />
            <div
            className="
            sm:hidden
            md:block
            xl:block
            mm:hidden
            "
            >

            <Search  />
            </div>
            <Usermenu  />
          </div>
        </Container>
      </div>
      
    </div>
  )
}

export default Navbar
