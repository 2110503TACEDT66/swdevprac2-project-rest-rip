
import getWorkingSpace from "@/libs/getWorkingSpace";
import Image from "next/image";
import React from "react";


async function page({ params }: { params: { wid: string} }) {
  const workingSpaceData = (await getWorkingSpace(params.wid))
    .data as WorkingSpaceItem;

  // console.log(workingSpaceData)

  return (
    <div className="bg-slate-700 flex m-6 h-[100vh] items-center px-6 py-[24px] rounded-xl shadow-xl gap-5">

      {/* <Image
        src={workingSpaceData.picture}
        alt="workingSpace cover pic"
        width={0}
        height={200}
        className="mx-auto my-4 w-[600px]"
      /> */}
      <img src={workingSpaceData.picture}
      className="h-full w-auto rounded-lg"
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
