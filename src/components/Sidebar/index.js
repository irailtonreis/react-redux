import React, { Component } from 'react';

class Sidebar extends Component {
    state = {
        modules: [
            {
                id: 1, 
                title: "Iniciando com React",
                lession: [
                    {
                        id:1, title: "Primeira Aula"
                    },
                    {
                        id:2, title: "Segunda Aula"
                    }
                ]

            },
            {
                id: 1, 
                title: "Aprendendo redux",
                lession: [
                    {
                        id:1, title: "Terceira Aula"
                    },
                    {
                        id:2, title: "Quarta Aula"
                    }
                ]

            },

        ]
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default index;