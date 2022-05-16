const username: string | number = 'scastillo';
const sum = (a: number, b: number) => {
  return a + b;
};
sum(4, 6);

class Person {
  constructor(public age: number, public lastname: string) {}
}
const sergio = new Person(45, 'Castillo');
sergio.age;
