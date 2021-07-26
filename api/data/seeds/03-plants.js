exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("plants")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("plants").insert([
        {
          id: 1,
          nickname: "Bamboo",
          species: "Bambusoideae",
          h2o_frequency: "Once a day",
          user_id: 1,
        },
        {
          id: 2,
          nickname: "Bamboo",
          species: "Bambusoideae",
          h2o_frequency: "3 times per week",
          user_id: 1,
        },
        {
          id: 3,
          nickname: "Bamboo",
          species: "Bambusoideae",
          h2o_frequency: "3 times per week",
          user_id: 2,
        },
        {
          id: 4,
          nickname: "Bamboo",
          species: "Bambusoideae",
          h2o_frequency: "3 times per week",
          user_id: 2,
        },
        {
          id: 5,
          nickname: "Bamboo",
          species: "Bambusoideae",
          h2o_frequency: "3 times per week",
          user_id: 3,
        },
      ]);
    });
};
