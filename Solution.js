//Problem :

/* 
Burgerking sells three items: 
VegBurger which needs 2 breads & 1 veg pattice
NonVegBurger which needs 2 breads & 1 non-veg pattice
TikkiBurger which needs 2 breads & 1 tikki pattice

Given bread quantity, veg pattice quantity, non-veg pattice quantity, tikki pattice quantity & price of all 3 items

Print the maximum possible profit

$breads = 15;
$vegPattice = 3;
$nonVegPattice = 2;
$TikkiPattice = 1;
$priceVegBurger = 100;
$priceNonVegBurger = 125;
$priceTikkiBurger = 112;

$maxProfit = 0;
*/

//Solution :

function FindMaxProfit(breads, vegPattice, nonVegPattice, TikkiPattice, priceVegBurger, priceNonVegBurger, priceTikkiBurger) {

    let MaxItemsCanMade = Math.floor(breads / 2);            //checking How max items i.e. Burgers Can be made from breads.
    let maxProfit = 0;

    while (MaxItemsCanMade) {
        if (!nonVegPattice && !TikkiPattice && !vegPattice) return maxProfit;       // if none of the pattice left returing the profit.

        if (nonVegPattice) {                      // As nonVegPattice cost is High then rest First making these.
            maxProfit += priceNonVegBurger;
            nonVegPattice--;
        } else if (TikkiPattice) {               //If Non-Veg-Pattice not left then 2nd high value Tikki Pattice.
            maxProfit += priceTikkiBurger;
            TikkiPattice--;
        } else if (vegPattice) {                 //If neither non-veg/Tikki Pattice left then checking for vegPattice.
            maxProfit += priceVegBurger;
            vegPattice--;
        }

        MaxItemsCanMade--    
    }

    return maxProfit;
}
let breads = 15;
let vegPattice = 3;
let nonVegPattice = 2;
let TikkiPattice = 1;
let priceVegBurger = 100;
let priceNonVegBurger = 125;
let priceTikkiBurger = 112;
let maxProfit = FindMaxProfit(breads, vegPattice, nonVegPattice, TikkiPattice, priceVegBurger, priceNonVegBurger, priceTikkiBurger);

console.log(maxProfit);