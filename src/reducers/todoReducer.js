export default function(state, action) {
    switch(action.type) {
        case 'ADD_TODO': 
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload,
                    status: false
                }
            ]

        case 'REMOVE_TODO':
            return state.filter(todoItem => todoItem.id !== action.payload)

        default:
            return state
    }
}