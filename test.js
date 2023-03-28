var jusNum = parseInt(jus) * 5968.91;
console.log(jusNum);
var result = "$ " + jusNum.toLocaleString('de-DE', {minimumFractionDigits: 2,maximumFractionDigits: 2});
console.log(result);