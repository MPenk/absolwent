import { Box } from "@mui/system";


import { Button,Checkbox } from "@mui/material";
import { Professions } from "../../components/statistics/professions/Professions";
import MenuBar from "../../components/statistics/MenuBar";
import { GradFacultyToBusinessSize } from "../../components/statistics/charts/GradFacultyToBusinessSize";
import { useEffect, useState } from "react";
import { ChartCommon } from "../../components/statistics/charts/ChartCommon";
import { AgeGenderChart } from "../../components/statistics/charts/AgeGenderChart";
export function Statistics(props) {

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
  const kategorie= {plec:plecTab,kategoria:kategoriaFirmyTablica,wydzial:wydzialTablica,miasto:wielkoscMiastaTabela,firma:wielkoscFirmyTabela};
  const [data,setData]=useState('');
  const childToParent=(childdata)=>{
    setData(childdata)
  }
  let wykres;
  useEffect(()=>{console.log(data)})
  if(data==='')
  {
    wykres=<h1>Wybierz jakieś kryteria</h1>;
  }
  else if(data.plec[0] || data.plec[1])
  {
    wykres=<AgeGenderChart dane={data}  kategoria={kategorie}/>
  }
  else{
    wykres=<AgeGenderChart dane={data}  kategoria={kategorie}/>;
  }
  return (
    <>
      <Box sx={{ width: "100%", height: "auto", display: "flex" }}>
       <MenuBar childToParent={childToParent}/>
        {/* <Box sx={{ width: "auto", float: "left", flexGrow: 1 }}>
          <Professions />
        </Box> */}
        
        <Box sx={{ width: "auto", float: "left", flexGrow: 1 }}>
          {wykres}
        </Box>
      </Box>
    </>
  );
}
