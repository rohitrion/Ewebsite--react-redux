const INIt_STATE = {

    carts: []
}


export const cartreducer = (state = INIt_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":

            const itemIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if (itemIndex >= 0) {
                state.carts[itemIndex].qnty += 1
            } else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }

            }





            case "RMV_CART":
                const data = state.carts.filter((el)=>el.id !== action.payload); 
                // console.log(data);
    
                return {
                    ...state,
                    carts:data
                }
    
            case "RMV_ONE":
                const IteamIndex_dec = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);
       
                if(state.carts[IteamIndex_dec].qnty >= 1){
                    const dltiteams = state.carts[IteamIndex_dec].qnty -= 1
                    console.log([...state.carts,dltiteams]);
    
                    return {
                        ...state,
                        carts:[...state.carts]
                    }
                }else if(state.carts[IteamIndex_dec].qnty === 1 ){
                    const data = state.carts.filter((el)=>el.id !== action.payload);
    
                    return {
                        ...state,
                        carts:data
                    }
                }

        default:
            return state
    }
} 