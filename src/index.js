const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // let res = expr.match(/.{10/g);
    // res = Object.values(res);
    let res = [];
    for (let i = 0; i < expr.length; i += 10) {
        let a = expr.substring(i, i + 10);
        res.push(a);
    }
    for (i = 0; i < res.length; i++) {
        if (res[i] == '**********') {
            res[i] = ' ';
        }
        else {
            res[i] = res[i].replace(/^0+/, '');
            for (j = 0; j < res[i].length; j++) {
                if (res[i].slice(j, j + 2) === '10') {
                    res[i] = res[i].replace(res[i][j], '.');
                    res[i] = res[i].replace(res[i][j + 1], '');
                }
                else if (res[i].slice(j, j + 2) === '11') {
                    res[i] = res[i].replace(res[i][j], '-');
                    res[i] = res[i].replace(res[i][j + 1], '');
                }
                let keys = Object.keys(MORSE_TABLE);
                for (let n = 0; n < keys.length; n++) {
                    if (keys[n] == res[i]) res[i] = MORSE_TABLE[keys[n]];
                }
            }
        }

    }
    res = res.join('');
    return res;
}

module.exports = {
    decode
}