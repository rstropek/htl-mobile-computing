import * as chokidar from 'chokidar';
import * as express from 'express';
import * as http from 'http';
import * as sio from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = sio(server);

app.use(express.static(__dirname + '/public'));
server.listen(8080, () => console.log('Webserver is listening'));

const folderToWatch = process.argv[2] || 'C:\\temp\\folderToWatch';
chokidar.watch(folderToWatch, {ignoreInitial: true})
    .on('add', path => io.emit('add', path))
    .on('unlink', path => io.emit('remove', path));
