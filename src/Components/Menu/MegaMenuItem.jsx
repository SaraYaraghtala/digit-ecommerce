import React, { useState } from "react";

const MegaMenuItem = ({children,subcategory}) => {
    const [showPanel, setShowpanel]= useState(false)
  return (
    <li className="  py-2 my-2 h-10 w-40 hover:border-l-red-400 hover:border-l hover:border-l-solid hover:cursor-pointer hover:bg-slate-200 flex items-center">
      <div className="h-8 flex items-center" onMouseOver={()=>setShowpanel(true)} onMouseOut={()=> setShowpanel(false)}> {children}</div>

     { showPanel && <div className=" absolute left-44 top-0 h-full w-[86%] bg-red-300 ">
        {subcategory && subcategory.map (
            (item)=> {
                return (
                    <div className="">
                        {item}
                    </div>
                )
            }
        )}
     </div>} 
    </li>
  );
};

export default MegaMenuItem;
