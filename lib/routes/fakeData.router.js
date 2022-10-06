"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _faker = require("../database/faker");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Prefix all routes with /books
const router = new _koaRouter.default({
  prefix: '/fakeData'
}); // Routes will go here

router.get('/', _faker.createDatabase);
var _default = router;
exports.default = _default;
//# sourceMappingURL=fakeData.router.js.map