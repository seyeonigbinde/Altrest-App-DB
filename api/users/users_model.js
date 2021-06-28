const db = require('../data/db-config')



function find() {
  return db("users as u")
  .select("user_id", "firstName", "lastName",
   "email", "phone", "address", "location", "password")
  .orderBy("user_id");
}

function findRequest() {
  return db("maintenance as m")
  .leftJoin("tenants as t", "t.tenant_id", "=", "m.tenant_id")
  .select("maintenance_id", "title", "request",
   "request_image", "urgency", "tenant_name")
  .orderBy("maintenance_id");
}

function findTenant() {
  return db("tenants as te")
  .leftJoin("property as p", "p.property_id", "=", "te.property_id")
  .select("tenant_id", "apartment", "tenant_name",
   "tenant_email", "tenant_phone", "tenant_occupation", "property_address", "property_state")
  .orderBy("tenant_id");
}

function findProperty() {
  return db("property as pr")
  .leftJoin("users as u", "u.user_id", "=", "pr.user_id")
  .select("property_id", "owner", "property_address",
   "property_city", "property_state", "firstName", "lastName")
  .orderBy("property_id");
}

function findBy(filter) {
  return db("users").where(filter)
  .orderBy("user_id")
}

const addUser = (user) =>{
  return db("users").insert(user,["user_id", "firstName", "lastName",
  "email", "phone", "address", "location", "password"]);
}

const addRequest = (maintenance) =>{
  return db("maintenance").insert(maintenance,["maintenance_id", "title", "request",
  "request_image", "urgency"]);
}

const addProperty = (property) =>{
  return db("property").insert(property,["property_id", "owner", "property_address",
  "property_city", "property_state"]);
}

const addTenant = (tenant) =>{
  return db("tenants").insert(tenant,["tenant_id", "apartment", "tenant_name",
  "tenant_email", "tenant_phone", "tenant_occupation"]);
}

function findById(user_id) {
  return db("users as u")
    .select("user_id", "firstName", "lastName",
    "email", "phone", "address", "location", "password")
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
function deleteRequest(maintenance_id) {
  return db("maintenance as m")
    .select("maintenance_id", "title", "request",
    "request_image", "urgency")
    .where({maintenance_id})
      .delete()
}

async function getPropertyById(property_id) { 
  const findProperty = await db('property as pr')
  .leftJoin('tenants as te', 'pr.property_id', '=', 'te.property_id')
  .select('pr.*', 'te.*')
  .where ('pr.property_id', property_id)
  .orderBy('te.apartment', 'asc')

  const transformed ={
    property_id: findProperty[0].property_id,
    owner: findProperty[0].owner,
    property_address: findProperty[0].property_address,
    property_city: findProperty[0].property_city,
    property_state: findProperty[0].property_state,
    created_at: findProperty[0].created_at,
    tenants: []
  }

  findProperty.forEach(findProperty => {
    if (findProperty.tenant_id){
      transformed.tenants.push({
        tenant_id: findProperty.tenant_id,
        apartment: findProperty.apartment,
        tenant_name: findProperty.tenant_name,
        tenant_email: findProperty.tenant_email,
        tenant_phone: findProperty.tenant_phone,
        tenant_occupation: findProperty.tenant_occupation,
      })
    }
  })

  return transformed
  
}


module.exports = {
  find,
  findRequest,
  findTenant,
  findProperty,
  addUser,
  addRequest,
  addProperty,
  addTenant,
  findBy,
  findById,
  findRequestById,
  deleteRequest,
  getPropertyById
}
