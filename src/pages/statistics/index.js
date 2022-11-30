import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import SexCharts from "./components/SexCharts";
import WiekCharts from "./components/WiekCharts";

export function Statistics(props) {
  const [content, setContent] = useState(null);

  const showPlec = () => {
    let resContent=[];
    console.log("showplec");
    fetch("https://absolwent.best/api/data/sex")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        let resData = [];
        let sexKeys = [...Object.keys(res.data)];
        let valueKeys = [];
        let SexValues = Object.values(res.data);
        let categoryKeys = [...Object.keys(SexValues[0])];
        
        for (const key in categoryKeys) {
          let resCategory=[]
          for (const keySex in sexKeys) {
            valueKeys = [
              ...Object.keys(res.data[sexKeys[keySex]][categoryKeys[key]]),
            ];
            let valueValues = [
              ...Object.values(res.data[sexKeys[keySex]][categoryKeys[key]]),
            ];
            for (const valuesKeysIndex in valueKeys) {
              
              let example={name:valueKeys[valuesKeysIndex]
              ,[sexKeys[keySex]]:valueValues[valuesKeysIndex]}
              let CategoryAlreadyIn=false
              for (const resCategoryindex in resCategory) {
                if(resCategory[resCategoryindex].name===valueKeys[valuesKeysIndex])
                  {
                    CategoryAlreadyIn=true;
                  }
              }
              if(CategoryAlreadyIn)
              {
                resCategory[valuesKeysIndex][sexKeys[keySex]]=valueValues[valuesKeysIndex];
              }
              else{
                resCategory.push(example)
              }
              
            }
          }
          resData[categoryKeys[key]] = resCategory
          resContent.push(<SexCharts key={key} data={resData[categoryKeys[key]]}/>)

        }
        
        

         setContent(
          <div>
            {resContent}
          </div>
         );
      });

  };

  const showWiek = () => {
    console.log("showWiek");
    let resContent=[]
    fetch("https://absolwent.best/api/data/year")
      .then((res) => res.json())
      .then((res) =>{ console.log(res)
        let resData = [];
        let sexKeys = [...Object.keys(res.data)];
        let valueKeys = [];
        let SexValues = Object.values(res.data);
        let categoryKeys = [...Object.keys(SexValues[0])];
        
        for (const key in categoryKeys) {
          let resCategory=[]
          for (const keySex in sexKeys) {
            valueKeys = [
              ...Object.keys(res.data[sexKeys[keySex]][categoryKeys[key]]),
            ];
            let valueValues = [
              ...Object.values(res.data[sexKeys[keySex]][categoryKeys[key]]),
            ];
            for (const valuesKeysIndex in valueKeys) {
              
              let example={name:valueKeys[valuesKeysIndex]
              ,[sexKeys[keySex]]:valueValues[valuesKeysIndex]}
              let CategoryAlreadyIn=false
              for (const resCategoryindex in resCategory) {
                if(resCategory[resCategoryindex].name===valueKeys[valuesKeysIndex])
                  {
                    CategoryAlreadyIn=true;
                  }
              }
              if(CategoryAlreadyIn)
              {
                resCategory[valuesKeysIndex][sexKeys[keySex]]=valueValues[valuesKeysIndex];
              }
              else{
                resCategory.push(example)
              }
              
            }
          }
          resData[categoryKeys[key]] = resCategory
          console.log(valueKeys);
          resContent.push(<WiekCharts key={key} keys={sexKeys} data={resData[categoryKeys[key]]}/>)

        }
        
        

         setContent(
          <div>
            {resContent}
          </div>
         );
      });

  };
  const showWydzial = () => {
    let resContent=[];
    console.log("showWydzial");
    fetch("https://absolwent.best/api/data/faculty")
      .then((res) => res.json())
      .then((res) => {console.log(res)
        let resData = [];
        let sexKeys = [...Object.keys(res.data)];
        let valueKeys = [];
        let SexValues = Object.values(res.data);
        let categoryKeys = [...Object.keys(SexValues[0])];
        
        for (const key in categoryKeys) {
          let resCategory=[]
          for (const keySex in sexKeys) {
            valueKeys = [
              ...Object.keys(res.data[sexKeys[keySex]][categoryKeys[key]]),
            ];
            let valueValues = [
              ...Object.values(res.data[sexKeys[keySex]][categoryKeys[key]]),
            ];
            for (const valuesKeysIndex in valueKeys) {
              
              let example={name:valueKeys[valuesKeysIndex]
              ,[sexKeys[keySex]]:valueValues[valuesKeysIndex]}
              let CategoryAlreadyIn=false
              for (const resCategoryindex in resCategory) {
                if(resCategory[resCategoryindex].name===valueKeys[valuesKeysIndex])
                  {
                    CategoryAlreadyIn=true;
                  }
              }
              if(CategoryAlreadyIn)
              {
                resCategory[valuesKeysIndex][sexKeys[keySex]]=valueValues[valuesKeysIndex];
              }
              else{
                resCategory.push(example)
              }
              
            }
          }
          resData[categoryKeys[key]] = resCategory
          console.log(valueKeys);
          resContent.push(<WiekCharts key={key} keys={sexKeys} data={resData[categoryKeys[key]]}/>)

        }
        
        

         setContent(
          <div>
            {resContent}
          </div>
         );});
  };
  const showZarobki = () => {
    console.log("showZarobki");
    fetch("https://absolwent.best/api/data/earnings")
      .then((res) => res.json())
      .then((res) => console.log(res));
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

      {content}
    </div>
  );
}
