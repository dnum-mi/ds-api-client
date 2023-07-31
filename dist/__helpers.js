"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dsApiClient = void 0;
const index_1 = require("./index");
require("dotenv").config();
const { API_URL, API_TOKEN } = process.env;
const dsApiClient = new index_1.DsApiClient(API_URL, API_TOKEN);
exports.dsApiClient = dsApiClient;
//# sourceMappingURL=__helpers.js.map