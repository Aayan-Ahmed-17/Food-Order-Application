import React, { useEffect, useState } from "react";
import { CDN_URL, MENU_API } from "../../utilis/constants";

const Brief = ({ menu }) => {
  //* extract title and card from menu
  const [title, card] = [
    menu?.[0]?.card?.card?.header.title,
    menu?.[0]?.card?.card?.imageGridCards.info,
  ];

  return (
    <div className="contain h-[255px]">
      <div className="cont-header flex w-full justify-between items-center py-2 px-4">
        <h2 className="cont-heading font-bold text-2xl tracking-tight inline-block">
          {title && title}
        </h2>
        <div className="navigators">
          <button className="move-right rounded-full size-6">➡</button>
          <button className="move-left rounded-full size-6">⬅</button>
        </div>
      </div>

      <div
        className="cont-body px-4 flex gap-6 overflow-x-auto scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* through map */}
        {card &&
          card.map((e) => {
            return (
              <div key={e.id} className="body-item py-4 flex-shrink-0">
                <a href={e.action.link}>
                  <div className="img-cotainer">
                    <img
                      className="item-img w-28 sm:w-36 aspect-[4/5]"
                      src={CDN_URL + e.imageId}
                      alt={e.action.text}
                    />
                  </div>
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Brief;
