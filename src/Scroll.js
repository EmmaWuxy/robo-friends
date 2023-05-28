import React from "react";

const Scroll = (props) => {
    return (
        <div style={{ overflowY:'scroll', border: '1px solid black',  height: '800px'}}> // double curly braces means css style within JSX
            {props.children}
        </div>
    );
}

export default  Scroll;