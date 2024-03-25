import Banner from "@/components/Banner";
import WorkingSpaceCatalog from "@/components/WorkingSpaceCatalog";
import getWorkingSpaces from "@/libs/getWorkingSpaces";

export default function Home() {
  const workingSpaces = getWorkingSpaces();

  return (
    <main>
      <div>
        <Banner />

        <WorkingSpaceCatalog
          workingSpacesJson={workingSpaces}
        ></WorkingSpaceCatalog>
      </div>
    </main>
  );
}
