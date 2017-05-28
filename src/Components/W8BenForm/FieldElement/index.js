import React from 'react';
import './style.css'

const FieldElement = ({ value, style, editMode }) => {
    return (
        <div style={{ ...FieldElement.defaultProps.style, ...style }}>
           {editMode? <input type='text' value={value} /> : <span>{value}</span> }
        </div>
    )
}

FieldElement.defaultProps = {
    style: {
        position: 'absolute',
        left: '0px',
        top: '0px',
        lineHeight: '28px',
        verticalAlign: 'bottom',
        color: 'blue',
        // border: '1px solid grey'
    }
}

export default FieldElement