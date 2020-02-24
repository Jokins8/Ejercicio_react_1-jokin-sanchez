import React from 'react';
import './App.css';
import Entrada from './Entrada/Entrada';
import Resultado from './Resultado/Resultado';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valorentrada:0,
      resultado: 0,
      boton: 37

    }
  }


  calculaResultado = (event) => {
    console.log(event.target.value)
    let total = event.target.value * this.state.boton;
    this.setState({
      resultado: total,
      valorentrada:event.target.value
    })
  }



  cambiaMultiplicacion = (numero) => {
   // let res = this.state.resultado;
   // let bot = this.state.boton;
    //res = res / bot;
    //res = res * numero;
    let res=this.state.valorentrada*numero;
    this.setState({
      boton: numero,
      resultado: res
    })
  }

  render() {
    return (
      <div >
        <p> Esta pulsado el X {this.state.boton}</p>
        <Entrada
          cambiando={this.calculaResultado}
        />

        <button onClick={() => this.cambiaMultiplicacion(37)} > X 37</button>
        <button onClick={() => this.cambiaMultiplicacion(43)}> X 43</button>

        <Resultado
          valor={this.state.resultado}
        />

      </div>
    );

  }
}

export default App;
