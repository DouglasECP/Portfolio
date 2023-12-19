import React,{Component} from "react";

import './stylePessoal.css'

class Pessoal extends Component{

    constructor(props){
        super(props);
        this.state = {
            curso:[
                {key:1,fundacao:'Sujeito Programador',curso:'Desenvolvimento mobile e sistema SaaS'},
                {key:2,fundacao:'Oracle',curso:'Java Fundations'},                
                {key:3,fundacao:'Data Scienceac Ademy',curso:'Big Data Fundamentos 3.0'},                
                {key:4,fundacao:'Lupa',curso:' Excel Avançado'},                
                {key:5,fundacao:'Data Scienceac Ademy',curso:' Power B.I e Data Science'},                
            ],
            superior:[
                {fundacao:'Unisociesc - Joinville Campus Anista Garibaldi', curso:'Bacharelado em Engenharia da Computação',foto:require('../../imagens/Unisociesc.png')}
            ],
            hobby:[
                {descricao:'Recentemente iniciei um novo hobby em pescaria de praia, vejo que é um ótimo esporte para sair da rotina e conhecer coisas novas e diferentes do dia a dia, pratico também hobbies diários que é caminhadas e corrida, planejo incluir em meu hobby diário a academia, podendo equilibrar todos os dias as minhas tarefas com meus hobbys.',foto:require('../../imagens/Pescaria.jpg')}
            ],
            projetos:[
                {key:1,titulo:'Sistema Digital - Ponte Rolante',acesso:'https://drive.google.com/drive/folders/14bH8BxP5FiFroKKidw5b4gCmgK-s3sBu?usp=sharing',foto:require('../../imagens/SistemaDigitalPonteRolante.png')},
                {key:2,titulo:'IOT - Monitoramento de Vulneraveis',acesso:'https://github.com/DouglasECP/TCC_Engenharia_da_Computacao',foto:require('../../imagens/IOT-MonitoramentoVulneraveis.png')},
                {key:3,titulo:'IOT - Lixeira Inteligênte',acesso:'https://1drv.ms/f/s!AmcH_ytcT0tKnrpPiF7jK7y794V8Zw?e=6bv3r6',foto:require('../../imagens/IOT-LixeiraInteligênte.png')},
                {key:4,titulo:'App Finanças Pessoais',acesso:'https://github.com/DouglasECP/App_Financas',foto:require('../../imagens/AppFinancas.png')}
            ]
        }
    }

    render(){
        return(
            <div className="containerPessoal">

                <div className="MenuPessoal">
                    <button 
                    className="btnMenu"
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
                    className="btnMenuAtivo"
                    name="pessoal"
                    onClick={this.navegar}
                    >
                    Trajetória Pessoal
                    </button>
                </div>
                <div className="linhaMenuPessoal"></div>

                <div className="areasuperior">
                    <div className="areaCurso">

                        <h1 className="tituloCurso">Cursos de Aperfeiçoamento</h1>

                        {this.state.curso.map((item)=>{
                            return(
                                <div key={item.id}>
                                    <h3 className="cursoFundacao">Fundação: {item.fundacao}</h3>
                                    <h3 className="cursoCurso">Curso: {item.curso}</h3>
                                </div>
                            )
                        })}

                    </div>

                    <div className="AreaSuperiorHobby">
                        <div>
                            <h1 className="tituloCurso">Ensino Superior</h1>
                            {this.state.superior.map((item)=>{
                                return(
                                    <div className="areaFoto">
                                        <img className="foto" src={item.foto}/>
                                        <div className="areatext">
                                            <h3 className="cursoFundacao">Fundação: {item.fundacao}</h3>
                                            <h3 className="cursoCurso">Curso: {item.curso}</h3>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>

                        <div className="AreaHobby">

                            <h1 className="tituloCurso">Hobby</h1>
                            {this.state.hobby.map((item)=>{
                                return(
                                    <div className="areaFoto">

                                        <img className="foto" src={item.foto}/>
    
                                        <div className="areatext2">
                                            <h3 className="cursoFundacao">{item.descricao}</h3>
                                        </div>
    
                                </div>
                                )
                            })}


                            
                        </div>
                    
                    </div>

                </div>

                <div>

                    <div className="ProjetosDesenvolvidos">
                        <h1 className="tituloCurso">Projetos Desenvolvidos</h1>
                    </div>

                    <div className="areaProjetos">
                        {this.state.projetos.map((item)=>{
                            return(
                                <div key={item.id} className="projeto">
                                    <h3 className="textProjeto">{item.titulo}</h3>
                                    <img src={item.foto} className="fotoProjeto"/>
                                    <button 
                                        className="textLink"
                                        onClick={()=> window.open(item.acesso)}
                                    >
                                        Link para mais detalhes
                                    </button>
                                </div>
                            )
                        })}
                    </div>

                </div>  


            </div>
        )
    }
}

export default Pessoal;