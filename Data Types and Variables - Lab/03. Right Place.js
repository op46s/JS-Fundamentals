function rightPlace(string, char, tester) {

    let replaced = string.replace('_', char);
    let result = replaced === tester ? "Matched" : "Not Matched";
    console.log(result);
}
rightPlace('Str_ng', 'I', 'Strong');