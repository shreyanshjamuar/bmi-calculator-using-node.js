const express=require("express");
const app=express();
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}))
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html")
});

app.post("/",function(req,res){
  var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);//parsing to Number because as text they will give 4+5=45

  var result=num1+num2;
  res.send("The result is"+result);
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmicalculator.html")
});

app.post("/bmicalculator",function(req,res){
  var w1=parseFloat(req.body.w);
    var h1=parseFloat(req.body.h);//parsing to Number because as text they will give 4+5=45

  var bmi=w1/(h1*h1);
  res.send("Your bmi is "+bmi);
});


app.listen(3000,function(){
  console.log("Server is running on port 3000");
});
