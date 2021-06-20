const db = require('../data/db-config')



function find() {
  return db("users as u")
  .select("id", "firstName", "lastName",
   "email", "password", "role")
  .orderBy("id");
}

function findBy(filter) {
  return db("users").where(filter)
  .orderBy("id")
}

// async function add(user) {
//   const [id] = await db("users").insert(user,["id", "firstName", "lastName",
//   "email", "password", "role"] )
//   return findById(id)
// }

const addUser = (user) =>{
  return db("users").insert(user,["id", "firstName", "lastName",
  "email", "password", "role"]);
}

function findById(id) {
  return db("users as u")
    .select("id", "firstName", "lastName",
     "email", "password", "role")
    .where("id", id)
    .first()
}

module.exports = {
  find,
  addUser,
  findBy,
  findById
}