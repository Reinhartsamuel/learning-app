import logo from './logo.svg';
import './App.css';
import { Box, Button, Center, Flex, FormControl, FormLabel, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react';
import { useState, useEffect, useReducer, createContext, useContext } from 'react';
import { useDispatchContext, UserProvider, useUserContext } from './AppContext';




function App() {
	//const [stateName, dispatch] = useReducer(reducerFunctionName, initialStateName);
	// const [cartState, dispatch] = useReducer(cartReducer, initialCartState);
	const dispatch  = useDispatchContext();
	const userState = useUserContext();
	

	useEffect(()=>{
		if (userState.isLoggedIn === true) {
			navigate('/dashboard')
		}
	},[])


	const checkValue = () => {
		console.log(userState);
	};

	const handleChange = (e)=> {
		dispatch({type : "UPDATE_NAME", payload : e.target.value})
	}

	return (
		<>
					{/* <Center>
							<Box height="20em" alignItems='center' justifyContent="center" display='flex' w='full' h='100vh'>
								<Box w="full" bg='teal.200' position='absolute' height='4em' top={0}>
									<Text fontWeight={700}>Cart:{cartState.count}</Text>
									<Text fontWeight={700} color='gray.600'>Total Cart Price:{cartState.totalPrice}</Text>
								</Box>
								<Box bg="red.100" p={5} alignItems='center' justifyContent="center" display='flex'>
									<VStack>
											<Heading>Reducer Cart</Heading>
											<Text fontWeight='600'>Product price = IDR250,000</Text>
											<HStack>
													<Button p={2} onClick={()=>dispatch({ type : 'decrement' })}>-</Button>
													<Text fontWeight={700}>{cartState.count}</Text>
													<Button p={2} onClick={()=>dispatch({ type : 'increment' })}>+</Button>
											</HStack>
									</VStack>
								</Box>
							</Box>
					</Center> */}
					<Box padding={10} bg='green.200' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
						<form style={{width : '60%'}}>
							<FormControl >
								<FormLabel>Name</FormLabel>
								<Input onChange={handleChange} id='name' bg='white' placeholder='name' />
							</FormControl>
							<FormControl >
								<FormLabel>University</FormLabel>
								<Input onChange={handleChange} id='university' bg='white' placeholder='university' />
							</FormControl>
							<FormControl>
								<FormLabel>phone</FormLabel>
								<Input onChange={e => console.log(e.target.value, e.target.id)} id='phone' bg='white' placeholder='phone' type='number' />
							</FormControl>
							<FormControl>
								<FormLabel>role</FormLabel>
								<Input onChange={e => console.log(e.target.value, e.target.id)} id='role' bg='white' placeholder='role' />
							</FormControl>
							<Button onClick={()=>checkValue()} m={10}>Submit</Button>
						</form>
					</Box>
		</>
	);
}

export default App;
