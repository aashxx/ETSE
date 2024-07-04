"use client";

import { ServiceTypes } from "@/utils/types";
import React from "react";

const Card: React.FC<ServiceTypes> = ({ img, title, description }) => {
  return (
    <div className="h-[384px] cursor-pointer w-[320px] rounded-lg border relative border-etse-primary text-[white] group overflow-hidden hover:shadow-xl">
      <aside style={{ background: `url(${img}) no-repeat center center/cover` }} className="h-full rounded-lg top-0 z-10 w-full filter brightness-50 absolute" />
      <article className="relative z-20 p-4 flex flex-col h-full justify-end">
        <h1 className="font-bold text-xl md:text-2xl relative z-20 transition-transform duration-500 group-hover:transform group-hover:-translate-y-14">
          {title}
        </h1>
        <p className="font-normal text-base my-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute bottom-0 transform translate-y-full group-hover:translate-y-0">
          {description}
        </p>
      </article>
    </div>
  );
};

export default Card;
