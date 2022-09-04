// Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.
// Общие требования:
// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.



let totalElectroCons = 0; 
let totalWaterCons = 0; 

class Kitchendevs {
    	constructor(options) {
    this.name = options.name,
    this.consumption = options.consumption,
    this.material = options.material
    }
}


const frige = new Kitchendevs ({    
    name: 'Fridge',
    consumption: 200,
    material: 'Metal'
});

const whashingMachine = new Kitchendevs({
    name: 'Washing machine',
    consumption: 450,
    material: 'Plastic',   
});

const grillMachine = new Kitchendevs ({
    name: 'Grill',
    consumption: 1500,
    material: 'Steel'    
});


Kitchendevs.prototype.switchOn = function (position) {
    if('on' === position) { console.log( this.name + ' включена ' 
    + this.consumption + ' W.'); 
    return totalElectroCons += this.consumption; } 

    else if ('off' === position) {console.log( this.name + ' выключен/а'); 
    return totalElectroCons;}
}

whashingMachine.switchOn('off');
grillMachine.switchOn('off');
frige.switchOn('off');

console.log('Общее потребление: '+ totalElectroCons + ' W/h. ');


export { 
    Kitchendevs as Kitchendevs,
    totalElectroCons as totalElectroCons,          
         whashingMachine as whashingMachine,
         grillMachine as grillMachine,
         frige as frige
};