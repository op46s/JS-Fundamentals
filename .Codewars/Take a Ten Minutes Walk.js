function isValidWalk(walk) {
   
    let minsCounter = 0;
    let returnToOriginalPoint = 0;
    let result = false;

    for (i = 0; i < walk.length; i++) {
        minsCounter++;

        switch (walk[i]) {
            case 'n': returnToOriginalPoint++; break;
            case 's': returnToOriginalPoint--; break;
            case 'w': returnToOriginalPoint++; break;
            case 'e': returnToOriginalPoint--; break;
        }
    }
    if (returnToOriginalPoint === 0) {
        if (minsCounter <= 10) {
            result = true
        } else {
            result = false
        }
    }   
    console.log(result);
}
isValidWalk(['n', 's', 'w', 'e']);
isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']);
isValidWalk(['n','n','n','s','n','s','n','s','n','s']);
isValidWalk(['w']);
isValidWalk(['n', 'n', 'n', 's']);
isValidWalk(["n", "w", "n", "e", "n", "s", "e", "s", "w", "s"]);