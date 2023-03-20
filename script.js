function convertToLetters(amount) {
  const units = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  const tens = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  const specialTens = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
  const specialTwenties = ['', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve'];
  const hundreds = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];
  const thousands = ['', 'mil', 'dos mil', 'tres mil', 'cuatro mil', 'cinco mil', 'seis mil', 'siete mil', 'ocho mil', 'nueve mil'];

  let str = '';
  const parts = amount.toString().split('.');
  const whole = parseInt(parts[0]);
  const decimals = parts[1] ? parseInt(parts[1]) : 0;

  if (whole === 0) {
    str = 'cero';
  } else if (whole < 0) {
    str = 'Número no soportado';
  } else {
    // Process thousands
    const thousandsNum = Math.floor(whole / 1000);
    const hundredsNum = whole % 1000;
    if (thousandsNum > 0) {
      str += `${convertToLetters(thousandsNum)} mil `;
      if (hundredsNum > 0) {
        str += ' ';
      }
    }

    // Process hundreds
    if (hundredsNum > 0) {
      if (hundredsNum === 100) {
        str += 'cien';
      } else {
        const hundredsIndex = Math.floor(hundredsNum / 100);
        str += `${hundreds[hundredsIndex]}`;
        if (hundredsNum % 100 !== 0) {
          str += ' ';
        }
      }

      // Process tens
      const tensNum = hundredsNum % 100;
      if (tensNum < 10) {
        str += `${units[tensNum]}`;
      } else if (tensNum >= 10 && tensNum <= 19) {
        str += `${specialTens[tensNum - 10]}`;
      } else {
        const tensIndex = Math.floor(tensNum / 10);
        str += `${tens[tensIndex]}`;
        const unitsNum = tensNum % 10;
        if (unitsNum > 0) {
          str += ` y ${units[unitsNum]}`;
        }
      }
    }
  }

  // Process decimals
  if (decimals > 0) {
    str += ` con ${decimals.toString().padEnd(2, '0')} centavos`;
  }

  return str.trim();
}

// Actualizar el resultado con la palabra convertida
document.getElementById('result').textContent = convertToLetters(12345);

