const database = require('../db/database.js');
const initDocs = require('../data/editdocs.json');

const editdocs = {
    getAllEditdocs: async function getAllEditdocs() {
        let db;

        try {
            db = await database.getDb();

            const allEditdocs = await db.collection.find().toArray();

            return allEditdocs;
        } catch (error) {
            return {
                errors: {
                    message: error.message,
                }
            };
        } finally {
            await db.client.close();
        }
    },
    insertDoc: async function insertDoc(newDoc) {
        let db;

        try {
            db = await database.getDb();

            const result = await db.collection.insertOne(newDoc);

            return {
                ...newDoc,
                _id: result.insertedId,
            };
            
            //console.log(result);
        } catch (error) {
            console.error(error.message);
        }finally {
            await db.client.close();
        }
    },
    init: async function init() {
        let db;

        try {
            db = await database.getDb();

            const result = await db.collection.insertMany(initEditdocs);

            console.log(`${result.insertedCount} documents were inserted`);
        } catch (error) {
            console.error(error.message);
        }finally {
            await db.client.close();
        }
    }
};

module.exports = editdocs;