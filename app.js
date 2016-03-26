var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}


var initialList = [claim1, claim2, claim3, claim4, claim5]
initialList.push(new claim("Chris Tuttle","Optical",500))
initialList.push(new claim("Odell Tuttle","Emergency",1100))
initialList.push(new claim("Scott Tuttle","Specialist", 900))
initialList.push(new claim("Lara Tuttle","Primary Care", 1400))
initialList.push(new claim("Sperry Tuttle","Optical", 400))
var totalPayedOut = 0;

function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}
//This function takes in a visit type and gives back the percent covered
function percent(visitType){
	switch(visitType){
		case 'Specialist':
		return 0.1;
		case 'Emergency':
		return 1.0;
		case 'Primary Care':
		return 0.5;
		default:
		return 0.0;
	}
}

//This is a function that takes in a claim and returns back the amount that will
// be covered
function amount(claim){
	return Math.round(claim.visitCost * percent(claim.visitType))
}
//This function loops through our list of claims and adds up the amount that's
//going to be covered
function main(){
	var total = 0;
	for(var i=0;i<initialList.length;i++){
		// console out a message in the format ('Paid out $______ for _______')
		var v = amount(initialList[i])
		console.log("Paid out $" + v + " for " + initialList[i].patientName)
		total += v;
	}
	console.log("Total paid: $" + total);
}
main();
