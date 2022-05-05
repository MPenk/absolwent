import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box } from "@mui/system";
import { Button, Checkbox } from "@mui/material";
import { useState } from "react";
import Slider from '@mui/material/Slider';

export default function MenuBar() {
    const [value, setValue] = useState([20, 37]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    function valuetext(value) {
        return `${value}°C`;
      }
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Box
      sx={{
        width: 300,
        height: "auto",
        border: "2px solid black",
        float: "left",
        display: "inline-block",
      }}
    >
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Wybór kryteriów
          </ListSubheader>
        }
      >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="kategoria 1"
          />
          <FormControlLabel control={<Checkbox />} label="kategoria 2" />
        </FormGroup>
        <label>Kryterium z zakresem</label>
        <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
        <Button>Zatwierdź</Button>
      </List>
    </Box>
  );
}
