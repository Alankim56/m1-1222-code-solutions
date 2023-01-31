var $books = [
  {
    isbn: '123-234-345-12345',
    title: 'Harry Potter 1',
    author: 'JK Rowling'
  },
  {
    isbn: '342-234-543-41245',
    title: 'Harry Potter 2',
    author: 'JK Rowling 2'
  },
  {
    isbn: '323-342-643-25423',
    title: 'Harry Potter 3',
    author: 'JK Rowling 3'
  }
];

console.log('$books:', $books);
console.log('typeof:', typeof $books);

console.log(JSON.stringify($books));
console.log('typeof:', typeof JSON.stringify($books));

var $student = '{"id": 5656, "name": "Mr.Potter"}';
console.log('string:', $student);
console.log('typeof:', typeof $student);

console.log(JSON.parse($student));
console.log('typeof:', typeof JSON.parse($student));
