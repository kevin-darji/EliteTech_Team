import {
	Box,
	Button,
	Flex,
	HStack,
	Image,
	SimpleGrid,
	Text,
	VStack,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Typed from 'react-typed';
import Navbar from '../../Components/Navbar/Navbar';
import './styles.module.css';
import thaiImage from '../../images/thai.jpg';

const Main = () => {
	const navigate = useNavigate();
	const textLines = ['MORE CHEESEE!!', 'MORE TOPPINGS!!', 'MORE FUNNN!!'];

	const userstate = useSelector((state) => state.setUserData);
	const user = userstate.userData;

	// Handle the navigation for the "Order Now" button
	const handleOrderNowClick = () => {
		// Try to get the user from Redux first
		if (user && user.role === 'user') {
			// Redirect to the home page if logged in
			navigate('/home');
		} else {
			// Check if the user is in localStorage (you may need to adjust this based on your setup)
			const storedUserToken = localStorage.getItem('token');
			if (storedUserToken) {
				// If user token exists, navigate to home page
				navigate('/home');
			} else {
				// Redirect to login page if not logged in
				navigate('/login');
			}
		}
	};
	return (
		<>
			<Navbar />
			<Flex width='100%'>
				<VStack width='100%'>
					<HStack width='100%' backgroundColor='black'>
						<VStack width='100%' justifyContent='center'>
							<Text
								paddingBottom='20px'
								fontSize='3xl'
								color='white'
							>
								PIZZA PARADISE brings
							</Text>
							<Text
								textAlign='center'
								fontSize='3xl'
								color='white'
								width='100%'
							>
								Delicious and Hot Pizzas Just for You.
							</Text>
							<div
								style={{
									fontSize: '60px',
									fontFamily: 'Roboto Mono',
									color: 'white',
									padding: '10px',
								}}
							>
								<Typed
									strings={textLines}
									typeSpeed={80}
									loop
								/>
							</div>

							<Link
								to={
									user && user?.role === 'user'
										? '/home'
										: '/login'
								}
							>
								<Button
									margin={3}
									backgroundColor='#b33030'
									color='white'
									width='300px'
									_hover={{ bg: '#FF8080' }}
									onClick={handleOrderNowClick}
								>
									ORDER NOW
								</Button>
							</Link>
						</VStack>

						<Image
							width='100%'
							src='https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg'
						/>
					</HStack>
					<HStack
						margin={0}
						width='100%'
						backgroundColor='#dee2e6'
						textAlign='center'
					>
						<img src={thaiImage} alt="Thai Image" width="600" height="400" />

						<Text
							fontSize='3xl'
							width='100%'
							textAlign='center'
							fontWeight='semibold'
						>
							You can also make your own pizza! Tell us what you
							want and we will make it for you ! Your choice of
							base, toppings, cheese and much more things.
						</Text>
					</HStack>
					<VStack
						width='100%'
						backgroundColor='#b33030'
						padding='30px'
					>
						<Text
							fontSize='3xl'
							fontWeight='bold'
							color='white'
							padding='20px'
						>
							OUR TOP PRIORITIES
						</Text>
						<SimpleGrid columns={3} spacing={10}>
							<Box
								bg='white'
								height='80px'
								width='300px'
								padding='13px'
								borderWidth='3px'
								borderColor='black'
								borderRadius='25px'
							>
								<HStack>
									<Image
										marginRight='20px'
										alignItems='flex-end'
										borderRadius='0px'
										width='50px'
										src='https://cdn-icons-png.flaticon.com/512/3035/3035083.png'
									/>
									<Text
										textAlign='center'
										fontWeight='semibold'
										fontSize='2xl'
									>
										100% Hygiene
									</Text>
								</HStack>
							</Box>
							<Box
								bg='white'
								height='80px'
								width='300px'
								padding='13px'
								borderWidth='3px'
								borderColor='black'
								borderRadius='25px'
							>
								<HStack>
									<Image
										marginRight='20px'
										alignItems='flex-end'
										borderRadius='0px'
										width='50px'
										src='https://cdn2.iconfinder.com/data/icons/food-delivery-wildberry-vol-1/256/Fresh_Produce-512.png'
									/>
									<Text
										textAlign='center'
										fontWeight='semibold'
										fontSize='2xl'
									>
										Fresh Vegetables
									</Text>
								</HStack>
							</Box>

							<Box
								bg='white'
								height='80px'
								width='300px'
								padding='13px'
								borderWidth='3px'
								borderColor='black'
								borderRadius='25px'
							>
								<HStack>
									<Image
										marginRight='20px'
										alignItems='flex-end'
										borderRadius='0px'
										width='50px'
										src='https://icons.veryicon.com/png/o/food--drinks/fresh-1/meat-4.png'
									/>
									<Text
										textAlign='center'
										fontWeight='semibold'
										fontSize='2xl'
									>
										Fresh meat
									</Text>
								</HStack>
							</Box>
							<Box
								bg='white'
								height='80px'
								width='300px'
								padding='13px'
								borderWidth='3px'
								borderColor='black'
								borderRadius='25px'
							>
								<HStack>
									<Image
										marginRight='20px'
										alignItems='flex-end'
										borderRadius='0px'
										width='50px'
										src='https://cdn-icons-png.flaticon.com/512/3063/3063822.png'
									/>
									<Text
										textAlign='center'
										fontWeight='semibold'
										fontSize='2xl'
									>
										Fast Delivery
									</Text>
								</HStack>
							</Box>
							<Box
								bg='white'
								height='80px'
								width='300px'
								padding='13px'
								borderWidth='3px'
								borderColor='black'
								borderRadius='25px'
							>
								<HStack>
									<Image
										marginRight='20px'
										alignItems='flex-end'
										borderRadius='0px'
										width='50px'
										src='https://cdn-icons-png.flaticon.com/128/1684/1684426.png'
									/>
									<Text
										textAlign='center'
										fontWeight='semibold'
										fontSize='2xl'
									>
										Hot served
									</Text>
								</HStack>
							</Box>
							<Box
								bg='white'
								height='80px'
								width='300px'
								padding='13px'
								borderWidth='3px'
								borderColor='black'
								borderRadius='25px'
							>
								<HStack>
									<Image
										marginRight='20px'
										alignItems='flex-end'
										borderRadius='0px'
										width='50px'
										src='https://cdn-icons-png.flaticon.com/512/2651/2651001.png'
									/>
									<Text
										textAlign='center'
										fontWeight='semibold'
										fontSize='2xl'
									>
										Your Happiness
									</Text>
								</HStack>
							</Box>
						</SimpleGrid>
					</VStack>
					<VStack backgroundColor='#dee2e6' width='100%'>
						<Text>@Copyright2022</Text>
					</VStack>
				</VStack>
			</Flex>
		</>

		// <Flex width='100%'>
		// 	<VStack width='100%'>
		// 		<HStack width='100%'>
		// 			<nav className={styles.navbar}>
		// 				<h1 style={{ color: 'black' }}>SAY CHEESE!</h1>
		// 				<div>
		// 					{user ? (
		// 						<button
		// 							className={styles.white_btn}
		// 							onClick={handleLogout}
		// 						>
		// 							Logout
		// 						</button>
		// 					) : (
		// 						<button
		// 							className={styles.white_btn}
		// 							onClick={() => {
		// 								navigate('/login');
		// 							}}
		// 						>
		// 							Login
		// 						</button>
		// 					)}
		// 				</div>
		// 			</nav>
		// 		</HStack>
		// 	</VStack>
		// </Flex>
	);
};

export default Main;
