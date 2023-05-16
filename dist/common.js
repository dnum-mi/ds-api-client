"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphQlRequest = void 0;
const ds_api_error_1 = require("./ds-api-error");
const graphQlRequest = async (client, query, variables) => {
    try {
        return await client.request(query, variables, {
            "Content-Type": "application/json",
        });
    }
    catch (e) {
        throw new ds_api_error_1.DsApiError(e);
    }
};
exports.graphQlRequest = graphQlRequest;
//# sourceMappingURL=common.js.map