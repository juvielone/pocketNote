import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isClick, setIsClick] = useState(false);


    function handleChange(event) {
        const { name, value } = event.target
        setNote((prevValues) => {
            return {
                ...prevValues,
                [name]: value
            }
        })
    }

    function onSubmit(event) {
        props.onAdd(note);

        setNote({
            title: "",
            content: ""
        });

        setIsClick(false);
        event.preventDefault();
    }

    function handleClick() {
        setIsClick(true);
    }

    return (
        <div>
            <form className="create-note">

                {isClick ?
                    <   input onChange={handleChange} name="title" placeholder="Title" value={note.title} autocomplete="off" />
                    :
                    ""
                }

                <textarea onChange={handleChange}
                    onClick={handleClick}
                    name="content"
                    placeholder="Take a note..."
                    rows={isClick ? "3" : "1"}
                    value={note.content}
                    autocomplete="off" />

                <Zoom in={isClick} >

                    <Fab onClick={onSubmit}>
                        <AddIcon />
                    </Fab>

                </Zoom>


            </form>
        </div>
    );
}

export default CreateArea;
