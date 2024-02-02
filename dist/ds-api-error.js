"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DsApiError = void 0;
class DsApiError extends Error {
    _buildMessage() {
        this.message = [
            DsApiError.title,
            ...this.errors.map((e) => e.message),
        ].join("\n");
    }
    constructor(gqlResponse) {
        super(DsApiError.title);
        this.graphQlRequest = gqlResponse.request;
        this.graphQlResponse = gqlResponse.response;
        this.errors = gqlResponse?.response?.errors || [];
        this._buildMessage();
    }
}
exports.DsApiError = DsApiError;
DsApiError.title = "GraphQL Error from DS-API.";
//# sourceMappingURL=ds-api-error.js.map