import Link from "next/link";
import Card from "./Card";

type WorkingSpaceCatalogProps = {
  workingSpacesJson: Promise<WorkingSpaceJson>;
};

async function WorkingSpaceCatalog({
  workingSpacesJson,
}: WorkingSpaceCatalogProps) {
  const workingSpaceItems = await workingSpacesJson;
  const imgList = ['/images/workingPic1.jpg','/images/workingPic2.jpg']
  let i = 1;
  return (
    <div className="relative flex flex-col my-4 justify-evenly bg-slate-700 rounded-xl m-6 p-4">
      {workingSpaceItems.data.map((workingSpaceItem) => (
        <div className="">
          <Link
            href={"/workinngSpace/" + workingSpaceItem._id}
            key={workingSpaceItem._id}
          >
            <Card
              hospitalName={workingSpaceItem.name}
              address= {workingSpaceItem.address +" "+ workingSpaceItem.district +" " +  workingSpaceItem.province +" " + workingSpaceItem.postalcode}
              imgSrc={`/images/workingPic${i++}.jpg`}
            />
          </Link>
        </div>
       
      ))}
    </div>
  );
}

export default WorkingSpaceCatalog;
