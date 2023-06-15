import React from "react";
import MegaIcon from "../../assets/megamenu.svg";

const MegaMenu = () => {
  return (
    <div className="dropdown dropdown-hover dropdown-bottom dropdown-end float-left">
    <div className='flex h-8 pl-[70px]'>
      <a className='hover:border-l-red-400 items-center hover:border-l hover:border-l-solid flex px-1' href="#">
        <img className='h-[70%] mr-2' src={MegaIcon} alt="" />
        ALL
      </a>
    </div>
    <div className="dropdown-content w-[920%] h-96 bg-[#eee] left-[70px]">
    <ul className="p-4">
          <li className="py-2">Dropdown Item 1</li>
          <li className="py-2">Dropdown Item 2</li>
          <li className="py-2">Dropdown Item 3</li>
          <li className="py-2">Dropdown Item 4</li>
        </ul>
     
    </div>
  </div>

  );
};

export default MegaMenu;
