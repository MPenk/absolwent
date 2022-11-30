import {
    BarChart,
    Bar,
    Legend,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
  } from "recharts";
export default function SexCharts({data}){
    return(
    <BarChart width={730} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="Men" fill="#8884d8" />
  <Bar dataKey="Women" fill="#82ca9d" />
</BarChart>);
}