const express = require('express');
const app = express();
const path = require('path');
const conn = require('./connect').promise();

const PORT = 3000;


app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const queryString = 'SELECT book_name FROM book_mast';
  conn.query(queryString, function (error, results, fields) {
    if (error) throw error;
    res.render('books',{
      results,
    });
  });
})

app.get('/books', async (req, res) => {
  const queryString = 'SELECT A.book_name, B.aut_name, C.cate_descrip AS cat, D.pub_name AS pub, A.book_price FROM book_mast AS A, author AS B, category AS C, publisher AS D WHERE A.aut_id = B.aut_id AND A.cate_id = C.cate_id AND A.pub_id = D.pub_id';
  const categoryQueryString = 'SELECT cate_descrip FROM category';
  const publisherQueryString = 'SELECT pub_name FROM publisher';
  let bookQuery;

  if(Object.keys(req.query).length!==0) {
    let filterKey = Object.keys(req.query).toString();
    const filterValue = Object.values(req.query).toString();
    let filterQueryString;    

    if(filterKey === 'plt' || filterKey ==='pgt') {
      const order = filterKey === 'plt'?'<':'>';
      filterQueryString = `SELECT * FROM (${queryString}) ResultTable WHERE book_price ${order} ${filterValue}`;
    }else {
      filterKey = filterKey.slice(0,3);
      filterQueryString = `SELECT * FROM (${queryString}) ResultTable WHERE ${filterKey} = "${filterValue}"`;    
    }

    bookQuery = await conn.query(filterQueryString);
    
  } else {
    bookQuery = await conn.query(queryString);
  }

  const categoryQuery = await conn.query(categoryQueryString);
  const publisherQuery = await conn.query(publisherQueryString);

  const results = bookQuery[0];
  const category = categoryQuery[0];
  const publisher = publisherQuery[0];
  console.log(results);
  

  res.render('booksTable', {
    results,
    category,
    publisher,
  });
})



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
