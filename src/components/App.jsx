import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = useState([])


    function addItem(newNote) {
        setNotes((prevValues) => {
            return [...prevValues, newNote]
        });
    }

    function deleteItem(id) {
        setNotes(prevItems => {
            return prevItems.filter((perItem, index) => {
                return index !== id;
            })
        })
    }


    return (

        <div>

            <Header />

            <CreateArea onAdd={addItem} />


            {notes.map((perNote, index) => {
                return <Note
                    key={index}
                    id={index}
                    title={perNote.title}
                    content={perNote.content}
                    onDelete={deleteItem}
                />

            })}

            <Footer />

        </div>


    );
}

export default App;
