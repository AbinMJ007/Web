var dData = function() {
  return Math.round(Math.random() * 90) + 10 +1;
};

var temp = 0;
var type = ["bar","line"];
var count = 0;
var myBarChart;

var dat = [dData(), dData(), dData(), dData(),
           dData(), dData(), dData(), dData()];

var lab = ['dD 1', 'dD 2', 'dD 3', 'dD 4',
           'dD 5', 'dD 6', 'dD 7', 'dD 8'];        
var chartData = {
  labels: lab,
  datasets: [{
   // fillColor: 'rgba(0,60,100,1)',
    strokeColor: 'black',
    data: dat,
    borderColor: [
        'rgba(0,0,0,0.5)',
        'rgba(0,0,0,0.5)',
        'rgba(0,0,0,0.5)',
        'rgba(0,0,0,0.5)',
        'rgba(0,0,0,0.5)',
        'rgba(0,0,0,0.5)',
        'rgba(0,0,0,0.5)',
        'rgba(0,0,0,0.5)',
       
      ],
      borderWidth: 3

  }]
}

var ctx = document.getElementById('myChart').getContext('2d');

function removeData(){
	dat.shift();
	lab.shift();

}

function addData(){
	count++;
  dat.push(dData());
	lab.push('dD'+index)
  if(count%6 == 0){
  if(!temp)
    temp = 1;
  else
    temp=0;
  myBarChart = new Chart(ctx, {
    type: type[temp],
    data: chartData,
    options:options
    
  });
}
 
 
  myBarChart.update();

}

 myBarChart = new Chart(ctx, {
    type: type[temp],
    data: chartData,
    options:options
    
  });
var options = {
    responsive : true,
    maintainAspectRatio : false,
    scales: {
      yAxes:[{
        ticks:{
          beginAtZero: true,
          fontcolor:"rgb(255,0,0)"
        }
      }]
    },
    legend: {
      labels:{
        fontColor:"rgb(0,0,255)"
      }
      
    }

  };

var index = 9;

setInterval(function() {
    removeData();
  //myBarChart.addData([dData()], 'dD ' + index);
  addData();
  myBarChart.update();
  index++;
  var myBarChart = new Chart(ctx, {
    type: type[temp],
    data: chartData,
    options:options
    
  });
}, 500);