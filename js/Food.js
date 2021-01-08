class Food{

    constructor(){
        // loadImage("images/Milk.png") in this.milkImg ;
        this.milkImg = loadImage("images/Milk.png")
        this.foodStock =0;
        this.lastFed=null;
    }
    //getFoodStock(){}
    //updateFoodStock(){}
    //deductFood(){}
    display(){
        var x=80
         var y=100
imageMode(CENTER)
image(this.milkImg, 720,200, 50,50)
console.log("foodStock "+this.foodStock)
if(this.foodStock!==0){
    for(var i = 0; i<this.foodStock; i++){
    if(i%10===0){
        x=80
        y=y+50
    }
    image(this.milkImg, x, y, 50,50)
    x = x+30}
}
        // look at the hint in pdf and write the func
    }
}