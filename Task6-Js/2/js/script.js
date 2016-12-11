'use strict';
(function() {
    document.getElementById('ButtomResulte').onclick = function() {
        var s = document.getElementById('InptutRead').value;

        result(s);
    };

    function result(s) {
        var tempword = s.split(/[.?,;:! ]/g),
            i = 0,
            j = 0,
            t = 0,
            result = '',
            separators = s.match(/[.?,;:! ]/g),
            flag,
            slow = {},
            word = [],
            temp;

        for(i = 0,j = 0; i < tempword.length; i++){
            if(tempword[i] !==  '') {
                word.push(tempword[i]);
                j++;
            }
        }

        for(i = 0; i < word.length; i++) {
            for(j = 0; j < word[i].length; j++) {
                if(slow[word[i][j].toLowerCase()] === undefined) {
                    slow[word[i][j].toLowerCase()] = 1;
                }
                else {
                    flag = false;
                    for(t = 0; t < j; t++) {
                        if(word[i][t].toLowerCase() === word[i][j].toLowerCase()){
                            flag = true;
                        }
                    }
                    if(!flag) {
                        slow[word[i][j].toLowerCase()]++;
                    }
                }
            }
        }

        for(i = 0; i < word.length; i++) {
            temp = '';
            for(j = 0; j < word[i].length; j++) {
                if(slow[word[i][j].toLowerCase()]  !==  word.length) {
                    temp += word[i][j];
                }
            }
            word[i] = temp;
        }
        for(i = 0; i < word.length; i++) {
            if(separators != null && i < separators.length)  {
                result += word[i]+separators[i];
            }
            else {
                result += word[i];
            }
        }

        if(word.length === 0) {
            for(i = 0; i < separators.length; i++) {
                result += separators[i];
            }
        }

        if(word.length === 1){
            document.getElementById('InptutWrite').value = s;
            return;
        }
        document.getElementById('InptutWrite').value = result;
    }
}());