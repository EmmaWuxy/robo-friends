import React from "react";

const Scroll = (props) => {
    // double curly braces means css style within JSX
    return (
        <div style={{ overflowY:'scroll', border: '1px solid black',  height: '800px'}}> 
            {props.children}
        </div>
    );
}

export default  Scroll;