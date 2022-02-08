const unit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const ten = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const hundred = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
const thousand = ['one thousand', 'two thousand', 'three thousand', 'four thousand', 'five thousand', 'six thousand', 'seven thousand', 'eight thousand', 'nine thousand'];

module.exports = function toReadable (number) {
  if (number < 10) { 
      return unit[number];
  }
  if (number < 20) {
    let a = number - 10;  
    return teen[a];
  }
  if (number < 100) {
   let a = Math.floor(number/10);
   let b = number%10;
     if ( b != 0) {
   return  ten[a] + ' ' + unit[b];
     }
     else 
    return ten[a]; 
}
  if (number < 1000) {
    let a = Math.floor(number/100);
    let b = number%100;
    let c = Math.floor(b%10);
        b = Math.floor(b/10);

    if ( b != 0 && c != 0) {
        if ( b == 1) {
            return hundred[a] + ' ' + teen[c];
        }
        return  hundred[a] + ' ' + ten[b] + ' ' + unit[c];
        }
        if ( b != 0 && c == 0) {
            return  hundred[a] + ' ' + ten[b];
        }
          if (b == 0 && c != 0) {
            return  hundred[a] + ' ' + unit[c];
          }
    else 
        return hundred[a]; 
  }

}
