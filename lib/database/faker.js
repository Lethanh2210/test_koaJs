"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDatabase = createDatabase;
exports.createRandomUser = createRandomUser;

var _faker = require("@faker-js/faker");

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createRandomUser() {
  return {
    id: _faker.faker.datatype.uuid(),
    name: _faker.faker.commerce.product(),
    price: _faker.faker.datatype.number(),
    description: _faker.faker.helpers.arrayElement(['beautiful', 'new product', 'cheap']),
    product: _faker.faker.helpers.arrayElement(['T-Shirt', 'Polo', 'Sweater']),
    color: _faker.faker.color.rgb(),
    createAt: _faker.faker.date.past(),
    image: _faker.faker.image.fashion()
  };
}

function createDatabase() {
  const products = [];
  Array.from({
    length: 100
  }).forEach(() => {
    products.push(createRandomUser());
  });

  _fs.default.writeFileSync('./src/database/products.json', JSON.stringify({
    data: products
  }));
}
//# sourceMappingURL=faker.js.map