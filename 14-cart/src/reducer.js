export default (state, action) => {
    switch (action.type) {
        case "FETCH_DATA":
            return {
                ...state,
                loading: false,
                cart: action.payload
            }
        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        // case "INCREASE":
        //     const tempCart = state.cart.map(item => {
        //         if (item.id === action.payload) {
        //            return {...item, amount: item.amount++}
        //         }
        //         return item;
        //     })
        //     return {
        //         ...state,
        //         cart: tempCart
        //     }
        // case "DECREASE":
        //     const tempCartDe = state.cart.map(item => {
        //         if (item.id === action.payload) {
        //             item.amount--
        //         }
        //         return item;
        //     }).filter(item => item.amount > 0)
        //     return {
        //         ...state,
        //         cart: tempCartDe
        //     }
        case "TOGGLE_AMOUNT":
            const tempCart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    if (action.payload.type === 'inc') {
                        return {...item, amount: item.amount++}
                    } else {
                        return {...item, amount: item.amount--}
                    }
                }
                return item;
            }).filter(item => item.amount !== 0)

            return {
                ...state,
                cart: tempCart
            }
        case "GET_ALL":
            let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, amount } = cartItem;
                const itemTotal = price * amount;
                cartTotal.total+=itemTotal;
                cartTotal.amount+=amount;
                return cartTotal
            }, {total: 0, amount: 0})

            total = parseFloat(total.toFixed(2))

            return{...state, total, amount}
        default:
            return state;
    }

}

