const connection = require('./database/connection')
function index() {
    let sql = 'SELECT * FROM awards';
    connection.query(sql, (err: any, result: any) => {
        return result;
    });
}