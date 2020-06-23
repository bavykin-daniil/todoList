export default function(state, action) {
    switch(action.type) {
        case 'ADD_TODO': 
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload,
                    status: false,
                    column: "todo"
                }
            ]

        case 'REMOVE_TODO':
            return state.filter(todoItem => todoItem.id !== action.payload)

        case 'TODO':
            return state.map(todoItem => {
                if (todoItem.id === action.payload) {
                todoItem.column = "todo"
            }
            return todoItem
        })

        case 'IN_PROGRESS':
            return state.map(todoItem => {
                if (todoItem.id === action.payload) {
                todoItem.column = "inProgress"
            }
            return todoItem
        })

        case 'CODED':
            return state.map(todoItem => {
                if (todoItem.id === action.payload) {
                todoItem.column = "coded"
            }
            return todoItem
        })

        default:
            return state
    }
}