import Scouter from './Scout-prototype'

const alex = new Scouter('Alex Banks');
alex.addItemToList('slingshot');

const eve = new Scouter('Eve Porcello');
eve.addItemToList('reading light');

console.log( `${alex.name}: ${alex.shoppingList}` );
console.log( `${eve.name}: ${eve.shoppingList}` );
