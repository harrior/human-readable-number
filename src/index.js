module.exports = function toReadable (number) {
    let numbers = {
        1: 'one', 2: 'two', 3: 'three', 4: 'four',
        5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
        11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
        16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
        20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy',
        80: 'eighty', 90: 'ninety',
    }
    let result = '';
    if (!number) {
        return 'zero'
    }

    if (number.toString().length === 3){
        result = `${numbers[Math.trunc(number/100)]} hundred`;
        number %= 100;
    }
    if (number>=20) {
        result += ` ${ numbers[number - number % 10] }`;
        number %= 10;
    }
    if (numbers[number] !== undefined){
        result += ` ${ numbers[number]}`;
    }
    return result.trim()
}
