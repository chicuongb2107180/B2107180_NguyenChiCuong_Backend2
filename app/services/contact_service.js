const {ObjectID} = require('mongodb');
class ContactService {
        constructor(client){
                this.Contact=client.db().collection('contacts');
        }
}