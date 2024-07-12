let bcc;
bcc = "<table border = '1'>";
for (i=2 ; i <= 9 ; i++) {
    bcc += "<tr>";
    for (j=1 ; j <= 9; j++) {
        // bcc += "<td>" + (i + "x" + j + "=") + i * j + "</td>"
        bcc += `<td> ${i} x ${j} = ${i*j}</td>`;
    }
    bcc = bcc + "</tr>";
}
bcc = bcc + "</table>";
document.write(bcc);