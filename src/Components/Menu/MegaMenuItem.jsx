
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MegaMenuItem = ({ children, subcategory }) => {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <li
      className="py-2 my-2 h-10 w-40 hover:border-l-red-400 hover:border-l hover:border-l-solid hover:cursor-pointer hover:bg-slate-200 flex items-center" onMouseOver={() => setShowPanel(true)}onMouseOut={() => setShowPanel(false)}>
      <div  className="h-8 flex items-center" >{children}</div>
       {showPanel && (
        <div className="absolute pl-1 left-44 top-0 h-full w-[86%]  bg-pink-50">
          {subcategory &&
            subcategory.map((subItem) => (
              <div key={subItem.id}>
                <div className="font-bold">
                  < Link to={"products/"+subItem.id} > {subItem.title}</Link>
                </div>
                {subItem.subCategory && (
                  <ul className="pl-2 ">
                    {subItem.subCategory.map((subSubItem) => (
                      <li key={subSubItem.id}>
                        <Link to={"products/"+subSubItem.id} className="py-2">
                          {subSubItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </div>
      )}
    </li>
  );
};

export default MegaMenuItem;
