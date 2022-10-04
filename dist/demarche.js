"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDemarche = void 0;
const getDemarche_1 = require("./graphql/getDemarche");
const getDemarche = async (client, idDemarche) => {
    try {
        return await client.request(getDemarche_1.default, { demarcheNumber: idDemarche }, { "Content-Type": "application/json" });
    }
    catch (error) {
        console.error(JSON.stringify(error, undefined, 2));
    }
};
exports.getDemarche = getDemarche;
//# sourceMappingURL=demarche.js.map