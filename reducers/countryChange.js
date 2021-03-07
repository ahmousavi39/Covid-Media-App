const countryReducer = (state= "", action) => {
    switch(action.type){
        case 'CHANGE':
            return action.country
        default:
            return state
    }
}
export default countryReducer;