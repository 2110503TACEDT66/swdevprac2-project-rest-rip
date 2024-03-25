import Link from "next/link";
import Card from "./Card";

type WorkingSpaceCatalogProps = {
  workingSpacesJson: Promise<WorkingSpaceJson>;
};

async function WorkingSpaceCatalog({
  workingSpacesJson,
}: WorkingSpaceCatalogProps) {
  const workingSpaceItems = await workingSpacesJson;
  // const imgList = ['/images/workingPic1.jpg','/images/workingPic2.jpg']
  let i = 1;
  return (
    <div className="relative flex flex-col my-4 justify-around bg-slate-700 rounded-xl m-6 p-4">
      {workingSpaceItems.data.map((workingSpaceItem) => (
        <div className="my-5 mx-5 flex flex-col items-center align-center" key={workingSpaceItem._id}>
          <div className="w-3/4 drop-shadow-2xl">
            <Link
              href={"/workinngSpace/" + workingSpaceItem._id}
              key={workingSpaceItem._id}
            >
              <Card
                hospitalName={workingSpaceItem.name}
                address={
                  workingSpaceItem.address +
                  " " +
                  workingSpaceItem.district +
                  " " +
                  workingSpaceItem.province +
                  " " +
                  workingSpaceItem.postalcode
                }
                imgSrc={`/images/workingPic${i++}.jpg`}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkingSpaceCatalog;
