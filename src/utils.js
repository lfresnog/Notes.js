import uuidv1 from 'uuid/v1';
import  fs from 'fs';
import chalk from 'chalk'

//Notes
const book={
    notes:[]
}

const add = function add(argv){
    const note={
        title: argv.title,
        body: argv.body,
        author: argv.author,
        id:uuidv1()
    }
    const path = './notes.txt';
    fs.access(path, fs.F_OK, (err) => {
        if(err){
        book.notes.push(note);
        const str=JSON.stringify(book);
        fs.writeFileSync("notes.txt",str);
        }
        else{
            const str1=fs.readFileSync('notes.txt').toString()
            const book=JSON.parse(str1);
            book.notes.push(note);
            const str2 = JSON.stringify(book);
            fs.writeFileSync("notes.txt",str2);
        }
        
    });
   
}

const list = function list(){
    try {
        const str=fs.readFileSync('notes.txt').toString()
        const book=JSON.parse(str);
        book.notes.forEach( (note, i) => {
        console.log(`${i}: ${note.title}`);
      })
      }
      catch(error) {
        console.error(chalk.red("\n There aren't any notes \n"));
      }
    
}
const remove = function remove(argv){
    try {
        const str=fs.readFileSync('notes.txt').toString()
        const book=JSON.parse(str);
        book.notes.splice(argv.index,1);
        const str2 = JSON.stringify(book);
        fs.writeFileSync("notes.txt",str2);
      }
      catch(error) {
        console.error(chalk.red("\n There aren't any notes \n"));
      }
    
    
    
}
const read = function read(argv){
    try {
        const str=fs.readFileSync('notes.txt').toString()
        const book=JSON.parse(str);
        console.log("\n"+ chalk.blue(book.notes[argv.index].title));
        console.log(book.notes[argv.index].body);
        console.log("by "+chalk.yellow(book.notes[argv.index].author)+ "\n");
      }
      catch(error) {
        console.error(chalk.red("\n That note doesn't exist \n"));
      }
}

export{add,list,remove,read};