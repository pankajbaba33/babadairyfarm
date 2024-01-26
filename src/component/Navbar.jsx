import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import "./Style.css"
function Navbar() {
  const [data,setData]=useState(true)
  const [datas,setDatas]=useState(true)
  const [two,setTwo]=useState(true)
  const [three,setThree]=useState(true)
  const [four,setFour]=useState(true)
  const [five,setfive]=useState(true)
  const [six,setSix]=useState(true)
  const [seven,setSeven]=useState(true)
  const [eight,setEight]=useState(true)
  const handleData=(x)=>{
      setData(!x)
  }
  
  return (
    <>
      <div className="flex flex-col relative  md:flex-row justify-evenly items-center bg-indigo-950 text-white h-20 w-[100%] capitalize">
        <div className="hover:bg-red-400  p-2 hover:border-b-2">
          <Link to="/"
           className=""
         onMouseEnter={()=>setData(!data)}
         onMouseLeave={()=>setData(true)}
           >Home
  
    
                    
        
          
          </Link>
          {
            data? <i className="fa-solid fa-angle-down"></i>:<i class="fa-solid fa-angle-up"></i>
}
        </div>
        <div className="">
          <Link to="/about"
           onMouseEnter={()=>setDatas(!data)}
           onMouseLeave={()=>setDatas(true)}
          >about
                {
            datas? <i class="fa-solid fa-angle-down upDown"></i>:<i class="fa-solid fa-angle-up"></i>
}
          </Link>
        </div>
        <div className="">
          <Link to="/buycow"
               onMouseEnter={()=>setThree(!three)}
               onMouseLeave={()=>setThree(true)}
          >buycow
                         {
            three? <i class="fa-solid fa-angle-down upDown"></i>:<i class="fa-solid fa-angle-up"></i>
}
          </Link>
        </div>
        <div className="">
          <Link to="/contact"
             onMouseEnter={()=>setFour(!four)}
             onMouseLeave={()=>setFour(true)}
          >contact
                                 {
            four? <i class="fa-solid fa-angle-down upDown"></i>:<i class="fa-solid fa-angle-up"></i>
}
          </Link>
        </div>
        <div className="">
          <Link to="/cowbreeds"
           onMouseEnter={()=>setTwo(!two)}
           onMouseLeave={()=>setTwo(true)}
          >
          {
            two? <i class="fa-solid fa-angle-down upDown"></i>:<i class="fa-solid fa-angle-up"></i>
}
            cowbreeds</Link>
        </div>
        <div className="">
          <Link to="/knowmilk"
           onMouseEnter={()=>setfive(!five)}
           onMouseLeave={()=>setfive(true)}
          >know your milk
                                        {
            five? <i class="fa-solid fa-angle-down upDown"></i>:<i class="fa-solid fa-angle-up"></i>
}
          </Link>
        </div>

        <div className="">
          <Link to="/ourproduct"
           onMouseEnter={()=>setSix(!six)}
           onMouseLeave={()=>setSix(true)}
          >
            
            ourproduct
            {
            six? <i class="fa-solid fa-angle-down upDown"></i>:<i class="fa-solid fa-angle-up"></i>
}
            </Link>
        </div>
        <div className="">
          <Link to="/wecare"
              onMouseEnter={()=>setSeven(!seven)}
              onMouseLeave={()=>setSeven(true)}
          >we care
                    {
            seven? <i class="fa-solid fa-angle-down upDown"></i>:<i class="fa-solid fa-angle-up"></i>
}
          </Link>
        </div>
        <div className="">
          <Link to="/account"
           onMouseEnter={()=>setEight(!eight)}
           onMouseLeave={()=>setEight(true)}
          >account
          {
            eight? <i class="fa-solid fa-angle-down upDown"></i>:<i class="fa-solid fa-angle-up"></i>
}
          
          </Link>
        </div>
       
      </div>
    
    </>
  );
}
export default Navbar;
