/* 10 солдат можно купить за 1 копейку, 1 лейтенанта за 3 копейки, одного полковника за 5 копеек.
Сколько людей надо, чтобы потратить 100 копеек? */

function getArmy() {
    var solder = lieutenant = colonel = 0;
   
    for (solder = 10; solder<(100*10); solder+=10) {
        for (lieutenant = 1; lieutenant<(100/3); lieutenant++) {
            for (colonel = 1; colonel<(100/5); colonel++) {
                if (solder / 10  + lieutenant * 3 + colonel * 5  === 100) {
                    return solder + " " + lieutenant + " " + colonel
                }
            }
        }  
    }
}

console.log(getArmy());


// ======================

function getDessert() {
    var z = y = x = 0;
   
    for (x = 1; x<25; x++) {
        for (y = 1; y<42; y++) {
            for (z = 1; z<32; z++) {
                if (3*x + y === 25 && 4*x + 2*z === 42 && 2*y + 2*z === 32) {
                    return {
                        x: x,
                        y: y, 
                        z: z,
                        result: (z + 2*x)*y
                    }
                }
            }
        }  
    }
}

console.log(getDessert());


