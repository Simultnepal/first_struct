"use-client";
import {BiSearch} from "react-icons/bi"
const Search = () => {
      return (
        <>

    <div  className="
  

    flex
    w-fit
   
    justify-between
    gap-3
    hover:scale-100
    transition
    xl:gap-3
    md:gap-2
    ">
      
      
        <div
          className="
          border-[1px]
          
          w-fit
          md:w-auto
          py-2
          px-2

          rounded-600
          shadow-sm
          hover:shadow-md
          transition
          hover:scale-105 

          transition duration-200
          cursor-pointer
          "
          > Services
    
    </div>
    <div
          className="
          border-[1px]
          
          w-fit
          md:w-auto
          px-2

          py-2
          rounded-600
          shadow-sm
          hover:shadow-md
          
          hover:scale-105 

            transition duration-200
          cursor-pointer
          
          "
          > Portfolio
    </div>
    <div
          className="
          border-[1px]
          
          
          w-20px
          
          py-2
          px-2
          rounded-600
    shadow-sm
    hover:shadow-md
    hover:scale-105 

            transition duration-200
    cursor-pointer
    
    "
    > Contact&nbsp;us
    </div>
    <div
          className="
          border-[1px]
          
          w-fit
          md:w-auto
          py-2
          px-2
          rounded-600
          shadow-sm
          hover:shadow-md
          hover:scale-105 

            transition duration-200
          cursor-pointer
          
          "
          > FAQs
    </div>
    </div>
    
    </>
  )
}
export default Search
























// {/*
//         ^md:w-auto width decided by element content
//         ^rounded-full:(circle)border radius  to half of its width and height making it circle
//         ^shadow-sm:small drop shadow the element providing subtle sense of depth and making the element standout from the background
//         ^hover:shadow-md:larger drop shadow to the element
//         ^transition:(100 ms)smooth effect animation between states
//         ^by default the transition duration is 150 milliseconds, 
//          */}
//          <div
//          className="
//      flex
//      flex-row
//      items-center
//      justify-end
//      ">
//          <div
//            className="
//            hidden
//            border-r-[1px]
//          text-sm
//          font-semibold
//          px-6
//          "
//          >
//            hello
//          </div>
//          <div className="
//          font-semibold
//          px-10
//          border-r-[1px]
         
//          flex-1
//          text-center
//          ">
//            SimulTerce
//          </div>
//          <div className="
 
//          text-sm
//          pl-6
//          pr-2
//          text-gray-600
//          flex
//          flex-row
//          items-center
//          gap-3
//          "
//          >
//            <div className="
//            hidden
//            ">Add guests</div>
//            <div className="
//            p-1
//            bg-white-500
//            rounded-full
//            text-white
//            ">
//              <BiSearch size={18}/>
//            </div>
//          </div>
//        </div>