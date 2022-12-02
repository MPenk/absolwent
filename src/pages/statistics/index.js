import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import WiekCharts from "./components/WiekCharts";
import container from "./style.css"

export function Statistics(props) {
  const [content, setContent] = useState(null);

  const showPlec = () => {
    
    fetch("https://absolwent.best/api/data/sex")
      .then((res) => res.json())
      .then((res) => {
        setContent(<div className="container">{createCharts(res)}</div>);
      });
  };

  const showWiek = () => {
   
    fetch("https://absolwent.best/api/data/year")
      .then((res) => res.json())
      .then((res) => {
        setContent(<div className="container">{createCharts(res)}</div>);
      });
  };
  const showWydzial = () => {
 
    fetch("https://absolwent.best/api/data/faculty")
      .then((res) => res.json())
      .then((res) => {
       

        setContent(<div className="container">{createCharts(res)}</div>);
      });
  };
  const createCharts=(res)=>{
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
                  resCategory[resCategoryindex].name ===
                  valueKeys[valuesKeysIndex]
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
  }
  const showZarobki = () => {
    fetch("https://absolwent.best/api/data/earnings")
      .then((res) => res.json())
      .then((res) => {
        setContent(<div className="container">{createCharts(res)}</div>);
      });
  };
  return (
    <div>
      <ButtonGroup size="large">
        <Button onClick={showPlec}>Płeć</Button>
        <Button onClick={showWiek}>Wiek</Button>
        <Button onClick={showWydzial}>Wydział</Button>
        <Button onClick={showZarobki}>Zarobki</Button>
      </ButtonGroup>

      {/* Stworzyc switch case dla osobnych displayow */}
<div>
      {content}
      </div>
    </div>
  );
}
