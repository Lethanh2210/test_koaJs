"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _koaBody = _interopRequireDefault(require("koa-body"));

var _routes = _interopRequireDefault(require("./routes/routes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa.default();
app.use((0, _koaBody.default)());
app.use(_routes.default.routes());
app.listen(3000, () => {
  console.log("server is running 2");
});
//# sourceMappingURL=server.js.map