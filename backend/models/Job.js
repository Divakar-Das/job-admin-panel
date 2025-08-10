const { Model } = require('objection');
const knex = require('../db/knex'); // your knex instance

Model.knex(knex);

class Job extends Model {
  static get tableName() {
    return 'jobs';  // your actual table name in MySQL
  }
}

module.exports = Job;
