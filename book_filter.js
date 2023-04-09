// A list of books with pseudo data
let books = [
  { name: "Marry 1", auther: "Mr. Rana", pub_year: 2010 },
  { name: "Harry Potter 1", auther: "Joseph cannady", pub_year: 2004 },
  { name: "Harry Potter 2", auther: "Joe Biden", pub_year: 2008 },
  { name: "Rich Dad Poor Dad", auther: "Donald Trump", pub_year: 2001 },
  { name: "Psycology of money", auther: "Aditya Tiwari", pub_year: 2005 },
  { name: "Atomic habits", auther: "Bill Gates", pub_year: 2002 },
  { name: "The Raven", auther: "Raja Ravi Verma", pub_year: 2020 },
  { name: "The Founder", auther: "Steve Jobs", pub_year: 2030 },
  { name: "Arthshastra", auther: "Chanakya", pub_year: 2021 }
];

let books_before_2010 = books.filter(book => book.pub_year < 2010);
console.log(books_before_2010);

let books_after_2010 = books.filter(book => book.pub_year >= 2010);
for (const book of books_after_2010) {
    book.auther = book.auther.toUpperCase();
}
console.log(books_after_2010);