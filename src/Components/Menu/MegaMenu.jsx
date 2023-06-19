import React, { useEffect, useState } from "react";
import MegaIcon from "../../assets/megamenu.svg";
import MegaMenuItem from "./MegaMenuItem";


const MegaMenu = () => {
  const [menuData,setMenudata]= useState([])
  const getData =() =>{   
    fetch("./FakeData/MegaMenu.json")
    .then(response => response.json())
    .then(data =>setMenudata(data))
    }
    
  useEffect(
    ()=>{getData()},
    []
  )
  return (
    <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
      <div className="flex h-8 pl-[70px]">
        <a 
          className="hover:border-l-red-400 items-center hover:border-l hover:border-l-solid flex px-1"
          href="#"
        >
          <img className="h-[70%] mr-2" src={MegaIcon} alt="" />
          ALL
        </a>
      </div>
      <div className="dropdown-content w-[920%] h-96 bg-[#eee] left-[70px] z-50 opacity-50">
        <ul className="p-4">
         {
          menuData&& menuData.map(
            (item)=>{
              return (
                <MegaMenuItem subcategory= {item.subcategory}  category={item.category}  icon={item.icon} key={item.category}>
                  <img className="h-[100%]" src={item.icon} alt="card" />
                    {item.category}
                </MegaMenuItem>
              )
            }
          )
         }
          
          
          
        </ul>
      </div>
    </div>
  );
};

export default MegaMenu;
