exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          username: "joe",
          password: "joe",
          phone_number: "344-334-5324",
        },
        {
          username: "bobby",
          password: "bobby",
          phone_number: "655-444-4444",
        },
        {
          username: "frank",
          password: "frank",
          phone_number: "564-345-2345",
        },
        {
          username: "mynameis",
          password: "mynameis",
          phone_number: "456-734-4465",
        },
      ]);
    });
};

/*DATA REQUIRED: 
name
username
password
*/
