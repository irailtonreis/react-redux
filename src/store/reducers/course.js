

const INICIAL_STATE = {
    activeLesson: {}, 
    activeModule: {},
    modules: [
        {
            id: 1, 
            title: "Iniciando com React",
            lessions: [
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
            lessions: [
                {
                    id:1, title: "Terceira Aula"
                },
                {
                    id:2, title: "Quarta Aula"
                }
            ]

        }
    ]
}
export default function course(state = INICIAL_STATE, action){
    if(action.type === 'TOGGLE_LESSON'){
        return {...state, activeLesson: action.lesson, activeModule: action.module}

    }
    return state;
}