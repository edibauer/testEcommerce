import { createPool } from "mysql2/promise";

const pool = createPool({
    user: 'localhost',
    user: 'root',
    password: 'MrRobot369',
    port: 3306,
    database: 'store'
})

export default pool