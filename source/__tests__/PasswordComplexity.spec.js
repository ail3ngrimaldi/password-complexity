const { calculateComplexity, PasswordComplexityValues } = require("../PasswordComplexity")

describe('Password complexity tests', () => {
    it('should be excellent', () => {
        const complexity = calculateComplexity('password123')
        expect(complexity).toEqual(PasswordComplexityValues.EXCELLENT)
    })

    it('should has at least 2 numbers', () => {
        const complexity = calculateComplexity('password3')
        expect(complexity).toEqual(PasswordComplexityValues.GOOD)
    })

    it('should be good', () => {
        const complexity = calculateComplexity('password')
        expect(complexity).toEqual(PasswordComplexityValues.GOOD)
    })
    
    it('should be weak', () => {
        const complexity = calculateComplexity('pass')
        expect(complexity).toEqual(PasswordComplexityValues.WEAK)
    })    
})