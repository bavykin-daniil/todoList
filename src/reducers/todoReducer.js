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

        default:
            return state
    }
}