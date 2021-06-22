const db = require('../data/db-config')



function find() {
  return db("users as u")
  .select("user_id", "firstName", "lastName",
   "email", "password", "role")
  .orderBy("user_id");
}

function findRequest() {
  return db("maintenance as m")
  .select("maintenance_id", "title", "request",
   "request_image", "urgency")
  .orderBy("maintenance_id");
}

function findBy(filter) {
  return db("users").where(filter)
  .orderBy("user_id")
}

// async function add(user) {
//   const [id] = await db("users").insert(user,["id", "firstName", "lastName",
//   "email", "password", "role"] )
//   return findById(id)
// }

const addUser = (user) =>{
  return db("users").insert(user,["user_id", "firstName", "lastName",
  "email", "password", "role"]);
}

const addRequest = (maintenance) =>{
  return db("maintenance").insert(maintenance,["maintenance_id", "title", "request",
  "request_image", "urgency"]);
}

function findById(user_id) {
  return db("users as u")
    .select("user_id", "firstName", "lastName",
     "email", "password", "role")
    .where({user_id})
    .first()
}

function findRequestById(maintenance_id) {
  return db("maintenance as m")
    .select("maintenance_id", "title", "request",
    "request_image", "urgency")
    .where({maintenance_id})
    .first()
}

module.exports = {
  find,
  findRequest,
  addUser,
  addRequest,
  findBy,
  findById,
  findRequestById
}