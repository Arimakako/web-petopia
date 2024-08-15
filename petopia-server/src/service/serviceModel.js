const { MongoClient, ObjectId } = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "petopiadb";
let db;
let serviceCollection;

client.connect().then(client => {
    db = client.db(dbName);
    serviceCollection = db.collection("services");
    console.log("Connected successfully to the database");
});

const findAll = async () => {
    return await serviceCollection.find({}).toArray();
};

const findById = async (id) => {
    return await serviceCollection.findOne({ _id: new ObjectId(id) });
};

const create = async (service) => {
    return await serviceCollection.insertOne(service);
};

const update = async (id, service) => {
    let updateData = { ...service };
    delete updateData._id; 
    const result = await serviceCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData }
    );
    return result;
};

// Delete service
const remove = async (id) => {
    return await serviceCollection.deleteOne({ _id: new ObjectId(id) });
};
module.exports = { findAll, findById, create, update, remove };
