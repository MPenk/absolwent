import {
    BarChart,
    Bar,
    Legend,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Label
  } from "recharts";
import { COLORS, TITLES } from "../constants";
  
export default function WiekCharts({data ,keys,tit}){
    let bars=[];
    for (const key in keys) {
        bars.push(<Bar dataKey={keys[key]} fill={COLORS[key]} />)
    }
    return(
     
      <div style={{textAlign:"center"}}>
<h1>{TITLES[tit]}</h1>
    <BarChart title="tytul" style={{display:"inline-block"}} width={400} height={250} data={data} >
     
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
 
 {bars}
</BarChart>

</div>);
}