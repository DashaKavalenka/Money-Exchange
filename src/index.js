// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var numberOfCoins,
        remainder,
        setOfCoins={};
    remainder = currency;
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else if (currency == 0) {
        return {};
    } else {
        if (currency >= 50) {
            numberOfCoins = parseInt(currency/50);
            remainder = currency%50;
            setOfCoins['H'] = numberOfCoins;
        }

        if (remainder >= 25) {
            numberOfCoins = parseInt(remainder/25);
            remainder = remainder%25;
            setOfCoins['Q'] = numberOfCoins;
        }

        if (remainder >= 10) {
            numberOfCoins = parseInt(remainder/10);
            remainder = remainder%10;
            setOfCoins['D'] = numberOfCoins;
        }

        if (remainder >= 5) {
            numberOfCoins = parseInt(remainder/5);
            remainder = remainder%5;
            setOfCoins['N'] = numberOfCoins;
        }

        if (remainder >= 1) {
            numberOfCoins = remainder;
            setOfCoins['P'] = numberOfCoins;
        }

        return setOfCoins;
    }
}
