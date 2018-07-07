function getfile(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
  if(xhr.readyState === 4 && xhr.status == "200"){
    callback(xhr.responseText);
  }
};
xhr.send(null);
}
getfile("data.json",function(text){
  var data=JSON.parse(text);
console.log(data);
career(data.career);
education(data.education);
})
var child2=document.querySelector(".childTwo");
function career(careerInfo){
  console.log(careerInfo);
  var careerHeading=document.createElement("h3");
  child2.appendChild(careerHeading);
  careerHeading.textContent="carrer Objective";
  var careerHr=document.createElement("hr");
  child2.appendChild(careerHr);
var ch=document.createElement("p");
ch.textContent=careerInfo.info;
child2.appendChild(ch);

}
function education(edu){
var eduHeading=document.createElement("h3");
eduHeading.textContent="educational qualifications";
child2.appendChild(eduHeading);
var careerHr=document.createElement("hr");
child2.appendChild(careerHr);
var eduTable=document.createElement("table");
eduTable.border="1";
var tr1="<tr><td>Degree</td><td>institute</td><td>data</td></td>"
eduTable.innerHTML=tr1;
child2.appendChild(eduTable);
