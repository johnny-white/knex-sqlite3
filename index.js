const server = require('./server');

const { db } = require('./data/db-config');

const { stats } = require('./stats');

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Listening to port: ${port}...`);
});

function insertToDB() {
  db('stats')
    .del()
    .then(() => {
      return db('stats').insert(stats);
    });
}

// insertToDB();
