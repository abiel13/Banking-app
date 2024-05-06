import React from "react";
import { ModeToggle } from "./Toggle";

const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  return (
    <div className="flex w-full  items-center">
      <div className="w-full flex flex-col gap-2">
        <div className="">
          <h1 className="text-2xl md:text-3xl font-bold ">
            {title}
            &nbsp;{" "}
            <span className="text-primary">{type === "greeting" && user}</span>
          </h1>
        </div>
        <p className="text-muted-foreground">{subtext}</p>
      </div>
      <ModeToggle />
    </div>
  );
};

export default HeaderBox;
