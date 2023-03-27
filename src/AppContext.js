import { useState, useEffect, useReducer, createContext, useContext } from 'react';
    
export const initialCartState = {
		count : 0,
		itemPrice : 150000,
		totalPrice : 0
	}

// export const cartReducer = (state, action) => {
//     //  const { count, totalPrice, itemPrice } = state;

// 		switch(action.type){
// 			case 'increment':
// 				return {
// 					...state,
// 					count : count + 1,
// 					totalPrice : count * itemPrice
// 				}
// 			case 'decrement':
// 				return {
// 					...state,
// 					count : count == 0 ? count : count - 1,
// 					totalPrice : count * itemPrice
// 				}
// 			default : 
// 				return state
// 		};
// 	};

export  const cartContext = createContext();

	// const CartProvider = ({ children }) => {
	//   const context = useContext(cartContext);
	//   return (
	//     <
	//   )
	// };



export const initialUserState = {
	name : '',
	university : '',
	phone : null,
	role : ''
}


export const userReducer = ( initialUserState, action ) => {
	switch (action.type) {
		case "UPDATE_NAME":
			return {
				...initialUserState,
				name : action.payload
			};
			break;
		case "UPDATE_UNIVERSITY":
			return {
				...initialUserState,
				university : action.payload
			};
			break;
		case "UPDATE_BANYAK":
			return {
				...initialUserState,
				phone : action.payload.phone,
				role : action.payload.role,
				isNewMember : action.payload.isNewMember,
				memberSince : action.payload.memberSince
			};
			break;
		default:
			return initialUserState;
			break;
	}
}

//creating context
const UserContext = createContext();
const UserDispatchContext = createContext()

//custom hooks
export const useUserContext = () => {
	const context = useContext(UserContext);
	return context
}
export const useDispatchContext = () => {
	const context = useContext(UserDispatchContext);
	return context
}

//creating providers
export const UserProvider = ({ children }) => {
	const [userState, dispatch] = useReducer(userReducer, initialUserState);

	return (
		<>
			<UserContext.Provider value={userState}>
				<UserDispatchContext.Provider value={dispatch}>
					{children}
				</UserDispatchContext.Provider>
			</UserContext.Provider>
		</>
	)
}