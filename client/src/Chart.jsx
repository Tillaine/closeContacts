import React from 'react'
import { HorizontalBar } from 'react-chartjs-2';


const options= {
    legend: false,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
            display: true,
            gridLines: {
                display:true
            }
        }],
        yAxes: [{
            gridLines: {
                display:true
            }   
        }]
    }
  }


class Chart extends React.Component {
    constructor (props) {
        super(props)
        this.state= {
        }
    }


    componentDidMount() {
        
      }

  render() {
      console.log(this.state)
    const data = {
    
        labels: ['05/21', '05/22', '05/23', '05/24', '05/25', '05/26', '05/27', '05/28', '05/29', '05/30', '06/01', '06/02', '06/03'],
        datasets: [
            {
                label: 'Average Monthly Price in $',
                type: 'line',
                backgroundColor: 'rgba(18, 132, 136, 1)',
                borderColor: 'rgba(18, 132, 136, 1)',
                borderWidth: 1,
                maxBarThickness: 8,
                hoverBackgroundColor: 'rgba(18, 132, 136,0.4)',
                hoverBorderColor: 'rgba(18, 132, 136 ,1)',
                data: [1, 2, 3, 4, 4, 5, 6, 7, 5, 4, 3, 2, 2]
            }
        ]
       
    }
    return (
      <div>
        <h2>2 Week Contact Risk</h2>
        <HorizontalBar data={data} options={options}/>
      </div>
    );
  }
};




export default Chart


  
 