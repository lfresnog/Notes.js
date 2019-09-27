import uuidv1 from 'uuid/v1';
import  fs from 'fs';

//Notes
const book={
    notes:[]
}

function add(argv){
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

function list(){
    try {
        const str=fs.readFileSync('notes.txt').toString()
        const book=JSON.parse(str);
        book.notes.forEach( (note, i) => {
        console.log(`${i}: ${note.title}`);
      })
      }
      catch(error) {
        console.error("There aren't any notes");
      }
    
}
function remove(argv){
    try {
        const str=fs.readFileSync('notes.txt').toString()
        const book=JSON.parse(str);
        book.notes.splice(argv.index-1,1);
        const str2 = JSON.stringify(book);
        fs.writeFileSync("notes.txt",str2);
      }
      catch(error) {
        console.error("There aren't any notes");
      }
    
    
    
}
function read(argv){
    const str=fs.readFileSync('notes.txt').toString()
    const book=JSON.parse(str);
    try {
        console.log(book.notes[argv.index].body);
      }
      catch(error) {
        console.error("That note doesn't exist");
      }
}

export{add,list,remove,read};