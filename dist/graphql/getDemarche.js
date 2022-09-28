"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_DEMARCHE_QUERY = void 0;
var graphql_request_1 = require("graphql-request");
exports.GET_DEMARCHE_QUERY = (0, graphql_request_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query getDemarche($demarcheNumber: Int!) {\n    demarche(number: $demarcheNumber) {\n      number\n      title\n      description\n    }\n  }\n"], ["\n  query getDemarche($demarcheNumber: Int!) {\n    demarche(number: $demarcheNumber) {\n      number\n      title\n      description\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=getDemarche.js.map