
import React, { useState } from "react";

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
              <div key={subItem.name}>
                <div className="font-bold">{subItem.name}</div>
                {subItem.subsubcategories && (
                  <ul className="pl-2 ">
                    {subItem.subsubcategories.map((subSubItem) => (
                      <li key={subSubItem}>
                        <a href="#" className="py-2">
                          {subSubItem}
                        </a>
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
