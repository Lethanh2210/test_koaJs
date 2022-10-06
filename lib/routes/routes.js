"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _bookRoutes = _interopRequireDefault(require("./book.routes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Prefix all routes with /books
const router = new _koaRouter.default({
  prefix: '/api'
}); // Routes will go here

router.use(_bookRoutes.default.routes());
var _default = router;
exports.default = _default;
//# sourceMappingURL=routes.js.map