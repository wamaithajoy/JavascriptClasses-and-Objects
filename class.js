class KioskCalc{
    constructor(fruit,quantity){
    this.fruit=fruit
    this.quantity=quantity
    this.fruitsPriceList={"Oranges":30,"Mangoes":15,"Avocado":40}
    this.getCost=function(){
        return`${quantity} ${fruit} for KES ${quantity*this.fruitPriceList.Orange}`
    }
    }
}
var kioskOne=new KioskCalc("Orange",2);
console.log(kioskOne.getCost());