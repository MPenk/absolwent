//import axios from "axios";
import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";

function numberRange(start, end) {
  return new Array(end - start).fill().map((d, i) => i + start);
}

export function AgeGenderChart(props) {
  /*
  const [data, setData] = useState(props.dane);
  const kategorie = props.kategoria;
  const keysKategorie = [];
  for (var key in kategorie) keysKategorie.push(key);
  const [dane, setDane] = useState([]);
  const [category, setCategory] = useState([]);
  const [ans, setAns] = useState([]);
  
  var endpoint =
    "https://absolwent.azurewebsites.net/api/public/statistics/salary/";
  const lata = numberRange(props.dane.lata[0], props.dane.lata[1] + 1);
  useEffect(() => {
    setAns([]);
    setDane([]);
    setCategory([]);
    for (var x in lata) {
      axios
        .get(endpoint + lata[x])
        .then((res) => {
          let answear = res.data.data.answers;
          setAns(ans=>[...ans,answear]);
          let cat = [];
          let val = [];
          for (var x in answear) {
            cat.push(answear[x].name);
            val.push(answear[x].count);
          }
          setDane(dane=>[...dane,val]);
          setCategory(category=>[...category,cat]);
        })
    }
  }, [props.dane.lata[0], props.dane.lata[1]]);
  const [seriesData,setSeriesData]=useState([]);
  useEffect(() => {
    
    setSeriesData(dane.map((seria,i)=>{
        return{
            name: category[i][i],
            data: seria,
             emphasis: {
        focus: 'series'
      },
            type:'bar',
        }
    }))

  }, [dane]);

  useEffect(() => {

  }, [ans]);
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },

    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar', 'stack'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: lata,
    },
    yAxis: {
      type: "value",
    },
    series: seriesData
  };
  let wykres;
  if(!props.dane.plec[0]&&!props.dane.plec[1]){
    wykres=<ReactECharts option={option} className="bar-chart" />
  }
  else{
    
  }
  
  return (
    <>
      {wykres}
    </>
  );
  */
}
