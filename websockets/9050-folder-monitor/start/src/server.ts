import * as chokidar from 'chokidar';

const folderToWatch = 'C:\\temp\\folderToWatch';
chokidar.watch(folderToWatch, {ignoreInitial: true})
    .on('add', path => console.log(`Added ${path}`))
    .on('unlink', path => console.log(`Removed ${path}`));

console.log(`Watching folder ${folderToWatch}...`);
