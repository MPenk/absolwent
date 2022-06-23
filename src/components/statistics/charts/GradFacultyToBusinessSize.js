import ReactECharts from 'echarts-for-react';

const wielkoscFirmyTabela = [
    'Mikroprzedsiębiorstwo (poniżej 10 pracowników)',
    'Małe przedsiębiorstwo (poniżej 50 pracowników)',
    'Średnie przedsiębiorstwo (poniżej 250 pracowników)',
    'Duże przedsiębiorstwo (powyżej 250 pracowników)'
];
const style = {
  height: "90vh",
  width: "100%",
};
let option = {

  title: {
    text: 'Szacunkowe dane dotyczące tego\n w jak dużej firmie znajdzie się student po studiowaniu w danym wydziale',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
   xAxis: {
    type: 'category',
    data: wielkoscFirmyTabela
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80],
      type: 'bar'
    }
  ]
};

export function GradFacultyToBusinessSize(props) {

  return (
    <>
      <ReactECharts option={option} style={style} className="bar-chart"/>
    </>
  )
}