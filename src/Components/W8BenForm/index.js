import React from 'react';
import template from './w8ben.png'
import SignatureCanvas from 'react-signature-canvas'
import './style.css'

const FieldElement = ({ value, style }) => {
    return (
        <div style={{ ...FieldElement.defaultProps.style, ...style }}>
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
        verticalAlign: 'bottom',
        color: 'blue',
        // border: '1px solid grey'
    }
}

const W8BenForm = () => {
    return (
        <div>
            <img className='baseImg' alt='w8ben' src={template} />
            <FieldElement value='Moshe Davidovitch' style={{ top: '468px', left: '138px' }} />
            <FieldElement value='Israel' style={{ top: '468px', left: '865px' }} />
            <FieldElement value='Raul Velenberg 20, Ramat Ha-Hayal, Shuk Tzafon' style={{ top: '590px', left: '138px' }} />
            <FieldElement value='Tel Aviv' style={{ top: '638px', left: '138px' }} />
            <FieldElement value='Israel' style={{ top: '638px', left: '922px' }} />
            <FieldElement value='32165497' style={{ top: '786px', left: '138px' }} />
            <FieldElement value='32165497' style={{ top: '786px', left: '806px' }} />
            <FieldElement value='28/05/2017' style={{ top: '1490px', left: '806px' }} />
            <div style={{top:'1472px', position:'absolute', left: '234px'}}>
                <SignatureCanvas 
                    penColor='blue'
                    canvasProps={{width: 528, height: 42, className: 'sigCanvas'}} 
                    />
    </div>
        </div>
    );
};

export default W8BenForm;