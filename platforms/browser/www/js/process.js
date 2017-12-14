
var color=[];
var colors;
var content=[];
var listCount = 0;
var totalNotes = 0;
var state = "no";
var left = "<";
var right = ">";

let process = {
	menu:function(){
		let content = 
		<div class="bg">
			<div class="navbar theme-red">
				<div class="navbar-inner">
					<div class="left">
						<a href="#">+</a>
					</div>
					<div class="center" onClick={process.addnewNote} id="title">Add new note</div>
				</div>
			</div>
			<div class="note-div" id="note-div">
				<div id="main">
					<div class="date-time" id="DT"></div>
				</div>
				<div class="text-field" id="text-field">
					<textarea id="text" placeholder="Enter you note here"></textarea>
				</div>
				<div class="btns-cn">
				<button class="savebtn" id="savebtn" onClick={save}>Save</button> 
				</div>
			</div>
			<div class="board-parent">
				<div id="board"></div>
			</div>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	addnewNote:function(){
		document.getElementById('text-field').style.display = "block";
		document.getElementById('note-div').style.display = "block";
		document.getElementById('board').style.display = "none";
		document.getElementById('savebtn').style.display = "block";
		document.getElementById('text').value = "";	
	}
}
	
var itemCount = 0;

function save() {
	
	itemCount += 1;
	
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var am_pm;
	if(hours > 12){
		hours = hours - 12;
		am_pm = "PM";
	}else{
		am_pm = "AM";
	}
	if(hours < 10){
		hours = "0" + hours;
	}
	if(minutes < 10){
		minutes = "0" + minutes;
	}
	var day = date.getDate();
	var month = date.getMonth();
	var monthX;
	month += 1;
	if(month === 12){
		monthX = "Dec";
	}
	//console.log(hours+":"+minutes+" "+am_pm+"   "+monthX+" "+day);
	var today = hours+":"+minutes+" "+am_pm+"   "+monthX+" "+day;
	document.getElementById('DT').innerText = today;
	document.getElementById('note-div').style.display = "none";
	document.getElementById('board').style.display = "block";	
	var content = document.getElementById('text').value;
	/*var parent = document.createElement('div');
	parent.style = "width:300px;height:350px;margin-left:40px;margin-top:30px;background-color:lime;";
	parent.id = "item"+itemCount+"";
	var p1 = document.createElement('p');
	p1.innerText = today;
	p1.style="width:300px;margin-top:40px;margin-left:33px;position:absolute;font-size:13pt;";
	var p2 = document.createElement('textarea');
	p2.innerText = content;
	p2.style="width:300px;height:300px;border-style:none;background-color:rgba(0,0,0,0);margin-top:90px;margin-left:30px;position:absolute;font-size:17pt;";
	var img = document.createElement('img');
	var del = document.createElement('button');
	del.style="position:absolute;width:50px;height:50px;margin-top:-10px;margin-left:120px;background-color:rgba(0,0,0,0);border-style:none;";
	del.setAttribute('onclick','deleteItem('+itemCount+')');
	img.src = "./img/note.png";
	img.style = "width:90%;height:80%;positiona:absolute;";
	parent.appendChild(p1);
	parent.appendChild(p2);
	parent.appendChild(img);
	parent.appendChild(del);
	
	document.getElementById('board').appendChild(parent);*/

	var parent = document.createElement('li');
	parent.id = "item"+itemCount+"";
	parent.style = "width:650px;height:750px;margin-left:120px;margin-top:50px;font-size:27pt;background:url(./img/note.png);background-position:center;background-size:cover;list-style:none;text-indent:10px;";
	var del = document.createElement('button');
	del.style = "width:100px;height:120px;background-color:rgba(0,0,0,0);border-style:none;margin-left:50%;margin-top:-40px;";
	del.setAttribute('onclick','deleteItem('+itemCount+')');
	//var p1 = document.createElement('span');
	var p = document.createElement('p');
	p.innerHTML = today;
	p.style = "margin-top:0px;";
	//p1.style="width:300px;margin-top:40px;margin-left:33px;position:absolute;font-size:13pt;";
	var p2 = document.createElement('div');
	p2.innerText = content;
	p2.style="width:670px;height:650px;border-style:none;background-color:rgba(0,0,0,0);margin-top:30px;margin-left:30px;font-size:37pt;";
	parent.appendChild(del);
	parent.appendChild(p);
	parent.appendChild(p2);
	document.getElementById('board').appendChild(parent);
}

function deleteItem(index) {
	var deleteThis = document.getElementById('item'+index+'');
	var parent = document.getElementById('board');
	parent.removeChild(deleteThis);
}

process.menu();
now();

function now(){
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var am_pm;
	if(hours > 12){
		hours = hours - 12;
		am_pm = "PM";
	}else{
		am_pm = "AM";
	}
	if(hours < 10){
		hours = "0" + hours;
	}
	if(minutes < 10){
		minutes = "0" + minutes;
	}
	var day = date.getDate();
	var month = date.getMonth();
	var monthX;
	month += 1;
	if(month === 12){
		monthX = "Dec";
	}
		var today = hours+":"+minutes+" "+am_pm+"   "+monthX+" "+day;
	
		document.getElementById('DT').innerText = today;
		setTimeout(today,1000);
}





