import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();


let database = null;

export const initDb = (callback) => {
    console.log('Initializing database...');
    
    if (database) {
        console.log('Database is already initialized!');
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGO_URL)
        .then((client) => {
            database = client;
            console.log('Database initialized!');
            callback(null, database);
        })
        .catch((error) => {
            console.error('Error initializing database:', error);
            callback(error);
        });
};

export const getDatabase = () => {
    if (!database) {
        throw new Error('Database not initialized. Call initDb first.');
    }
    return database;
}
