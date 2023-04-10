function isValidWalk(walk) {
   let directions = 0;
   let minsCounter = true;
   let returnToOriginalPoint = 0;

   for (i=0; i<walk.length; i++) {
    directions++;
    directions % 4 === 0? minsCounter++ : null;
    
    switch (walk[i]) {
        case 'n': returnToOriginalPoint++; break;
        case 's': returnToOriginalPoint--; break;
        case 'w': returnToOriginalPoint++; break;
        case 'e': returnToOriginalPoint--; break;
    }
        console.log(returnToOriginalPoint);
   }
}   
isValidWalk(['n', 's', 'w', 'e']);