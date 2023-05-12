const PasswordComplexityValues = {
    WEAK: 'weak',
    GOOD: 'good',
    EXCELLENT: 'excellent',
}

const calculateComplexity = password => {

    var rex = /[a-z]+[0-9]{2,}/gi;
    if (rex.test(password)) {
        return PasswordComplexityValues.EXCELLENT;
    } else if (password.length < 8) {
        return PasswordComplexityValues.WEAK;
    } 
    return PasswordComplexityValues.GOOD;
}


module.exports = { calculateComplexity, PasswordComplexityValues }