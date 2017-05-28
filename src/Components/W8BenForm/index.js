import React, { Component } from 'react';
import template from './w8ben.png'
import SignatureCanvas from 'react-signature-canvas'
import FieldElement from './FieldElement'
import './style.css'

class W8BenForm extends Component {
    constructor(props) {
        super(props)
        this.state = { editMode: false }
    }

    toggle = () => {
        this.setState({ editMode: !this.state.editMode })
    }

    render() {
        return (
            <div>
                <button onClick={this.toggle}>Toggle</button>
                <div style={{ position: 'relative' }}>
                    <img className='baseImg' alt='w8ben' src={template} />
                    <FieldElement editMode={this.state.editMode} value='Moshe Davidovitch' style={{ top: '468px', left: '138px' }} />
                    <FieldElement editMode={this.state.editMode} value='Israel' style={{ top: '468px', left: '865px' }} />
                    <FieldElement editMode={this.state.editMode} value='Raul Velenberg 20, Ramat Ha-Hayal, Shuk Tzafon' style={{ top: '590px', left: '138px' }} />
                    <FieldElement editMode={this.state.editMode} value='Tel Aviv' style={{ top: '638px', left: '138px' }} />
                    <FieldElement editMode={this.state.editMode} value='Israel' style={{ top: '638px', left: '922px' }} />
                    <FieldElement editMode={this.state.editMode} value='32165497' style={{ top: '786px', left: '138px' }} />
                    <FieldElement editMode={this.state.editMode} value='32165497' style={{ top: '786px', left: '806px' }} />
                    <FieldElement editMode={this.state.editMode} value='28/05/2017' style={{ top: '1490px', left: '806px' }} />
                    <div style={{ top: '1472px', position: 'absolute', left: '234px' }}>
                        <SignatureCanvas
                            penColor='blue'
                            canvasProps={{ width: 528, height: 42, className: 'sigCanvas' }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default W8BenForm;