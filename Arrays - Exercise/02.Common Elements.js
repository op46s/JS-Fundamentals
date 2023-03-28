function commonElements(inputArr1, inputArr2) {

    let currentElementArr1 = '';
    let currentElementArr2 = '';

    for (let i=0; i<inputArr1.length-1; i++) {
        currentElementArr1 = inputArr1[i];

        for (let j=0; j<inputArr2.length-1; j++) {
            currentElementArr2 = inputArr2[j];

            if (currentElementArr1 === currentElementArr2) {
                 console.log(currentElementArr1); 
            }
        }
        
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l'])