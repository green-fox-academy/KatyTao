const book = new Map();
book.set(`William A. Lathan`, `405-709-1865`);
book.set(`John K. Miller`, `402-247-8568`);
book.set(`Hortensia E. Foster`, `606-481-6467`);
book.set(`Amanda D. Newland`, `319-243-5613`);
book.set(`Brooke P. Askew`, `307-687-2982`);

console.log(book.get(`John K. Miller`)); //What is John K. Miller's phone number?
for (let [key, value] of book) {
  if (value === `307-687-2982`) {
    console.log(key);
  }
}

console.log(book.has(`Chris E. Myers`)); //Do we know Chris E. Myers' phone number?
