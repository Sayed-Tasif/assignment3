// https://github.com/Sayed-Tasif/assignment3

//This is the solution for the first problem
//Kilometer to meter convertion
function kilometerToMeter(km){
    if(km < 0){
        console.log ("You have given and negative Number.\n Code will convert it to a positive value to continue the calculation.\n");
    }
    let value = Math.abs(km)
    let meter = value * 1000;
    return meter;
}




//This is the solution for the second problem.
//Budget Calculator.
function budgetCalculator(watch, phone, laptop){
    if(watch < 0 || phone < 0 || laptop < 0){
        console.log ("You have given negative value(s).\n Code will convert it to a positive value to continue calculation.\n");
    }
    const watchPrice = 50;
    const phonePrice = 100;
    const laptopPrice = 500;
    watch = Math.abs(watch);
    phone = Math.abs(phone);
    laptop = Math.abs(laptop);

    var totalWatchPrice = watchPrice * watch;
    var totalPhonePrice = phonePrice * phone;
    var totalLaptopPrice = laptopPrice * laptop;
    var totalCost = totalWatchPrice + totalPhonePrice + totalLaptopPrice;
    return totalCost;
}




//This is the solution for the third problem.
//Calculating hotel cost.
function hotelCost(days){
    if(days < 0){
        console.log ("You have given and negative Number.\n Code will convert it to a positive value to continue the calculation.\n");
    }
    days = Math.abs(days);
    if(days <= 10){
        var totalRent1 = days * 100;
        return totalRent1;
    }
    else if (days <= 20){
        var rent1 = 10 * 100;
        var discountDays = days - 10;
        var rent2 = discountDays * 80;
        var totalRent2 = rent1 + rent2;
        return totalRent2;
    }
    else{
        var rentDay1 = 10 * 100;
        var rentDay2 = 10 * 80;
        var remainDays = days - 20;
        var rentDay3 = remainDays * 50;
        var totalRent3 = rentDay1 + rentDay2 + rentDay3;
        return totalRent3;
    }

}




//This is the solution for the last problem.
//Returning the biggest name in the array.
function megaFriend(names){
    var big = names[0];
    for(var i = 0; i < names.length; i++){
        var arrNames = names[i];
        var lengthBig = big.length;
        var lengthArrNames = arrNames.length;
        if(lengthArrNames > lengthBig){
            big = arrNames;
        }
    }
    return big;
}
