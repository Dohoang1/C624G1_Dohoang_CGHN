let browser= prompt("enter browser name")
switch (browser) {
    case 'edge':
        alert("you've got the edge");
        break;
    case 'chrome':
    case 'firefox':
    case 'safari':
    case 'opera':
        alert("okay we support these browser too");
        break;
    default:
        alert("we hope that this page looks ok")
}