function printerError(s) {
  let errorCounter = 0;
  let toArray = s.split('');
  for (let i = 0; i < toArray.length; i++) {
    if (toArray[i] > 'n') {
      errorCounter++;
    }
  }
  console.log(`${errorCounter}/${toArray.length}`);
}
printerError('aaabbbbhaijjjm')
