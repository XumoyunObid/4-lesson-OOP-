function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.nationality = "Uzbek";
    this.name = function() {
        return this.firstName + " " + this.lastName;
      };
  }

let myPerson = new Person("Eshmat", "Toshmatov", 32);

console.log(`My fullname is ${myPerson.name()}, I am ${myPerson.age} years old. I am ${myPerson.nationality}.`);


function Fruits(name, shape, color, isExotic, callories) {
    this.fruitColor = color,
    this.fruitShape = shape,
    this.fruitName = name,
    this.fruitCallories = callories,
    this.isExotic = isExotic
}

let myFruit = new Fruits("Avacado", "Oval", "Green", "is an Exotic", 240)

console.log(`${myFruit.fruitName} ${myFruit.isExotic}, ${myFruit.fruitShape} and ${myFruit.fruitColor} fruit. It contains ${myFruit.fruitCallories} calories`);

function Animal(type, color, sound, isMammal, weight) {
    this.animalType = type,
    this.animalColor = color,
    this.animalSound = sound,
    this.animalIsMammal = isMammal,
    this.animalWeight = weight
}

let animal = new Animal("Blue Whale", "Blue", "relaxing", "is mammal", 150)

console.log(`${animal.animalType} ${animal.animalIsMammal} animal and the color is ${animal.animalColor}. The sound of ${animal.animalType} is ${animal.animalSound} and it weights ${animal.animalWeight} tonns`);


function Car(type, color, sound, weight, maxSpeed) {
    this.carType = type,
    this.carColor = color,
    this.carSound = sound,
    this.carWeight = weight,
    this.carSpeed = maxSpeed
}

let car = new Car("Toyota Supra", "White", "ratatata", 1500)

console.log(`${car.carType}, the color is ${car.carColor}. The sound is relaxing (${car.carSound}). The weight is ${car.carWeight} kg.`);

function Food(name, type, time, calories) {
    this.foodType = type,
    this.foodCalories = calories,
    this.foodPreparingTime = time,
    this.foodName = name
}

let food = new Food("Osh", "Main food", "one hour", 1000)

console.log(`${food.foodName} is traditional food of Asian culture, ${food.foodName} is ${food.foodType} and takes ${food.foodPreparingTime} to cook. Average plate of ${food.foodName} has ${food.foodCalories} calories.`);