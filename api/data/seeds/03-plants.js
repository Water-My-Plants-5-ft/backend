exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("plants")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("plants").insert([
        {
          id: 1,
          nickname: "Dragon",
          species: "Dragon Arum",
          h2o_frequency: "Once a day",
          user_id: 1,
        },
        {
          id: 2,
          nickname: "Money",
          species: "Money Tree",
          h2o_frequency: "3 times per week",
          user_id: 1,
        },
        {
          id: 3,
          nickname: "Lily",
          species: "Giant Water Lily",
          h2o_frequency: "5 times per week",
          user_id: 2,
        },
        {
          id: 4,
          nickname: "Starfish",
          species: "African Starfish Flowers",
          h2o_frequency: "Once a week",
          user_id: 2,
        },
        {
          id: 5,
          nickname: "Draca",
          species: "Dracaena Rikki Cane",
          h2o_frequency: "Once a day",
          user_id: 3,
        },
      ]);
    });
};
