
/**
 * Return true if the value is a
 * number or can be parse to a number
 *
 * @returns {boolean}
 */
export function isNumeric(value){
    if(value == null) throw new Error('isNumeric need a value to work');
  
    if (typeof value === 'number') {
      return true
    }
  
    if (typeof value === 'string' && !isNaN(value)) { 
      return true;
    }
  
    return false;
  }
  
  /**
   * Reformat a number for give space between 
   * @example 99 999.9999
   */
  export function thousandSpace(value) {
    let numStr;
    const regex = /(\d+)(\d{3})/;
  
    if(value == null) return 0;
  
    if (typeof value === 'number') {
      numStr = String(value);
    } else {
      numStr = value;
    }
  
    return numStr.replace(/^\d+/, w => {
      while (regex.test(w)) {
        w = w.replace(regex, '$1 $2');
      }
  
      return w;
    })
  }
  
  /**
   * Format a string to an money value
   * with 2 decimals at the end
   */
  export function toMoney(value){
    let num;
  
    if(value == null) throw new Error('toMoney Value is required');
  
    if (isNumeric(value)) {
      num = parseFloat(value);
    } else {
      throw new Error('Cannot parse number');
    }
  
    return num.toFixed(2);
  }
  
  /**
   * Take a value and return it with 2 decimals and separated
   * on each thousand by a space
   * @example 99 999.99
   */
  export function moneyThousand(value){
    if(value == null) return 0;
  
    const _money = toMoney(value);
  
    return thousandSpace(_money);
  }