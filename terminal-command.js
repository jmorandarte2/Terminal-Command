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
  fs.writeFileSync('sample.txt', 'You have a new file!');
}
 
  module.exports.mkdir = () => {
    fs.mkdir('New Folder', function(){
      console.log('success')
    });
  };