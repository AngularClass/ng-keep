// be sure to expose this module
// by exporting it
let id = 0;
const Notes = () => {
   const notes = [
    {id, content: 'my first note'},
    {id: ++id, content: 'some note'},
    {id: ++id, content: 'my other note'}
   ];

   // define crud on the notes here
  let getNotes = () => {
    return notes;
  }

  let addNote = (content) => {
    console.log(content);
    notes.push({ id: ++id, content });
  }

  return {getNotes, addNote};
};

export {Notes}
