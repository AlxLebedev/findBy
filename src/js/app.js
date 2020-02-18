
import data from './data';

import findBy from './findBy';

const result = data.filter(findBy('type', 'help'));

console.log(result);
