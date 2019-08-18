/**
 * getIfPercentNegative()
 *
 * Return if the percent is negative or not
 *
 * @export
 * @param {string} percent
 * @returns {boolean}
 */
export function getIfPercentNegative(percent){
    if(!percent) throw new Error('Percent value is required');
  
    const arr = percent.toString();
    
    return arr[0] === '-';
  }