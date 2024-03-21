import Link from "next/link";
import Card from "./Card";

type WorkingSpaceCatalogProps = {
  workingSpacesJson: Promise<WorkingSpaceJson>;
};

async function WorkingSpaceCatalog({
  workingSpacesJson,
}: WorkingSpaceCatalogProps) {
  const workingSpaceItems = await workingSpacesJson;

  return (
    <div className="relative flex my-10 justify-evenly">
      {workingSpaceItems.data.map((workingSpaceItem) => (
        <Link
          href={"/hospital/" + workingSpaceItem._id}
          key={workingSpaceItem._id}
        >
          <Card
            hospitalName={workingSpaceItem.name}
            imgSrc={workingSpaceItem.picture}
          />
        </Link>
      ))}
    </div>
  );
}

export default WorkingSpaceCatalog;
