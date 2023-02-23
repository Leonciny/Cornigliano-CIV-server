"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection = require('./database/connection');
function index() {
    let sql = 'SELECT * FROM awards';
    connection.query(sql, (err, result) => {
        return result;
    });
}
//# sourceMappingURL=AwardController.js.map