import React from "react";
import './CharComponent.css'

const CharComponent = (props) => {
    return (
        <div className="Char-Comp" onClick={props.clicked}>
            <p>Character Component</p>
            {/*This is the part I needed help with!!! */}
            <p>{props.character}</p>
            </div>
    )
}

export default CharComponent;