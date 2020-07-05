export default function(state, action) {
    switch(action.type) {
        case 'ADD_TODO': 
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload,
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

        case 'EDIT_TODO':
            return state.map(todoItem => {
                if (todoItem.id === action.key) {
                    todoItem.title = action.text
                }
                return todoItem
            })

        default:
            return state
    }
}