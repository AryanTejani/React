export const initialVal = {count:0}

export const reducer = (state,action)=>{
    switch (action.type) {
        case 'increament':
            return {...state,count:state.count+action.payload}
            break;
        case 'decreament':
            return {...state,count:state.count-action.payload}
            break;
        default:
            break;
    }
}