import { getIfPercentNegative } from '../getIfPercentNegative'


describe('#getIfPercentNegative()', () => {
    it('should return false if argument is positive number', () => {
      expect(getIfPercentNegative(10000)).toBe(false);
      expect(getIfPercentNegative(1.002)).toBe(false);
      expect(getIfPercentNegative(10000.10000)).toBe(false);
      
    });
    it('should return true if argument is negative number', ()=>{
        expect(getIfPercentNegative(-100)).toBe(true);
        expect(getIfPercentNegative(-1.00)).toBe(true);
        expect(getIfPercentNegative(-0.0113)).toBe(true);
    })

    it('should return false if argument is floating zero', ()=>{
        expect(getIfPercentNegative(0.0)).toBe(false);        
    })
    it('should throw error if called with zero argument', ()=>{
        function call(){
            getIfPercentNegative();
        }
        expect(call).toThrowError('value is required');
    })
})