//-----DO NOT MODIFY ANYTHING HERE----//

exports.up = async function(knex) {
  await knex.raw(`
    BEGIN;

      CREATE TABLE IF NOT EXISTS users (
        id uuid NOT NULL,
        first_name varchar(255) NOT NULL,
        last_name varchar(255) NOT NULL,

        PRIMARY KEY (id)
      );

      CREATE TABLE IF NOT EXISTS merchants (
        id uuid NOT NULL,
        domain varchar(255) NOT NULL,
        PRIMARY KEY (id),

        UNIQUE (domain)
      );

      CREATE TABLE IF NOT EXISTS orders (
        id uuid NOT NULL,
        amount numeric(10, 2) NOT NULL,
        status varchar(255) NOT NULL,
        created_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
        merchant_id uuid NOT NULL,
        user_id uuid NOT NULL,

        PRIMARY KEY (id),
        CONSTRAINT fk_merchant
          FOREIGN KEY(merchant_id)
            REFERENCES merchants(id)
            ON DELETE SET NULL,
        CONSTRAINT fk_user
          FOREIGN KEY(user_id)
            REFERENCES users(id)
            ON DELETE SET NULL
      );

      COMMIT;
  `)
};

exports.down = async function(knex) {
  await knex.raw(`
    BEGIN;

    DROP TABLE IF EXISTS orders;

    DROP TABLE IF EXISTS merchants CASCADE;

    DROP TABLE IF EXISTS users CASCADE;

    COMMIT;
  `)
};
