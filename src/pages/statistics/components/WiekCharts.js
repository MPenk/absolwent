import { maxWidth, width } from "@mui/system";
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
<h3>{TITLES[tit]}</h3>
    <BarChart  style={{display:"inline-block"}} width={500} height={250} data={data} >
     
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis allowDataOverflow={true} dataKey="name"  style={{fontSize:"10px"}}  interval={0}  tickFormatter={tickFormatter}/>
  <YAxis allowDecimals={false}/>
  <Tooltip viewBox={ {x: 0, y: 500, width: 400, height: 400 }}/>
    <Legend />
 
 {bars}
</BarChart>

</div>);
}
const tickFormatter = (value,index) => {
  const limit = 15; // put your maximum character
  if (value.length < limit) return value;
  return `${value.substring(0, limit)}...`;
};

