import './App.css';
import ReactECharts from 'echarts-for-react';
const style = {
  height: "90vh",
  width: "100%"
};
let option = {
  title: {
    text: 'Szaunkowe dane odnośnie pzyszłego zatrudnienia studentów',
    subtext: 'Kierunek Inforamtyka rocznik 2019/2020',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Zawód',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 33, name: 'Bezrobotny' },
        { value: 4, name: 'Programista' },
        { value: 4, name: 'Analityk' },
        { value: 2, name: 'Sprzedawca frytek' },
        { value: 1, name: 'Elektronik' }
      ]
    }
  ]
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Absolwent!
        </p>
        
        <ReactECharts option={option} style={style} className="pie-chart"/>
      </header>
    </div>
  );
}

export default App;
