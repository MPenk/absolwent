import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import { Box } from "@mui/system";
import { Button, Checkbox, Divider, FormLabel } from "@mui/material";
import { useState } from "react";
import Slider from "@mui/material/Slider";


export default function MenuBar() {
  const wielkoscFirmyTabela = [
    'Mikroprzedsiębiorstwo (poniżej 10 pracowników)',
    'Małe przedsiębiorstwo (poniżej 50 pracowników)',
    'Średnie przedsiębiorstwo (poniżej 250 pracowników)',
    'Duże przedsiębiorstwo (powyżej 250 pracowników)'
];
  const kategoriaFirmyTablica = [
    'IT',
    'Mechaniczna',
    'Nawigacyjna',
    'Ekonomiczna',
    'Elektroniczna/Elektryczna',
    'Gastronomia',
    'Dietetyka',
    'Marketing',
    'Edukacja',
    'inna'
  ];
  const wielkoscMiastaTabela = [
    'Poniżej 10 000 mieszkańców',
    'Od 10 000 do 50 000 mieszkańców',
    'Od 50 000 do 100 000 mieszkańców',
    '100 000 do 250 000 mieszkańców',
    'Powyżej 250 000 mieszkańców'
];
  const [valueZarobki, setValueZarobki] = useState([3100,3100 ]);
  const [value, setValue] = useState([2000, 2000]);
  const [isTrue, setIsTrue] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeZarobki = (event, newValue) => {
    setValueZarobki(newValue);
  };
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [age, setAge] = useState([2000,2000]);

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const handleClick5 = () => {
    setOpen5(!open5);
  };
  const marks = [
    {
      value: 2000,
      label: "2000",
    },
    {
      value: 2011,
      label: "2011",
    },
    {
      value: 2022,
      label: "2022",
    },
  ];
 
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
      <FormGroup>
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
          <Divider sx={{ borderBottomWidth: 2 }} />
          
          <InputLabel sx={{marginTop:'1rem'}}>Przedział lat</InputLabel>
          <Slider
            sx={{ width: "80%", marginTop: "3.5rem" }}
            aria-label="Always visible"
            value={age}
            min={2000}
            max={2022}
            onChange={handleChangeAge}
            step={1}
            marks={marks}
            valueLabelDisplay="on"
          />
           <InputLabel sx={{marginTop:'1rem'}}>Przedział zarobków</InputLabel>
          <Slider
            sx={{ width: "80%", marginTop: "3.5rem" }}
            aria-label="Always visible"
            value={valueZarobki}
            min={3100}
            max={14900}
            onChange={handleChangeZarobki}
            step={1500}
            valueLabelDisplay="on"
          />
          <Divider sx={{ borderBottomWidth: 2 }} />
          <ListItemButton onClick={handleClick1}>
            <ListItemText primary="Płeć" />
            {open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open1} timeout="auto">
            <List component="div" disablePadding>
              <FormControlLabel
                sx={{ width: "100%", margin: "auto", pl: 4 }}
                control={<Checkbox />}
                label="Kobieta"
              />
              <FormControlLabel
                sx={{ width: "100%", margin: "auto", pl: 4 }}
                control={<Checkbox />}
                label="Mężczyzna"
              />
            </List>
          </Collapse>
          <Divider sx={{ borderBottomWidth: 2 }} />
          <ListItemButton onClick={handleClick2}>
            <ListItemText primary="Wydział" />
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open2} timeout="auto">
            <List component="div" disablePadding>
              <FormControlLabel
                sx={{ width: "100%", margin: "auto", pl: 4 }}
                control={<Checkbox checked={isTrue}
                onChange={e=> {
                  console.log("target checked? - ", e.target.checked);
                  setIsTrue(e.target.checked)
                }}
                value="checkedA"
                inputProps={{
                  'aria-label': 'primary checkbox',
                }} />}
                label="Elektryczny"
              />
              <FormControlLabel
                sx={{ width: "100%", margin: "auto", pl: 4 }}
                control={<Checkbox />}
                label="Mechaniczny"
              />
              <FormControlLabel
                sx={{ width: "100%", margin: "auto", pl: 4 }}
                control={<Checkbox />}
                label="Nawigacyjny"
              />
              <FormControlLabel
                sx={{ width: "100%", margin: "auto", pl: 4 }}
                control={<Checkbox />}
                label="ten ostatni"
              />
            </List>
          </Collapse>
          <Divider sx={{ borderBottomWidth: 2 }} />
          <ListItemButton onClick={handleClick3}>
            <ListItemText primary="Kategoria firmy" />
            {open3 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open3} timeout="auto">
            <List component="div" disablePadding>
              {kategoriaFirmyTablica.map(item=> <FormControlLabel
                sx={{ width: "100%", margin: "auto", pl: 4 }}
                control={<Checkbox />}
                label={item}
              />)}
            
            </List>
          </Collapse>
          <Divider />
          <Divider sx={{ borderBottomWidth: 2 }} />
          <ListItemButton onClick={handleClick5}>
            <ListItemText primary="Wielkość Firmy" />
            {open5 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open5} timeout="auto">
            <List component="div" disablePadding>
              {wielkoscFirmyTabela.map(item=><FormControlLabel
                sx={{ width: "100%", margin: "auto", pl: 4 }}
                control={<Checkbox />}
                label={item}
              />)}
            
            </List>
          </Collapse>
          <Divider />
          <Divider sx={{ borderBottomWidth: 2 }} />
          <ListItemButton onClick={handleClick4}>
            <ListItemText primary="Wielkość miasta" />
            {open4 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open4} timeout="auto">
            <List component="div" disablePadding>
              {wielkoscMiastaTabela.map(item=><FormControlLabel
                sx={{ width: "100%", margin: "auto", pl: 4 }}
                control={<Checkbox />}
                label={item}
              />)}
            
            </List>
          </Collapse>
          <Divider />
          <Button>Zatwierdź</Button>
        </List>
      </FormGroup>
    </Box>
  );
}
