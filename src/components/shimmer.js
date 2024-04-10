import React from "react";

const Shimmer = () => {
  return (
    <div className="flex justify-center items-center gap-20 flex-wrap">
      <div className="w-[275px] h-[400px] p-2 bg-slate-500 flex flex-col gap-2 items-center rounded-md">
        <div className="w-full h-[250px] bg-gray-700 "></div>
        <p className="bg-slate-700 w-full h-[25px]"></p>
        <p className="bg-slate-700 w-full h-[25px]"></p>
        <p className="bg-slate-700 w-1/2 h-[30px]"></p>
      </div>
      <div className="w-[275px] h-[400px] p-2 bg-slate-500 flex flex-col gap-2 items-center rounded-md">
        <div className="w-full h-[250px] bg-gray-700"></div>
        <p className="bg-slate-700 w-full h-[25px]"></p>
        <p className="bg-slate-700 w-full h-[25px]"></p>
        <p className="bg-slate-700 w-1/2 h-[30px]"></p>
      </div>
      <div className="w-[275px] h-[400px] p-2 bg-slate-500 flex flex-col gap-2 items-center rounded-md">
        <div className="w-full h-[250px] bg-gray-700"></div>
        <p className="bg-slate-700 w-full h-[25px]"></p>
        <p className="bg-slate-700 w-full h-[25px]"></p>
        <p className="bg-slate-700 w-1/2 h-[30px]"></p>
      </div>
      {/* <div className="w-[250px] h-[350px] p-2 bg-slate-500 flex flex-col gap-2 items-center rounded-md">
        <div className="w-full h-[250px] bg-gray-700"></div>
        <p className="bg-slate-700 w-full h-[25px]"></p>
        <p className="bg-slate-700 w-full h-[25px]"></p>
        <p className="bg-slate-700 w-1/2 h-[30px]"></p>
      </div> */}
    </div>
  );
};

export default Shimmer;
