"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_GROUP_INSTRUCTEUR_QUERY = void 0;
var graphql_request_1 = require("graphql-request");
exports.GET_GROUP_INSTRUCTEUR_QUERY = (0, graphql_request_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query getGroupeInstructeur(\n    $groupeInstructeurNumber: Int!\n    $state: DossierState\n    $order: Order\n    $after: String\n  ) {\n    groupeInstructeur(number: $groupeInstructeurNumber) {\n      id\n      number\n      label\n      instructeurs {\n        id\n        email\n      }\n      dossiers(state: $state, order: $order, after: $after) {\n        nodes {\n          ...DossierFragment\n        }\n      }\n    }\n  }\n"], ["\n  query getGroupeInstructeur(\n    $groupeInstructeurNumber: Int!\n    $state: DossierState\n    $order: Order\n    $after: String\n  ) {\n    groupeInstructeur(number: $groupeInstructeurNumber) {\n      id\n      number\n      label\n      instructeurs {\n        id\n        email\n      }\n      dossiers(state: $state, order: $order, after: $after) {\n        nodes {\n          ...DossierFragment\n        }\n      }\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=getGroupInstructeur.js.map