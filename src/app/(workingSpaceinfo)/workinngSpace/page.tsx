import WorkingSpaceCatalog from "@/components/WorkingSpaceCatalog";
import getWorkingSpaces from "@/libs/getWorkingSpaces";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

function page() {
  return (
    <div>
      <Suspense fallback={<LinearProgress />}>
        <WorkingSpaceCatalog workingSpacesJson={getWorkingSpaces()} />
      </Suspense>
    </div>
  );
}

export default page;
