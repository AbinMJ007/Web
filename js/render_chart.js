

	/*var labels = json.map(function(item){
		return item.label;
	});
	var values = json.map(function(val){
		return val.value;

	});*/

	//var lab1 = ["aman","abin"];
	//var val1 = [50,80];

			function render_chart(str)
			{
			var canvas = document.getElementById('myChart');
			canvas.remove();
			var container = document.getElementById("canv");
			var can = document.createElement('canvas');
			can.id = 'myChart';
			container.appendChild(can);
			ctx = document.getElementById('myChart').getContext('2d');
			var myBarChart = new Chart(ctx, {
    		type: str,
    		data: data,
    		options:options
    
  				});
			}
	var options = {
		responsive : true,
		maintainAspectRatio : false,
		scales: {
			yAxes:[{
				ticks:{
					beginAtZero: true
				}
			}]
		},
		legend: {
			labels:{
				fontColor:"rgb(255,99,132)"
			}
			
		}

	};

	var data = {
		labels : lab,
		datasets : [{
			label: "Project",
			data: val,
			//strokeColor: 'rgba(100,124,122,1)',
			backgroundColor: [
				'rgba(255,0,0,0)',
				'rgba(0,255,0,0)',
				'rgba(0,0,255,0)',
				'rgba(123,123,0,0)'
			],
			borderColor: [
				'rgba(255,0,0,0.5)',
				'rgba(0,255,0,0.5)',
				'rgba(0,0,255,0.5)',
				'rgba(123,123,0,0.5)'
			],
			borderWidth: 3

		}]


	};
 var ctx = document.getElementById("myChart").getContext("2d");

 //var mychart = new Chart(ctx).Bar(data);

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options:options
    
  });

// setInterval(function(){
// 	window.localStorage.clear();
// },5000);
