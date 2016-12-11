'use strict';
(function() {
    document.getElementById('ButtomResulte').onclick = function() {
        var s = document.getElementById('InptutRead').value,
            regex = /^([A-Za-zА-ЯЁёа-я]+\s*|[-+]?\d+\.\d+|[-+]?\d+)(?:[A-Za-zА-ЯЁёа-я]\s*|[-+*/]\s*[-+]?\d+\.\d+|[-+*/]\s*[-+]?\s*\d+\s*|[^0-9=*+-/])*=$/,
            writeInput = document.getElementById('InptutWrite');
            

        if(!regex.test(s)) {
            console.log('error: is not valid input');
            writeInput.value = '';
            return;
        }

        writeInput.value = result(s);
    };

    function result(s) {
        var sumbol = s.match(/\d+\.\d+|\d+|[+-/*]/g),
            i = 0,
            result;

        if( sumbol[0] === '+') {
            i = 1;
            result = +sumbol[i];
            i = 2;
        }
        else {
            if(sumbol[0] === '-') {
                i = 1;
                result = -sumbol[i];
                i = 2;
            }
            else {
                result = +sumbol[0];
                i = 1;
            }
        }

        for(; i < sumbol.length - 1; i++) {
            if(i + 2 < sumbol.length && (sumbol[i + 1] === '+' || sumbol[i + 1] === '-')) {
                switch (sumbol[i]) {
                    case '+':
                        if(sumbol[i + 1] === '+') {
                            result += +sumbol[i+2];
                            i++;
                        }
                        else {
                            result -=sumbol[i+2];
                            i++;
                        }
                        break;
                    case '-':
                        if(sumbol[i + 1] === '+') {
                            result -= sumbol[i+2];
                            i++;
                        }
                        else {
                            result += +sumbol[i+2];
                            i++;
                        }
                        break;
                    case '*':
                        if(sumbol[i + 1] === '+') {
                            result *= sumbol[i+2];
                            i++;
                        }
                        else {
                            result *= -sumbol[i+2]; 
                            i++;
                        }
                        break;
                    case '/':
                        if(sumbol[i + 1] === '+') {
                            result /= sumbol[i+2];
                            i++;
                        }
                        else {
                            result /= -sumbol[i+2];
                            i++;
                        }
                        break;
                    default:
                        break;
                }
            }
            else {
                switch (sumbol[i]) {
                    case '+':
                        result += +sumbol[i + 1];
                        i++;
                        break;
                    case '-':
                        result -= sumbol[i + 1];
                        i++;
                        break;
                    case '*':
                        result *= sumbol[i + 1];
                        i++;
                        break;
                    case '/':
                        result /= sumbol[i + 1];
                        i++;
                        break;
                    default:
                        break;
                }
            }
        }
        return result;
    };
}());