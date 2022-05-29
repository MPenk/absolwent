import { Box } from "@mui/system";


import { Button,Checkbox } from "@mui/material";
import { Professions } from "../../components/statistics/professions/Professions";
import MenuBar from "../../components/statistics/MenuBar";

export function Statistics(props) {

  return (
    <>
      <Box sx={{ width: "100%", height: "auto", display: "flex" }}>
       <MenuBar/>
        <Box sx={{ width: "auto", float: "left", flexGrow: 1 }}>
          <Professions />
        </Box>
      </Box>
    </>
  );
}
