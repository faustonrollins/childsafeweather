var openweatherapikey = "b8646ef134ae7be481b48a47e523b82b" //apikey assigned to me from openweathermap.org

var zip = document.getElementById('zip').value;











function currentWeatherByZip(){
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip="+zip+"&APPID="+openweatherapikey, function (data) {
			var rawJson = JSON.stringify(data);
			var json = JSON.parse(rawJson);
		});

    var temp = (1.8 * (json.main.temp - 273.15) + 32).toFixed(0);
    alert(temp);
}
