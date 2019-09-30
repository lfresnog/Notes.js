import uuidv1 from 'uuid/v1';
import chalk from 'chalk';
import {book} from './app';

//Notes


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
        book.notes.splice(argv.index,1);
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

export{add,list,remove,read};