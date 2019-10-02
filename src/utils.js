import uuidv1 from 'uuid/v1';
import chalk from 'chalk';
import  fs from 'fs';
import yargs from 'yargs';

//Notes
let book;

const add = function add(argv){
    const note={
        title: argv.title,
        body: argv.body,
        author: argv.author,
        id:uuidv1()
    }
    book.notes.push(note);
    console.log(chalk.green("Note added"));     
}

const list = function list(){
    try {
      if (array.length == 0) {
        console.error(chalk.red("\n Array empty \n"));
    }else{
      book.notes.forEach( (note, i) => {
        console.log(`${i}: ${note.title}`);
      })
    } 
      }
      catch(error) {
        console.error(chalk.red("\n There aren't any notes \n"));
      }
    
}

const remove = function remove(argv){
    try {
      if (array.length == 0) {
        console.error(chalk.red("\n Array empty \n"));
    }
    else{
      book.notes.splice(argv.index,1);
    } 
      }
      catch(error) {
        console.error(chalk.red("\n There aren't any notes \n"));
      }
    
    
    
}

const read = function read(argv){
    try {
        console.log("\n"+ chalk.blue(book.notes[argv.index].title));
        console.log(book.notes[argv.index].body);
        console.log("by "+chalk.yellow(book.notes[argv.index].author)+ "\n");
      }
      catch(error) {
        console.error(chalk.red("\n That note doesn't exist \n"));
      }
}

const main = function main(){
  const path = './notes.txt';
fs.access(path, fs.F_OK, (err) => {
  if (err) {
    fs.writeFileSync("notes.txt","");
  }
  const data = fs.readFileSync("notes.txt").toString();
  if(data !== ""){
     book = JSON.parse(data);
  }else{
     book = {notes: []};
  }
  yargs.parse();
  fs.writeFileSync("notes.txt", JSON.stringify(book));
});
}

export{add,list,remove,read,main};