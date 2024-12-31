import React, { useEffect, useState } from "react";
import { MENU_API } from "../../utilis/constants";

const Brief = ({ menu }) => {
  //* extract title and card from menu
  const [title, card] = [
    menu?.[0]?.card?.card?.header.title,
    menu?.[0]?.card?.card?.imageGridCards.info,
  ];

  return (
    <div className="container">
      <div className="cont-header">
        <h2 className="cont-heading"></h2>
        <div className="navigators">
          <button className="move-right"></button>
          <button className="move-left"></button>
        </div>
      </div>

      <div className="cont-body px-4 flex gap-6">
        {/* through map */}
        <div className="body-item ">
          <a href="">
            <div className="">
              <img className="item-img" src="" alt="" />
              <h4 className="item-text"></h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brief;
