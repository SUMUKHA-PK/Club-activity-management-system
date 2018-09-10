module.exports = {

    read_delete: function(str) {

        var path = __dirname  
        //console.log(path)

            
        const fs = require('fs'); 
        path += "/log.out"; 
        //console.log(path)



        //let txtFile = '/home/archanapriya/1.out';
        str = fs.readFileSync(path,'utf8');

        var fs1 = require('fs')
        fs1.truncate(path, 0)       //to delete the content of the file

        }
};
