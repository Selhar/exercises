let lib = require('./6lib');
let dir = process.argv[2];
let ext = process.argv[3];

lib(dir, ext, (err, files) => {
    for(i in files)
        console.log(files[i]);
});