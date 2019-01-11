const fs = require('fs')

module.exports.ls = () => {
    fs.readdir('./', (err, files)=>{
        const filesToString = files.reduce((acc, file) => {
            return `${acc} ${file} `;
          }, '');
      
          console.log(filesToString);
    });
};

module.exports.touch = () => {
  var fileName = 'sample.txt'; 

  fs.writeFileSync(fileName, 'You have a new file!');
}

  module.exports.mkdir = () => {
    var folderName = 'New Folder';

    fs.mkdir(folderName, function(){
      console.log('success')
    });
  };