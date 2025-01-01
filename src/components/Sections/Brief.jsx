import React, { useEffect, useState } from "react";
import { MENU_API } from "../../utilis/constants";

const Brief = ({ menu }) => {
  //* extract title and card from menu
  const [title, card] = [
    menu?.[0]?.card?.card?.header.title,
    menu?.[0]?.card?.card?.imageGridCards.info,
  ];

  return (
    <div className="contain h-[255px]">
      <div className="cont-header flex w-full justify-between items-center py-2 px-4">
        <h2 className="cont-heading font-bold text-2xl tracking-tight inline-block">{title}</h2>
        <div className="navigators">
          <button className="move-right rounded-full size-6">➡</button>
          <button className="move-left rounded-full size-6">⬅</button>
        </div>
      </div>

      <div className="cont-body px-4 flex gap-6">
        {/* through map */}
        <div className="body-item py-4 ">
          <a href="">
            <div className="img-cotainer">
              <img className="item-img w-28 sm:w-36 aspect-[4/5]" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/12/30/7f8383da-0197-4a4a-8c52-fc6ddb9368be_CakesDesserts2.png" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brief;
