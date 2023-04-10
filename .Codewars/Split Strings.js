function solution(str) {

    let result = [];

    for (let i = 0; i < str.length; i++) {
        twoElements = ''
        i == str.length - 1 ? twoElements = str[i]+'_' : twoElements = str[i] + str[i + 1];
        result.push(twoElements);
        i++;
    }
    console.log(result);
}
solution('abv');
//solution('abcdef');
