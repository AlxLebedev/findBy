import data from '../data';

import findBy from '../findBy';


test('find by name', () => {
  const recieved = data.filter(findBy('name', 'урон'));
  const expected = [{ name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' }];
  expect(recieved).toEqual(expected);
});

test('find by type', () => {
  const recieved = data.filter(findBy('type', 'attack'));
  const expected = [{ name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' }];
  expect(recieved).toEqual(expected);
});

test('find by unexisted keys', () => {
  const recieved = data.filter(findBy('ola-la', 'bang-bang'));
  const expected = [];
  expect(recieved).toEqual(expected);
});

test('find without arguments', () => {
  const recieved = data.filter(findBy());
  const expected = data;
  expect(recieved).toEqual(expected);
});
