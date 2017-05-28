import React from 'react';
import template from '../../Templates/w8ben.png'
import './style.css'

const FieldElement = ({value, style}) => {
    console.log(style)
console.log(FieldElement.defaultProps)
    return (
        <div style={style}>
            {value}
        </div>
    )
}

FieldElement.defaultProps = {
    style: {
        position: 'absolute',
        left: '0px',
        top: '0px',
        lineHeight: '28px',
        verticalAlign: 'bottom'
    }
}

const W8BenForm = () => {
    const nameStyle = {
        style: {
            top: '138px'
        }
    }
    return (
        <div>
            <img className='baseImg' alt='w8ben' src={template}/>
            < FieldElement value='Nir Weber' />
        </div>
    );
};

export default W8BenForm;