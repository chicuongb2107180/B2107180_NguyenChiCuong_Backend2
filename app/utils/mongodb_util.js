const { mongodb } = require("mongodb");
class MongoDBUtil {
    static connect= async(uri) => {
        if (this.client) {
                return this.client;
        }
            this.client = await mongodb.MongoClient.connect(uri);
            return this.client;
};
    }
    module.exports = MongoDB;
   