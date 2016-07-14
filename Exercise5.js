window.addEventListener("load",function(){
	
	//trigger the function that adds money to the bill
	document.getElementById("calculate").addEventListener("click",Calculate);
	
	
});
//variable for the total money, will increase as more money is added.
var money = 0;
//variable for a tip:
var tip = 0;
//variable for percent submission:
var Percent = 0.2;

//function that will make the tip look like a money number
var tipTest = function(t){
	console.log("tip is: $"+t);
	
	if (parseInt(t)!==t){
		t= t.toFixed(2);
	}
	
	//THERE'S THIS REALLY WEIRD BUG WHERE A NUMBER DIVISIBLE BY 3 WHEN PASSED THROUGH RETRUNS A NUMBER NOT DIVISIBLE BY 0.2*3
	
	console.log("newTip: "+t);
	
	
	return t
}

//add money to 'bill'
var billTo = function(bill){
	money += bill;
	money = parseInt(money);
}

//take the value in the form and add it to the bill.
var addToBill = function(){
	var newMoney = parseInt(document.getElementById("money").value);
	console.log("new Money: $"+newMoney);
	billTo(newMoney);
}

//variable to store long thing pointing to results div
var $results = document.getElementById('results');


//'print' out the results in the div
var total = function(){
	var tot = document.getElementById('total');
	if (tot){
		$results.removeChild(tot);
	}
	var newText = "Total bill is: $"+money;
	var pTotalText = document.createTextNode(newText);
	var pTotal = document.createElement('p');
	pTotal.setAttribute("id","total")
	pTotal.appendChild(pTotalText)
	$results.appendChild(pTotal);
	console.log($('#total'));
	console.log("money: "+ money);
}

//function that both calculates and 'prints' tip
var tipp = function(){
	if (document.getElementById('tip')){
		$results.removeChild(document.getElementById('tip'));
	}
	tip = Percent*money;
	console.log("TIP: "+tip)
	//manage that float so it's a money number
	tip = tipTest(tip);
	var newText = "Recommended tip: $"+tip;
	var pTipText = document.createTextNode(newText);
	var pTip = document.createElement('p');
	pTip.setAttribute('id',"tip");
	pTip.appendChild(pTipText);
	$results.appendChild(pTip);
	console.log($('#tip'));
}

//function that takes care of everything
var Calculate = function(){
	addToBill();
	console.log("addToBill function ran");
	total();
	console.log("total function ran");
	Percent = document.getElementById('Percent').value;
	Percent = 0.01*Percent;
	console.log("Percent = "+Percent);
	tipp();
	console.log("tip function ran");
}

