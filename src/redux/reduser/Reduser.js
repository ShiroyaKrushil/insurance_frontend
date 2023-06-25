const reduser = (state = [], action) => {
    switch (action.type) {
        case 'GET_LEAD_LIST':
            return action.payload;
        case 'ADD_LEAD':
            return [...state, action.payload];
        case 'VIEW_LEAD':
            return action.payload;
        case 'LEAD_DELETE':
            return state.filter((item)=>item.id !== action.payload)
        default:
            return state;
    }
}

export default reduser;