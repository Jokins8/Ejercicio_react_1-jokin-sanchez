import React from 'react';

class Resultado extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p >El resultado es {this.props.valor}</p>
                
                
            </div >
        )
    }
};

export default Resultado;