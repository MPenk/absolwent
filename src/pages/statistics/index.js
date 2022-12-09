import { Button, ButtonGroup } from "@mui/material";
import { useState,useEffect } from "react";
import WiekCharts from "./components/WiekCharts";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import container from "./style.css";

export function Statistics(props) {
  
  const [content, setContent] = useState(null);
  const showLoading=()=>{
    setContent(
      <Box sx={{ textAlign: "center", marginTop: "20%" }}>
        <CircularProgress sx={{ display: "inline-block" }} />
      </Box>
    );
  }
  const showPlec = () => {
  showLoading();
    fetch("https://absolwent.best/api/data/sex")
      .then((res) => res.json())
      .then((res) => {
        setContent(<div><div><h1>Legenda przedstawia Płeć absolwenta</h1></div><div className="container">{createCharts(res)}</div></div>);
      });
  };

  const showWiek = () => {
    showLoading();

    fetch("https://absolwent.best/api/data/year")
      .then((res) => res.json())
      .then((res) => {
        setContent(<div><div><h1>Legenda przedstawia rok ukończenia studiów przez absolwenta</h1></div><div className="container">{createCharts(res)}</div></div>);
      });
  };
  const showWydzial = () => {
    showLoading();

    fetch("https://absolwent.best/api/data/faculty")
      .then((res) => res.json())
      .then((res) => {
        setContent(<div><div><h1>Legenda przedstawia wydział absolwenta</h1></div><div className="container">{createCharts(res)}</div></div>);
      });
  };
  const createCharts = (res) => {
    let resContent = [];
    let resData = [];
    let sexKeys = [...Object.keys(res.data)];
    let valueKeys = [];
    let SexValues = Object.values(res.data);
    let categoryKeys = [...Object.keys(SexValues[0])];

    for (const key in categoryKeys) {
      let resCategory = [];
      for (const keySex in sexKeys) {
        valueKeys = [
          ...Object.keys(res.data[sexKeys[keySex]][categoryKeys[key]]),
        ];
        let valueValues = [
          ...Object.values(res.data[sexKeys[keySex]][categoryKeys[key]]),
        ];
        for (const valuesKeysIndex in valueKeys) {
          let example = {
            name: valueKeys[valuesKeysIndex],
            [sexKeys[keySex]]: valueValues[valuesKeysIndex],
          };
          let CategoryAlreadyIn = false;
          for (const resCategoryindex in resCategory) {
            if (
              resCategory[resCategoryindex].name === valueKeys[valuesKeysIndex]
            ) {
              CategoryAlreadyIn = true;
            }
          }
          if (CategoryAlreadyIn) {
            resCategory[valuesKeysIndex][sexKeys[keySex]] =
              valueValues[valuesKeysIndex];
          } else {
            resCategory.push(example);
          }
        }
      }

      resData[categoryKeys[key]] = resCategory;

      resContent.push(
        <WiekCharts
          key={key}
          keys={sexKeys}
          data={resData[categoryKeys[key]]}
          tit={categoryKeys[key]}
        />
      );
    }

    return resContent;
  };
  const showZarobki = () => {
    showLoading();

    fetch("https://absolwent.best/api/data/earnings")
      .then((res) => res.json())
      .then((res) => {
        setContent(<div><div><h1>Legenda przedstawia średni przedział zarobków absolwenta</h1></div><div className="container">{createCharts(res)}</div></div>);
      });
  };
  const useMountEffect = (fun) => useEffect(showPlec, [])
  useMountEffect();
//this.onload(()=>{showPlec()})
  return (
    <div>
      <ButtonGroup fullWidth size="large">
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 ,mr:1}}
    
          onClick={showPlec}
        >
          Płeć
        </Button>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2,mr:1 }}
          onClick={showWiek}
        >
          Wiek
        </Button>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2,mr:1 }}
          onClick={showWydzial}
        >
          Wydział
        </Button>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2,mr:1 }}
          onClick={showZarobki}
        >
          Zarobki
        </Button>
      </ButtonGroup>

      {/* Stworzyc switch case dla osobnych displayow */}
      <div>{content}</div>
    </div>
  );
}
