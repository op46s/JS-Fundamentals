function theLift(arr) {
    
    let peopleWaiting = Number(arr[0]);
    let cabins = arr[1].split(' ').map(Number);
    let counter = 0;

    let liftIsFull = true;

        for (let i=0; i<cabins.length; i++) {
            
            if (peopleWaiting == 0) {
                break;
            }
            let currentCabin = cabins[i];
            if (currentCabin >=4) {
                continue;
            } else {
                
                    for (let j=currentCabin; j<4; j++) {
                        counter++
                        peopleWaiting--;
                        currentCabin++
                        cabins[i] = currentCabin;
                        if (peopleWaiting == 0) {
                            break;
                        }
                           
                    }
            }
              
        }

    for (const el of cabins) {
        if (el !== 4) {
            liftIsFull = false;
        }
    }

    if (peopleWaiting > 0) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`)
    } else {
        if (peopleWaiting == 0 && liftIsFull)  {
            console.log(cabins.join(' '));
            return;
        } else {
            console.log('The lift has empty spots!')
        }
        
    }
    //console.log(peopleWaiting)
    console.log(cabins.join(' '));
}
theLift(["15", "0 0 0 0 0"]);
//theLift(["20", "0 2 0"]);
//theLift(["6", "2 0"]);
