import { createConnection } from 'typeorm';
import {Users} from './Entities/Users';
import { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_NAME } from "./config";



export const connectDB = async () => {

   await createConnection({
        type: 'mysql',
        database: 'primex-crud',
        username: 'root',
        password: 'password123',
        host: 'localhost',
        port: 3306,
        entities: [Users],
        synchronize: true,
        ssl: false
    });
}