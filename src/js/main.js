
import { showContent, initLinks } from './routing.js';
import { setupSubscribe } from './subscription.js'

console.log(`%c Created by SovietSpy2 @ 2023`, 'color: #FF6347');

// setup
initLinks();
showContent("/posts");
setupSubscribe();
