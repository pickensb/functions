var wrapperEle = document.body.querySelector(".wrapper");
var headOneEle = document.body.querySelector(".headOne");
var headTwoEle = document.body.querySelector(".headTwo");
var editbuttonEle = document.body.querySelector(".editButton")

function rewriteFunction(){
  var quantity = prompt("How many miles have you driven?");
  var inputPrice = Number(prompt("What is the price of gas?""));
  var total;
  price=inputPrice
  quantity = ["12","17","26","29"];
  total = price * quantity;
  writerFunction("If gas is" inputPrice "and you have driven" quantity "then your yearly costs are" total);
}

function writerFunction(quantity,price){
  headOneEle.innerHTML="Miles Driven: ", quantity;
  headTwoEle.innerHTML="Current Cost of Gas: ",price;
}

editbuttonEle.addEventListener("click",function(){
  rewriteFunction();
})