var dog, dogImg,happyDogImg, database, foodS, foodStock;
var feedBtn, addFoodBtn,fedTime, lastFed,foodObj;

function preload()
{
 
  dogImg = loadImage("images/dogImg.png")
  happyDogImg = loadImage("images/dogImg1.png")
 
}

function setup() {
  createCanvas(600, 500);
  database = firebase.database();
  dog = createSprite(250,250)
  dog.addImage("dog",dogImg)
  dog.addImage("doghappy",happyDogImg)
  dog.scale = 0.2;
  

 
  //create feedBtn and addFoodBtn and position them on the screen
   feedBtn = createButton("Feed")
  feedBtn.position(700,300)
  addFeedBtn = createButton("Add Food")
  addFeedBtn.position(700,350)
  //create new Food Object called foodObj
  foodObj = new Food()
  getFoodStock();

}


function draw() {  

  background(46, 139, 87);
  fill("red")
  stroke("white")
  
  
  foodObj.foodStock = foodS;
  //display foodObj
foodObj.display();
  foodObj.foodStock = foodS;
  foodObj.display();
  database.ref('FeedTime').on("value",function(data){
    lastFed = data.val();
    showTime(lastFed);
  });
    
 
  // call addFoodBtn 's mousePressed and call getFoodStock() and addFood(foodS);;
    feedBtn.mousePressed(function(){
      getFoodStock();
      feedDog();
    })
  //call feedBtn's mousePressed function and call getFoodStock(); and feedDog();
  addFeedBtn.mousePressed(function(){
    getFoodStock()
    addFood(foodS)
  })
  drawSprites();
  

}


function showTime(time){
//Look at the hint and fill the code for the func
if(time>= 12){
  text("Last Fed"+time%12+"PM",300,350)
}
else if(time===0){
  text("Last Fed 12 AM",300,350)

}
else {
  text("Last Fed"+time+"AM",300,350)

}
}

function addFood(f){
  f++;
  database.ref('/').update({
    Food : f
  })
}
function getFoodStock(){
  database.ref("Food").on("value",function(data){
    foodS = data.val();
    console.log(foodS)
  })
}
function feedDog(){
  foodS--
  database.ref("/").update({
    FeedTime:hour(),
    Food:foodS
  })
}
