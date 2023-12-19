import React, {Component} from "react";

import './style.css'

class BemVindo extends Component{

  constructor(props){
    super(props);
    this.social={
      linkedin:'https://www.linkedin.com/in/douglas-madalena-b2ba741ba/',
      GitHub: 'https://github.com/DouglasECP',
      Instagran: 'https://www.instagram.com/douglaz_m/'
    }

    this.state={
      bemVindo:true,
      profissional:false,
      pessoal:false,
    }
    this.navegar = this.navegar.bind(this);
  }

  navegar(e){
    let copNavegacao = this.navegacao;

    copNavegacao = {bemVindo: false, profissional:false, pessoal:false}

    copNavegacao[e.target.name] = true;

    this.setState(copNavegacao);
    
  }

  render(){
    return(

      <div className="container">

        <div className="menuHeader">

          <button 
            className="btnMenuAtivo"
            name="bemVindo"
            onClick={this.navegar}
          >
            Bem-vindo
          </button>

          <button 
            className="btnMenu"
            name="profissional"
            onClick={this.navegar}
          >
            Trajetória Profissional
          </button>

          <button 
            className="btnMenu"
            name="pessoal"
            onClick={this.navegar}
          >
            Trajetória Pessoal
          </button>

        </div>
        <div className="linhaMenuBemVindo"></div>

        <div className="caixaTitulo">
          <h1 className="titulo1">Olá! Me chamo Douglas Madalena</h1>
          <h2 className="titulo2">e é um prazer te encontrar</h2>
          <h2 className="titulo3">em meu portfolio WEB</h2>
        </div>

        <div className="containerFoto">
         <img className="FotoPerfil" src={require('../../imagens/Perfil.jpg')}/>
        </div>

        <div className="containerSocial">

          <button 
            className="btnSocial" onClick={()=> window.open(this.social.Instagran)}>
            <img 
              className="imgSocial" 
              src={require('../../imagens/instagram.png')}
            />
          </button>

          <button className="btnSocial" onClick={()=> window.open(this.social.GitHub)}>
            <img 
              className="imgSocial" 
              src={require('../../imagens/github.png')}
            />
          </button>

          <button className="btnSocial" onClick={()=> window.open(this.social.linkedin)}>
            <img 
              className="imgSocial" 
              src={require('../../imagens/linkedin.png')}
              alt="LinkedIn"
            />
          </button>

        </div>

        <div>
          <h3 className="txt">
            Nesse portifólio você encontrará todos as informações referentes a minha pessoa, organizado <br/> conforme abaixo; <br/><br/>
            Bem-vindo: Tela atual, reservada para recepcionar os convidados. <br/>
            Trajetória Profissional: Reservado para descrever com detalhes a jornada e experiência profissional.<br/>
            Trajetória Pessoal: Reservado para apresentar com mais detalhes quem é o Douglas Madalena.
          </h3>
        </div>

      </div>
    )
  }
}

export default BemVindo;