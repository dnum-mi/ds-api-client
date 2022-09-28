"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dsApiClient = void 0;
var index_1 = require("./index");
require("dotenv").config();
var _a = process.env, API_URL = _a.API_URL, API_TOKEN = _a.API_TOKEN;
var dsApiClient = new index_1.DsApiClient(API_URL, API_TOKEN);
exports.dsApiClient = dsApiClient;
//# sourceMappingURL=__helpers.js.map