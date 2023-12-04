import React from "react";
import { freeBreakdown, mechanics } from "../common/helper";

const Mechines = () => {
  return (
    <div className="px-5 pt-[30px] sm:pt-[95px] lg:pb-[54px] w-full h-auto bg-[#00142b] pb-[74px]">
      <div>
        <h2 className="text-center text-white text-[24px] sm:text-[32px] leading-8 sm:leading-10 font-medium font-robotoflex">
          MECHANICS & REVENUE SHARE
        </h2>
      </div>
      <div className="rounded-[12px] px-5 sm:px-[35px] sm:py-[15px] py-[10px] bg-[#34495E] w-fit mx-auto mt-5">
        <h2 className="text-white text-center text-[16px] leading-6 font-robotoflex font-medium">
          Free split
        </h2>
      </div>
      <div className="max-w-[1088px] w-full mx-auto flex flex-wrap justify-center items-center mt-[30px] pb-[25px] sm:pb-[95px] gap-10">
        {mechanics.map((items, index) => (
          <div
            key={index}
            className="border-[2px] border-[#2A6883] rounded-[10px] py-[10px] sm:py-[30px] sm:max-w-[336px] w-full hover:bg-[#2A6883] duration-300 h-auto px-2"
          >
            <div className="flex flex-col gap-3 md:gap-5">
              <div>
                <p className="text-white text-center font-robotoflex font-medium text-[16px] leading-6 sm:text-[24px] md:leading-8">
                  {items.name}
                </p>
              </div>
              <div>
                <p className="text-white text-center font-robotoflex font-medium text-[24px] leading-8 sm:text-[32px] md:leading-10">
                  {items.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-center text-white text-[24px] sm:text-[32px] leading-8 sm:leading-10 font-medium font-robotoflex">
          FEE BREAKDOWN
        </h2>
      </div>
      <div className="rounded-[12px] px-5 sm:px-[35px] sm:py-[15px] py-[10px] bg-[#34495E] w-fit mx-auto mt-5">
        <h2 className="text-white text-center text-[16px] leading-6 font-robotoflex font-medium">
          Fee Breakdown (based on $ value raised)
        </h2>
      </div>
      <div className="max-w-[1186px] w-full mx-auto flex flex-wrap justify-center items-center mt-[30px] pb-[25px] sm:pb-[95px] gap-5">
        {freeBreakdown.map((items, index) => (
          <div
            key={index}
            className="border-[2px] border-[#2A6883] rounded-[10px] py-[10px] sm:py-[22px] sm:max-w-[206px] w-full hover:bg-[#2A6883] duration-300 px-2"
          >
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-white text-center font-robotoflex font-medium text-[16px] leading-6 sm:text-[24px] md:leading-8">
                  {items.name}
                </p>
              </div>
              <div>
                <p className="text-white text-center font-robotoflex font-medium text-[24px] leading-8 sm:text-[32px] md:leading-10">
                  {items.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mechines;
