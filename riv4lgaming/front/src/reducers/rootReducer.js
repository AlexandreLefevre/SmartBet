const initState = {
    user: {email: "",
           pseudo: "",            
    }
}

const rootReducer = (state= initState, action) => {
    console.log("ceci est action", action)
    if (action.type === "loginUser"){
        console.log("l'action.data", action.data)
        return {
            ...state,
            user: action.data,
        }
    }
    return state;
}

export default rootReducer;