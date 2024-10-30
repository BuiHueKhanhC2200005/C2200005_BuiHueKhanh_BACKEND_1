const { MongoClient } = require("mongodb");

class MongoDB {
    static client = null;

    static connect = async (uri) => {
        if (this.client) return this.client;
        this.client = await MongoClient.connect(uri);
        return this.client; // Trả về client sau khi kết nối
    };
}

module.exports = MongoDB;
