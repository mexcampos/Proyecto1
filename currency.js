//var number = 125000.56;
//result="$ " + number.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})
//console.log(result);

//console.log();
//---------------------------------------------------

// request a currency format
//console.log(number.toLocaleString('us-US', { style: 'currency', currency: 'USD' }));
// → $ 251,52.30 

//console.log(number.toLocaleString('de-DE', { style: 'currency', currency: 'ARS' }));
// → 25.152,30 €

// the Japanese yen doesn't use a minor unit
//console.log(number.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
// → ￥251,53
a = prompt("numero: ");
jusNum = parseInt(a) * 5968.91;
console.log(jusNum);
result = "$ " + jusNum.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log(result);