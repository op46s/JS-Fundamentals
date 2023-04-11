function printerError(s) {
        let errorCounter = 0;
        let inputToArray = s.split('');
        for (let i=0; i<inputToArray.length; i++) {
          if (inputToArray[i].charCodeAt(0) < 97 || inputToArray[i].charCodeAt(0) > 109) {
              errorCounter++;
          }
        }
        return `${errorCounter}/${inputToArray.length}`;
      }
      printerError('aaabbbbhaijjjm')
