import React, {Component} from "react";

import './styleProfissional.css'

class Profissional extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed: [
                {id:1, nome: 'Lojas Miliun - 7 Anos', descricao: 'Iniciei minha experiência profissional no Centro de Distribuição como beneficiário do programa Jovem Aprendiz, onde completei meu primeiro ano de empresa. Pouco tempo depois fui efetivado como colaborador efetivo, iniciando na função de Separador de Mercadorias. Seguindo para a próxima função de conferente de logística atuando no processo de expedição de produtos para entrega, sendo responsável por todo o fluxo administrativo e operacional. Seguindo para a próxima função de assistente de assistência técnica, sendo responsável por toda a parte administrativa do setor de assistência técnica (Assistência para as marcas Powner e NewPro) e também prestando suporte técnico conforme demanda de produtos. Seguindo para a próxima função de Analista de Logística, atuando no setor de logística reversa, solucionando não conformidades de produtos diretamente com os fornecedores e compradores da empresa Lojas Milium. Seguindo para a função de Analista de Compras, trabalhando diretamente com desenvolvimento de fornecedores, gestão de contratos comerciais e análise de dados.', foto: require('../../imagens/Milium.png')},
                {id:2, nome: 'A1 Hub - 4 Meses', descricao: 'Trabalho desenvolvido no formato de estágio, atuando em desenvolvimento de projetos voltados ao setor de loteamentos e imobiliários, desenvolvendo novas formas de automatizar, melhorar a mobilidade urbana e a segurança em loteamentos. Empresa A1 Hub é uma Startup fundada pela empresa ABecker e Unisociesc, onde atuam somente os professores da Unisociesc e estagiários.', foto: require('../../imagens/A1HUB.png')},
                {id:3, nome: 'Smart Business - 6 Meses', descricao: 'Atuei na empresa na função de Analista de Sistemas, trabalhando diretamente com a equipe de desenvolvedores com o objetivo de aprimoramento em UX e UX do sistema, correção de bugs, auditoria de regras e desenvolvendo KPI analíticos referente ao desenvolvimento dos clientes. Hoje presto serviços a empresa de forma autônoma e conforme as demandas internas.', foto: require('../../imagens/SmartBusiness.jpg')}
            ]
        }
    }

render(){
    return(
        <div className="containerProfissional">

            <div>

                <div className="MenuProfissional">
                    <button 
                    className="btnMenu"
                    name="bemVindo"
                    onClick={this.navegar}
                    >
                    Bem-vindo
                    </button>

                    <button 
                    className="btnMenuAtivo"
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
                

                <div className="linhaMenuProfissional"></div>

                <div className="containerFeedProfissioanal">
                    {this.state.feed.map((item)=> {
                        return(
                            <div key={item.id}>
                                <h1 className="textTitulo">{item.nome}</h1>
                                <div className="areaDescricao">
                                    <h3 className="textDescricao">{item.descricao}</h3>
                                </div>

                                <img className="FotoProfissional" src={item.foto} />
                                
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
    )
}
}

export default Profissional;