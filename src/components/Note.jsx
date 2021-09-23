import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Zoom from '@mui/material/Zoom';


function Note(props) {

    function onSubmit() {
        props.onDelete(props.id);
    }


    return (
        <Zoom in={true}>

            <div className="note">
                <h1>{props.title}</h1>
                <p>{props.content}</p>

                <button onClick={onSubmit}>
                    <DeleteIcon />
                </button>
            </div>

        </Zoom>
    );
}

export default Note;
