function convertToLetters(num)
{
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const places = ['', 'thousand', 'million', 'billion', 'trillion']; // Add more as needed
  
    if (num === 0) {
      return ones[0];
    }
  
    let words = [];
    let i = 0;
  
    while (num > 0) {
      const chunk = num % 1000;
      if (chunk !== 0) {
        const chunkWords = [];
        const hundredsDigit = Math.floor(chunk / 100);
        const tensDigit = Math.floor((chunk % 100) / 10);
        const onesDigit = chunk % 10;
  
        if (hundredsDigit !== 0) {
          chunkWords.push(ones[hundredsDigit] + ' hundred');
        }
  
        if (tensDigit === 1) {
          chunkWords.push(teens[onesDigit]);
        } else {
          if (tensDigit !== 0) {
            chunkWords.push(tens[tensDigit]);
          }
          if (onesDigit !== 0) {
            chunkWords.push(ones[onesDigit]);
          }
        }
  
        if (i !== 0) {
          chunkWords.push(places[i]);
        }
  
        words.unshift(...chunkWords);
      }
  
      num = Math.floor(num / 1000);
      i++;
    }
  
    return words.join(' ');
  }

console.log(convertToLetters(0));
  