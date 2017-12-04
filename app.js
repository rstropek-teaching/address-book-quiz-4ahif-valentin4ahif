"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify_1 = require("restify");
const deleteID_1 = require("./deleteID");
const getContacts_1 = require("./getContacts");
const addContact_1 = require("./addContact");
var server = restify_1.createServer();
server.use(restify_1.plugins.bodyParser());
server.get('/contacts', getContacts_1.getAll);
server.post('/contacts', addContact_1.post);
server.del('/contacts/:id', deleteID_1.deleteSingle);
server.listen(8080, () => console.log('API is listening'));
