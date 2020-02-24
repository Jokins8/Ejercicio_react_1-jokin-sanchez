import React from 'react';

class Entrada extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p >Hola</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.cambiando}  />
            </div >
        )
    }
};

export default Entrada;