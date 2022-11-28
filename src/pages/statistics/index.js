import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

import WiekCharts from "./components/WiekCharts";
export function Statistics(props) {
  const [data,setData]=useState([
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    }
  ]);
  const showPlec=()=>{
    console.log("showplec");
    fetch("https://absolwent.best/api/data/sex").then((res)=>res.json()).then((res)=>{setData(res);
    console.log(res);
    var resData=[];
    console.log(res.data.length)
    Object.keys(res.data).forEach((key)=>{
      console.log(key);
      Object.keys(res.data.Men.earnings).forEach((key1)=>{
        resData.push({
          "name":key1,
          "uv":20,
          "pv":30
        })

      })
      setData(resData);

    })
    
});
    
  }
  
  const showWiek=()=>{
    console.log("showWiek");
    fetch("https://absolwent.best/api/data/year").then((res)=>res.json()).then((res)=>console.log(res));

  }
  const showWydzial=()=>{
    console.log("showWydzial");
    fetch("https://absolwent.best/api/data/faculty").then((res)=>res.json()).then((res)=>console.log(res));

  }
  const showZarobki=()=>{
    console.log("showZarobki");
    fetch("https://absolwent.best/api/data/earnings").then((res)=>res.json()).then((res)=>console.log(res));

  }
  return(<div>
<ButtonGroup size="large">
  <Button onClick={showPlec} >Płeć</Button>
  <Button onClick={showWiek}>Wiek</Button>
  <Button onClick={showWydzial}>Wydział</Button>
  <Button onClick={showZarobki}>Zarobki</Button>
  </ButtonGroup>
  <WiekCharts data={data}></WiekCharts>

  </div>);
}
