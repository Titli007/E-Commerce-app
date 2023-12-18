import { createContext } from "react";

export const CartContext = createContext()

export const initialState = {
    price : 0,
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "set_price": {
            return {
                ...state,
                name: action.payload
            }
        }
        default : {
            return
        }
}
}