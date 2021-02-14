
import 'materialize-css/dist/css/materialize.min.css'
import Tabela from './Tabela';
import { Component, Fragment } from 'react';
import Form from './Formulario';
import Header from './Header';

class App extends Component {

  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: 'R$1000,00',
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: 'R$100,00',
      },
      {
        nome: 'Ana',
        livro: 'Design',
        preco: 'R$3000,00',
      },
      {
        nome: 'Maria',
        livro: 'DevOps',
        preco: 'R$150,00',
      },
      {
        nome: 'Nico',
        livro: 'C#',
        preco: 'R$180,00',
      }
    ],
  };

  removeAutor = index =>{
    const { autores } = this.state;

    this.setState( 
        {
            autores : autores.filter((autor, posAtual) => {
                    return posAtual !== index;
            }),
        }
    );
  }

  escutadorDeSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor] })
  }

  render(){
    return (
      <Fragment>
        <Header/>
        <Tabela autores = { this.state.autores } removeAutor = { this.removeAutor }/>
        <Form escutadorDeSubmit={this.escutadorDeSubmit}/>
      </Fragment>
    );
  }
}

export default App;
