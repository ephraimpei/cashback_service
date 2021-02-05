# E-commerce Cashback Loyalty Program

## Overview
We currently have a basic e-commerce system that supports the following:
1. Account Registration / Sign in
2. Placing Orders
3. Multiple Merchant partners

The business wants to build a loyalty program that customers can enroll in.  In the first iteration of this program, the plan is to support cashback maintenance operations and cashback on "fulfilled" orders.

## Business Requirements
1. User enrollment into the loyalty program
2. Business team can perform operations on the cashback program
  - Cashback amount base rate is set per merchant partner:
    * ie: Merchant A base rate is 5%
3. Users in the loyalty program will get cashback on "fulfilled" orders
  - Cashback payouts must be auditable

## Stretch Requirements
1. Additional cashback is added based on user tier
    * tier 1 (+1%) - in the loyalty program < 1 year
    * tier 2 (+2%) - in the loyalty program >= 1 year
2. Enabling promotional cashback rates

<br />

## Development

### Getting started
1. `make start` to start the app (app runs on `http://localhost:3000`)
2. `make migrate-initial` to run the initial db migrations
3. `make seed` to seed the db with the default data
4. `make down` to tear down app and local db data
5. `make clean` to tear down app and local db data AND remove images

### Solution:
1. `./server/solutionRouter.js` - API endpoints
2. `./migrations/20210205143735_solution.js` - DB schema updates

### Using the db
1. `make list-migrations` to list migrations statuses
2. `make migrate` to roll the db to the latest migration
3. `make rollback` to rollback the db from the last migration

### Helpful tips
1. Use `cURL` to test the endpoints
2. Use `jq` or `python -m json.tool` (if you don't have `jq`) to pretty print json data