"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DsApiError = exports.DsApiClient = void 0;
const ds_api_client_1 = require("./ds-api-client");
Object.defineProperty(exports, "DsApiClient", { enumerable: true, get: function () { return ds_api_client_1.DsApiClient; } });
const ds_api_error_1 = require("./ds-api-error");
Object.defineProperty(exports, "DsApiError", { enumerable: true, get: function () { return ds_api_error_1.DsApiError; } });
__exportStar(require("./@types/types"), exports);
//# sourceMappingURL=index.js.map