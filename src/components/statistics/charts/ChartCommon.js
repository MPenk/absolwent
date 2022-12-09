import ReactECharts from "echarts-for-react";
import { useState } from "react";


export function ChartCommon(props) {
  const [data, setData] = useState(props.dane);
  const kategorie = props.kategoria;
  const keysKategorie=[];
  for(var key in kategorie) keysKategorie.push(key);
  
const option = {

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: keysKategorie,
    },
    yAxis: {
      type: 'value',
      
      boundaryGap: [0, 0.01]
    },
    series: [
      {
        name: '2011',
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744, 630230]
      },
      {
        name: '2012',
        type: 'bar',
        data: [19325, 23438, 31000, 121594, 134141, 681807]
      }
    ]
  };
  return (
    <>
      <ReactECharts option={option}  className="bar-chart" />
    </>
  );
}
