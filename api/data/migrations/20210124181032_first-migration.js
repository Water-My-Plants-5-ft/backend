exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("username", 200).notNullable();
      users.string("password", 200).notNullable();
      users.string("phone").notNullable();
      users.timestamps(false, true);
    })
    .createTable("plants", (plant) => {
      plant.increments();
      plant
        .integer("userID")
        .unsigned()
        // .notNullable()
        .references("users_id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      plant.string("nickname").notNullable();
      plant.string("species").notNullable();
      plant.string("h2o_frequency").notNullable();
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("plants").dropTableIfExists("users");
};
