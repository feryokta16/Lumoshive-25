import React, { useState } from "react";

const Logo = () => {
  const [hoverItem, setHovererItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHovererItem(item);
  };
  const handleMouseLeave = () => {
    setHovererItem(null);
  };

  const menuItems = [
    { title: "HOME" },
    { title: "COMPANY" },
    { title: "COMMUNITY", list: ["Subitem X", "Subitem Y", "Subitem Z"] },
    { title: "STORIES", list: ["Subitem 1", "Subitem 2"] },
    { title: "INSIGHT", list: ["Subitem 1", "Subitem 2"] },
    { title: "TOP LIST" },
    { title: "NEWSROOM", list: ["Subitem 1", "Subitem 2"] },
    { title: "KALKUPEDIA", list: ["Subitem 1", "Subitem 2"] },
  ];
  return (
    <div className="container mx-auto shadow-md mb-2">
      <div>
        <h1 className="text-green-600 text-2xl">Tokopedia</h1>
      </div>
      <div className="hidden lg:flex gap-10 my-7">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={handleMouseLeave}
            className="relative text-black"
          >
            <h2>{item.title}</h2>
            {hoverItem === item.title && (
              <ul className="absolute left-0 mt-2 bg-white text-black z-10 ">
                {item.list &&
                  item.list.map((subitem, subIndex) => (
                    <li key={subIndex} className="px-4 py-2">
                      {subitem}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
