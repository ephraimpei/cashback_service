//--------------------------------DO NOT MODIFY ANYTHING HERE--------------------------------//

const uuid = require('uuid');

exports.seed = async function(knex) {
  await knex.raw(`
    BEGIN;

    DELETE FROM users;

    DELETE FROM merchants;

    DELETE FROM orders;

    COMMIT;
  `)

  const userIDs = []
  const numUsers = 4;
  for (let i = 0; i < numUsers; i++) {
    userIDs.push(uuid.v4())
  }

  const merchantIDs = []
  const numMerchants = 4;
  for (let i = 0; i < numMerchants; i++) {
    merchantIDs.push(uuid.v4())
  }

  const statuses = ['placed', 'fulfilled']

  const getRandomUserID = () => userIDs[Math.floor(Math.random() * numUsers)]
  const getRandomMerchantID = () => merchantIDs[Math.floor(Math.random() * numMerchants)]
  const generateRandomAmount = () => Math.round(Math.random() * 10000) / 100
  const getRandomStatus = () => statuses[Math.floor(Math.random() * 2)]

  const orders = [];
  const numOrders = 100;
  for (let i = 0; i < numOrders; i++) {
    orders.push(`('${uuid.v4()}', ${generateRandomAmount()}, '${getRandomStatus()}', '${getRandomMerchantID()}', '${getRandomUserID()}')`)
  }

  await knex.raw(`
    BEGIN;

    INSERT INTO users (id, first_name, last_name) VALUES
      ('${userIDs[0]}', 'Gandalf', 'The Grey'),
      ('${userIDs[1]}', 'Bilbo', 'Baggins'),
      ('${userIDs[2]}', 'Frodo', 'Baggins'),
      ('${userIDs[3]}', 'Samwise', 'Gamgee');

    INSERT INTO merchants (id, domain) VALUES
      ('${merchantIDs[0]}', 'macys.com'),
      ('${merchantIDs[1]}', 'bloomingdales.com'),
      ('${merchantIDs[2]}', 'saksfifthavenue.com'),
      ('${merchantIDs[3]}', 'rei.com');

    INSERT INTO orders (id, amount, status, merchant_id, user_id) VALUES
      ${orders.join(',')};

    COMMIT;
  `)
};