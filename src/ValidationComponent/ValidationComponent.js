import React from "react";



// 2. Create a new component that receives the text length as a prop.

const ValidationComponent = (props) => {
    // 3. Inside Validation Component out put either "Text too short" or
    // "Text long enough" based on text length with min of 5 characters.
    // I'm pretty proud of the ternary operator I wrote because I never
    // really understood them until now.
    const correctLen = props.len >= 5;

    return (
        <div className="Len-check" textLength={props.len}>
            <p>{correctLen ? 'Text long enough': 'Text too short'}</p>
        </div>
    )
}

export default ValidationComponent;