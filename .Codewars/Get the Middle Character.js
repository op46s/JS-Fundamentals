function getMiddle(s) {
  s.length % 2 != 0 ? console.log((s[Math.floor(s.length / 2)])) : console.log((s[s.length / 2-1]+s[(s.length / 2)]));
}
getMiddle('A');