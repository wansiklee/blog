require('ts-node').register();

const { createPages } = require('./gatsby-node.ts');

exports.createPages = createPages;