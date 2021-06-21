
exports.seed = function (knex, Promise) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        { "user_id": 1, "firstName": "Seye", "lastName": "Onigbinde", 
        "email": "seyeonigbinde@gmail.com", "password": "1234", "role": "Tenant" },
        { "user_id": 2, "firstName": "Tosin", "lastName": "Animashaun", 
        "email": "tanimashaun@gmail.com", "password": "1234", "role": "Landlord" }
      ]);
    });
};
