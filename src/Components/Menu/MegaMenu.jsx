import React, { useEffect, useState } from "react";
import MegaIcon from "../../assets/megamenu.svg";
import MegaMenuItem from "./MegaMenuItem";
import { Link } from "react-router-dom";

const MegaMenu = () => {
  const [menuData, setMenudata] = useState([]);
  const [megaData, setMegaData] = useState([]);
  const getData = () => {
    fetch(import.meta.env.VITE_BASE_URL + "/api/categories?populate=*", {
      headers: { Authorization: "bearer " + import.meta.env.VITE_API_KEY },
    })
      .then((response) => response.json())
      .then((result) => {
        setMenudata(result.data);
        console.log(result.data);
      });
  };
  const generateMenu = () => {
    const root = {
      title: "All",
      id: 0,
      parent: -1,
      subCategory: [],
      icon: undefined,
    };
    function getSubCategory(menuItem) {
      for (let i = 0; i < menuData.length; i++) {
        if (menuData[i].attributes.parent == menuItem.id) {
          const item = {
            title: menuData[i].attributes.title,
            id: menuData[i].id,
            parent: menuItem.id,
            subCategory: [],
            icon: menuData[i].attributes.icon,
          };
          menuItem.subCategory.push(item);
          getSubCategory(item);
        }
      }
    }
    getSubCategory(root);
    setMegaData(root);
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    generateMenu();
  }, [menuData]);
  return (
    <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
      <div className="flex h-8 pl-[70px]">
        <a
          className="hover:border-l-red-400 items-center hover:border-l hover:border-l-solid flex px-1"
          href="#"
        >
          <img className="h-[70%] mr-2" src={MegaIcon} alt="all" />
          ALL
        </a>
      </div>
      <div className="dropdown-content w-[920%] h-96 bg-[#eee] left-[70px] z-50 opacity-50">
        <ul className="p-4">
          {megaData.subCategory &&
            megaData.subCategory.map((item) => {
              return (
                <MegaMenuItem
                  subcategory={item.subCategory}
                  icon={item.icon}
                  key={item.id}
                >
                  <Link
                    className="h-[100%] flex items-center py-1"
                    to={"products/" + item.id}
                  >
                    <img
                      className="h-[100%]  py-1 pr-1 "
                      src={
                        import.meta.env.VITE_BASE_URL +
                        item.icon.data[0].attributes.url
                      }
                      alt="card"
                    />
                    {item.title}
                  </Link>
                </MegaMenuItem>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default MegaMenu;
