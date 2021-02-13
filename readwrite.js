const fs = require("fs");

//fs.writeFileSync("file.txt","Hello World!");
//
//buf_data = fs.readFileSync("file.txt");
//
//original_data = buf_data.toString();
//
//console.log(buf_data);
//
//console.log(original_data);

fs.renameSync("file.txt","newfile.txt");
