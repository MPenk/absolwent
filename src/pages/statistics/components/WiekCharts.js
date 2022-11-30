import {
    BarChart,
    Bar,
    Legend,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
  } from "recharts";
export default function WiekCharts({data ,keys}){
    let bars=[];
    for (const key in keys) {
        bars.push(<Bar dataKey={keys[key]} fill="#8884d8" />)
    }
    return(
    <BarChart width={730} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
 
 {bars}
</BarChart>);
}