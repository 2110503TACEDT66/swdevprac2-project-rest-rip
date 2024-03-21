import getWorkingSpace from "@/libs/getWorkingSpace";
import Image from "next/image";
import React from "react";

async function page({ params }: { params: { wid: string } }) {
  const workingSpaceData = (await getWorkingSpace(params.wid))
    .data as WorkingSpaceItem;

  return (
    <div className="flex  my-4 w-[60%] mx-auto items-center px-[16px] py-[24px] rounded-xl shadow-xl gap-5">
      {/* <img
        src={hospitalData.picture}
        alt="hospital_img"
        className="mx-auto my-4 w-[600px]"
      /> */}
      <Image
        src={workingSpaceData.picture}
        alt=""
        width={0}
        height={0}
        className="mx-auto my-4 w-[600px]"
      />
      <div className="relative flex flex-col ">
        <h1 className="mx-auto my-2 text-2xl w-full">
          {workingSpaceData.name}
        </h1>
        <h1 className="mx-auto my-2 text-xl w-full ml-2">
          {workingSpaceData.address +
            " " +
            workingSpaceData.district +
            " " +
            workingSpaceData.province +
            " " +
            workingSpaceData.postalcode}
        </h1>
        <h1 className="mx-auto my-2 text-xl w-full ml-2">
          {workingSpaceData.tel}
        </h1>
      </div>
    </div>
  );
}

export default page;
