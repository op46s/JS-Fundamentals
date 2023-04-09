function removeEveryOther(arr){

    let myArr = [];
    for (let i=0; i<arr.length; i++) { i % 2 === 0 ? myArr.push(arr[i]) : null; }
    console.log(myArr);
}
removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]);