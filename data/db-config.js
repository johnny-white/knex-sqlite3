const knex = require('knex');
const config = require('../knexfile');

const db = knex(config.development);

function find() {
  return db('stats');
}

function findById(id) {
  return db('stats').where({ id: Number(id) });
}

function insert(post) {
  return db('stats')
    .insert(post)
    .then((ids) => ({ id: ids[0] }));
}

function update(id, post) {
  return db('stats').where('id', Number(id)).update(post);
}

function remove(id) {
  return db('stats').where('id', Number(id)).del();
}

module.exports = {
  db,
  find,
  findById,
  insert,
  update,
  remove,
};
