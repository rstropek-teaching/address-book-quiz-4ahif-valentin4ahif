import { createServer, plugins } from 'restify';

import { deleteSingle } from './deleteID';
import { getAll } from './getContacts';
import { post } from './addContact';

var server = createServer();

server.use(plugins.bodyParser());

server.get('/contacts', getAll);
server.post('/contacts', post);
server.del('/contacts/:id', deleteSingle);

server.listen(8080, () => console.log('API is listening'));