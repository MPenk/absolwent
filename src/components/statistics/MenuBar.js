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
import { Box } from "@mui/system";
import { Button, Checkbox, Divider } from "@mui/material";
import { useState } from "react";
import Slider from "@mui/material/Slider";

export default function MenuBar({childToParent}) {
  const wielkoscFirmyTabela = [
    "Mikroprzedsiębiorstwo (poniżej 10 pracowników)",
    "Małe przedsiębiorstwo (poniżej 50 pracowników)",
    "Średnie przedsiębiorstwo (poniżej 250 pracowników)",
    "Duże przedsiębiorstwo (powyżej 250 pracowników)",
  ];
  const kategoriaFirmyTablica = [
    "IT",
    "Mechaniczna",
    "Nawigacyjna",
    "Ekonomiczna",
    "Elektroniczna/Elektryczna",
    "Gastronomia",
    "Dietetyka",
    "Marketing",
    "Edukacja",
    "inna",
  ];
  const wielkoscMiastaTabela = [
    "Poniżej 10 000 mieszkańców",
    "Od 10 000 do 50 000 mieszkańców",
    "Od 50 000 do 100 000 mieszkańców",
    "100 000 do 250 000 mieszkańców",
    "Powyżej 250 000 mieszkańców",
  ];
  const wydzialTablica = ["Elektryczny", "Mechaniczny", "Nawigacyjny", "PiT"];
  const plecTab = ["Kobieta", "Mężczyzna"];

  const [selectedPlec, setSelectedPlec] = useState(
    new Array(plecTab.length).fill(false)
  );
  const [selectedKategoria, setSelectedKategoria] = useState(
    new Array(kategoriaFirmyTablica.length).fill(false)
  );
  const [selectedWydzial, setSelectedWydzial] = useState(
    new Array(wydzialTablica.length).fill(false)
  );
  const [selectedWielkoscMiasta, setSelectedWielkoscMiasta] = useState(
    new Array(wielkoscMiastaTabela.length).fill(false)
  );
  const [selectedWielkoscFirmy, setSelectedWielkoscFirmy] = useState(
    new Array(wielkoscFirmyTabela.length).fill(false)
  );
  
  function updateSelectPlec(index) {
    const kat = !selectedPlec[index];
    setSelectedPlec([
      ...selectedPlec.slice(0, index),
      kat,
      ...selectedPlec.slice(index + 1, selectedPlec.length),
    ]);
  }
  function updateSelectKategoria(index) {
    const kat = !selectedKategoria[index];
    setSelectedKategoria([
      ...selectedKategoria.slice(0, index),
      kat,
      ...selectedKategoria.slice(index + 1, selectedKategoria.length),
    ]);
  }
  function updateSelectWydzial(index) {
    const kat = !selectedWydzial[index];
    setSelectedWydzial([
      ...selectedWydzial.slice(0, index),
      kat,
      ...selectedWydzial.slice(index + 1, selectedWydzial.length),
    ]);
  }
  function updateSelectWielkoscMiasta(index) {
    const kat = !selectedWielkoscMiasta[index];
    setSelectedWielkoscMiasta([
      ...selectedWielkoscMiasta.slice(0, index),
      kat,
      ...selectedWielkoscMiasta.slice(index + 1, selectedWielkoscMiasta.length),
    ]);
  }
  function updateSelectWielkoscFirmy(index) {
    const kat = !selectedWielkoscFirmy[index];
    setSelectedWielkoscFirmy([
      ...selectedWielkoscFirmy.slice(0, index),
      kat,
      ...selectedWielkoscFirmy.slice(index + 1, selectedWielkoscFirmy.length),
    ]);
  }
  const [valueZarobki, setValueZarobki] = useState([3100, 3100]);
  const handleChangeZarobki = (event, newValue) => {
    setValueZarobki(newValue);
  };
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [age, setAge] = useState([2000, 2000]);
  const data={plec:selectedPlec,kategoria:selectedKategoria,wydzial:selectedWydzial,miasto:selectedWielkoscMiasta,firma:selectedWielkoscFirmy,lata:age,zarobki:valueZarobki};
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
  return (
    <Box
      sx={{
        width: 300,
        height: "auto",
        border: "2px solid grey",
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

          <InputLabel sx={{ marginTop: "1rem" }}>Przedział lat</InputLabel>
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
          <InputLabel sx={{ marginTop: "1rem" }}>Przedział zarobków</InputLabel>
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
              {plecTab.map((item, i) => (
                <FormControlLabel
                  sx={{ width: "100%", margin: "auto", pl: 4 }}
                  control={<Checkbox />}
                  onChange={(e) => {
                    updateSelectPlec(i);
                  }}
                  label={item}
                />
              ))}
            </List>
          </Collapse>
          <Divider sx={{ borderBottomWidth: 2 }} />
          <ListItemButton onClick={handleClick2}>
            <ListItemText primary="Wydział" />
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open2} timeout="auto">
            <List component="div" disablePadding>
              {wydzialTablica.map((item, i) => (
                <FormControlLabel
                  sx={{ width: "100%", margin: "auto", pl: 4 }}
                  control={<Checkbox />}
                  onChange={(e) => {
                    updateSelectWydzial(i);
                  }}
                  label={item}
                />
              ))}
            </List>
          </Collapse>
          <Divider sx={{ borderBottomWidth: 2 }} />
          <ListItemButton onClick={handleClick3}>
            <ListItemText primary="Kategoria firmy" />
            {open3 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open3} timeout="auto">
            <List component="div" disablePadding>
              {kategoriaFirmyTablica.map((item, i) => (
                <FormControlLabel
                  sx={{ width: "100%", margin: "auto", pl: 4 }}
                  control={<Checkbox />}
                  onChange={(e) => {
                    updateSelectKategoria(i);
                  }}
                  label={item}
                />
              ))}
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
              {wielkoscFirmyTabela.map((item, i) => (
                <FormControlLabel
                  sx={{ width: "100%", margin: "auto", pl: 4 }}
                  control={<Checkbox />}
                  onChange={(e) => {
                    updateSelectWielkoscFirmy(i);
                  }}
                  label={item}
                />
              ))}
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
              {wielkoscMiastaTabela.map((item, i) => (
                <FormControlLabel
                  sx={{ width: "100%", margin: "auto", pl: 4 }}
                  control={<Checkbox />}
                  onChange={(e) => {
                    updateSelectWielkoscMiasta(i);
                  }}
                  label={item}
                />
              ))}
            </List>
          </Collapse>
          <Divider />
          <Button onClick={()=>childToParent(data)}>Zatwierdź</Button>
        </List>
      </FormGroup>
    </Box>
  );
}
