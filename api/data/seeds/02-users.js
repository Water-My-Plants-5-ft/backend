exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          id: 1,
          username: "joe",
          password: "joe",
          phoneNumber: "344-334-5324",
        },
        {
          id: 2,
          username: "bobby",
          password: "bobby",
          phoneNumber: "655-444-4444",
        },
        {
          id: 3,
          username: "frank",
          password: "frank",
          phoneNumber: "564-345-2345",
        },
        {
          id: 4,
          username: "mynameis",
          password: "mynameis",
          phoneNumber: "456-734-4465",
        },
      ]);
    });
};

/*DATA REQUIRED: 
name
username
password
*/
