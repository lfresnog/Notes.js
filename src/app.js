import yargs from 'yargs';
import  fs from 'fs';
import {add,list,remove,read} from './utils';

let book;

//Add
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Title of the note',
            demandOption:true,
            type:'string',
        },
        body: {
            describe: 'body of the note',
            demandOption: true,
            type: 'string',
          },
          author: {
            describe: 'body of the note',
            demandOption: true,
            type: 'string',
          },
    },
    handler: add,
})

//List
yargs.command({
    command:'list',
    describe:'List titles of notes',
    handler: list,
})

//Remove
yargs.command({
  command:'remove',
  describe: 'Remove a note',
  index: {
    describe: 'Info necessary to choose the note to remove',
    demandOption: true,
    type: 'number',
  },
  handler: remove,

})

//Read
yargs.command({
  command:'read',
  describe: 'Read a note',
  index: {
    describe: 'Info necessary to choose the note to read',
    demandOption: true,
    type: 'number',
  },
  handler: read,

})

export{book};

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

