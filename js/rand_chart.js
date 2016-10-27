var dData = function() {
  return Math.round(Math.random() * 90) + 10 +1;
};

var temp = 0;
var type = ["polarArea","line","bar"];

var dat = [dData(), dData(), dData(), dData(),
           dData(), dData(), dData(), dData()];

var lab = ['dD 1', 'dD 2', 'dD 3', 'dD 4',
           'dD 5', 'dD 6', 'dD 7', 'dD 8'];        
var chartData = {
  labels: lab,
  datasets: [{
   // fillColor: 'rgba(0,60,100,1)',
    strokeColor: 'black',
    data: dat
  }]
}

var ctx = document.getElementById('myChart').getContext('2d');

function removeData(){
	dat.shift();
	lab.shift();

}

function addData(){
	dat.push(dData());
	lab.push('dD'+index)
	
	var myBarChart = new Chart(ctx, {
    type: type[temp],
    data: chartData,
    options:options
    
  });
	//myBarChart.update();
	if(!temp)
		temp = 1;
	else
		temp=0;
}

var myBarChart = new Chart(ctx, {
    type: type[temp],
    data: chartData,
    options:options
    
  });
var options = {
		responsive : true,
	};

var index = 9;

setInterval(function() {
    removeData();
  //myBarChart.addData([dData()], 'dD ' + index);
  addData();
  myBarChart.update();
  index++;
  var myBarChart = new Chart(ctx, {
    type: type[temp++],
    data: chartData,
    options:options
    
  });
}, 1000);