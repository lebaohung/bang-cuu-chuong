let div = "<table border=2px cellpadding='3px' cellspacing='0' style='margin: auto'>";
for (let i =1; i<10;i++) {
    div += "<tr>"
    for(let j=2;j<10;j++) {
        div += "<td>"+ i + "x" + j + "=" + i*j + "</td>";
    }
    div += "</td>";
}
div += "</table>";
document.write(div);