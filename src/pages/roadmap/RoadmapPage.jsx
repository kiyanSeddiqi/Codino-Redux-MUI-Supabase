import { Box } from "@mui/material";
import { flexCol } from "../../styles/globalStyles";
import BreadCrumb from "../../components/ui/Breadcrumb/BreadCrumb";
import { roadmapGridContainer } from "./roadmapStyle";
import { roadMapData } from "../../data/roadMapData";
import RoadmapCard from "./RoadmapCard";

function RoadmapPage() {
  const items = [{ title: "مسیر های یادگیری" }];

  return (
    <>
      <Box sx={{ ...flexCol(5), mt: 4, mb: 6 }}>
        <BreadCrumb items={items} />
        <Box sx={roadmapGridContainer}>
          {roadMapData.map((item) => (
            <RoadmapCard key={item.id} itemData={item} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default RoadmapPage;
