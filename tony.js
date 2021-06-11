var captions = new Array(3);
captions[0]="amazon";
captions[1]="make-up";
captions[2]="clothes";
var htmlCode = "";
for(var i = 0; i < 3; i++){
  htmlCode += "<ul>";
  htmlCode += "<img alt='' src='slide" + i + ".jpg'/>";
  htmlCode += "<li>" + captions[i] + "</li>";
  htmlCode += "</ul>";
}
document.getElementById("gallery").innerHTML = htmlCode;
