import {Box,Button,CircularProgress,CircularProgressLabel,Flex,Grid,Icon,Progress,SimpleGrid,Spacer,Stack,Stat,StatHelpText,StatLabel,
	StatNumber,Table,Tbody,Text,Th,Thead,Tr} from '@chakra-ui/react';
// Styles for the circular progressbar
import medusa from 'assets/img/cardimgfree.png';
// Custom components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import BarChart from 'components/Charts/BarChart';
import PieChart from 'components/Charts/PieChart';
import LineChart from 'components/Charts/LineChart';
import IconBox from 'components/Icons/IconBox';
// Icons
import { CartIcon, DocumentIcon, GlobeIcon, RocketIcon, StatsIcon, WalletIcon } from 'components/Icons/Icons.js';
import DashboardTableRow from 'components/Tables/DashboardTableRow';
import TimelineRow from 'components/Tables/TimelineRow';
import React, { useEffect } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BiHappy } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { IoCheckmarkDoneCircleSharp, IoEllipsisHorizontal } from 'react-icons/io5';

import {
	barChartDataDashboard,
	barChartOptionsDashboard,
	lineChartDataDashboard,
	lineChartOptionsDashboard2,
	lineChartDataDashboard2,
	barChartDataDashboard2,
	lineChartOptionsDashboard,
	transactionsTypeOptionsDashboard,
	transactionsTypeDataDashboard,
	pieChartDashboard
} from 'variables/charts';

import DashboardData from 'variables/DashboardData.js';


import { dashboardTableData, timelineData } from 'variables/general';

import { useAuthContext } from "hooks/useAuthContext";
import { useState } from 'react';




export default function Dashboard() {

	const { user } = useAuthContext();
	const [transactions, setTransactions] = useState([]);
	const [nfts, setNfts] = useState([]);
	const [collections, setCollections] = useState([]);


	useEffect( () => {
    
		const fetchTransactions = async () => {
	
		  try {
			const response = await fetch('http://localhost:8800/api/transaction/all', {
			  "headers" : { Authorization: `Bearer ${user.token}` } 
			});
			const json = await response.json();
	
			console.log("data..." ,json);
	
			setTransactions(json.data);
	
		  } catch (error) {
			console.error("Error in fetching data ",error);
		  }
		}

		const fetchNfts = async () => {
	
			try {
			  const response = await fetch('http://localhost:8800/api/nft/all', {
				"headers" : { Authorization: `Bearer ${user.token}` } 
			  });
			  const json = await response.json();
	  
			  console.log("nfts..." ,json);
	  
			  setNfts(json.data);
	  
			} catch (error) {
			  console.error("Error in fetching data ",error);
			}
		}

		const fetchCollections = async () => {
	
			try {
			  const response = await fetch('http://localhost:8800/api/collection/all', {
				"headers" : { Authorization: `Bearer ${user.token}` } 
			  });
			  const json = await response.json();
	  
			  console.log("collections..." ,json);
	  
			  setCollections(json.data);
	  
			} catch (error) {
			  console.error("Error in fetching data ",error);
			}
		}
	
		if(user){
			fetchTransactions();
			fetchNfts();
			fetchCollections();
		}
	
	
	  }, [user]);

	
	const transactionsTypeData = () => {

		const typeCounts = {};

		for (const transaction of transactions) {
			
			const { Type } = transaction;

			if (typeCounts[Type])
				typeCounts[Type]++;
			else 
				typeCounts[Type] = 1;
			
		}

		const Types = Object.keys(typeCounts);
		const counts = Object.values(typeCounts);


		var typeOptions = barChartOptionsDashboard;
		var typeData = barChartDataDashboard;

		typeOptions.xaxis.categories = Types;
		typeData[0].data = counts;

		return {typeOptions, typeData};

	}

	const collectionData = () => {

		const dict = {};

		for (const nft of nfts) {
			
			const { CollectionId , NoOfTransactions} = nft;

			if (dict[CollectionId])
				dict[CollectionId] += NoOfTransactions;
			else 
				dict[CollectionId] = NoOfTransactions;
			
		}

		const Cid = Object.keys(dict);
		const n = Object.values(dict);

		return {Cid, n};

	}

	const {typeOptions, typeData} = transactionsTypeData();
	const cdata = collectionData();
	console.log(cdata);

	return (

		<Flex flexDirection='column' pt={{ base: '120px', md: '75px' }}>

			<SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>


				{/* MiniStatistics Card */}
				<Card>
					<CardBody>
						<Flex flexDirection='row' align='center' justify='center' w='100%'>
							<Stat me='auto'>
								<StatLabel fontSize='sm' color='gray.400' fontWeight='bold' pb='2px'>
									Market Capitalization
								</StatLabel>
								<Flex>
									<StatNumber fontSize='lg' color='#fff'>
										$53,000
									</StatNumber>
									<StatHelpText
										alignSelf='flex-end'
										justifySelf='flex-end'
										m='0px'
										color='green.400'
										fontWeight='bold'
										ps='3px'
										fontSize='md'>
										+55%
									</StatHelpText>
								</Flex>
							</Stat>
							<IconBox as='box' h={'45px'} w={'45px'} bg='brand.200'>
								<WalletIcon h={'24px'} w={'24px'} color='#fff' />
							</IconBox>
						</Flex>
					</CardBody>
				</Card>

				{/* MiniStatistics Card */}
				<Card minH='83px'>
					<CardBody>
						<Flex flexDirection='row' align='center' justify='center' w='100%'>
							<Stat me='auto'>
								<StatLabel fontSize='sm' color='gray.400' fontWeight='bold' pb='2px'>
									Total NFT Investors
								</StatLabel>
								<Flex>
									<StatNumber fontSize='lg' color='#fff'>
										2,300
									</StatNumber>
									<StatHelpText
										alignSelf='flex-end'
										justifySelf='flex-end'
										m='0px'
										color='green.400'
										fontWeight='bold'
										ps='3px'
										fontSize='md'>
										+5%
									</StatHelpText>
								</Flex>
							</Stat>
							<IconBox as='box' h={'45px'} w={'45px'} bg='brand.200'>
								<GlobeIcon h={'24px'} w={'24px'} color='#fff' />
							</IconBox>
						</Flex>
					</CardBody>
				</Card>

				{/* MiniStatistics Card */}
				<Card>
					<CardBody>
						<Flex flexDirection='row' align='center' justify='center' w='100%'>
							<Stat>
								<StatLabel fontSize='sm' color='gray.400' fontWeight='bold' pb='2px'>
									New Investors
								</StatLabel>
								<Flex>
									<StatNumber fontSize='lg' color='#fff'>
										+3,020
									</StatNumber>
									<StatHelpText
										alignSelf='flex-end'
										justifySelf='flex-end'
										m='0px'
										color='red.500'
										fontWeight='bold'
										ps='3px'
										fontSize='md'>
										-14%
									</StatHelpText>
								</Flex>
							</Stat>
							<Spacer />
							<IconBox as='box' h={'45px'} w={'45px'} bg='brand.200'>
								<DocumentIcon h={'24px'} w={'24px'} color='#fff' />
							</IconBox>
						</Flex>
					</CardBody>
				</Card>

				{/* MiniStatistics Card */}
				<Card>
					<CardBody>
						<Flex flexDirection='row' align='center' justify='center' w='100%'>
							<Stat me='auto'>
								<StatLabel fontSize='sm' color='gray.400' fontWeight='bold' pb='2px'>
									Total Transactions
								</StatLabel>
								<Flex>
									<StatNumber fontSize='lg' color='#fff' fontWeight='bold'>
										$173,000
									</StatNumber>
									<StatHelpText
										alignSelf='flex-end'
										justifySelf='flex-end'
										m='0px'
										color='green.400'
										fontWeight='bold'
										ps='3px'
										fontSize='md'>
										+8%
									</StatHelpText>
								</Flex>
							</Stat>
							<IconBox as='box' h={'45px'} w={'45px'} bg='brand.200'>
								<CartIcon h={'24px'} w={'24px'} color='#fff' />
							</IconBox>
						</Flex>
					</CardBody>
				</Card>

			</SimpleGrid>

			<Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', '2xl': '2fr 1.2fr 1.5fr' }} my='26px' gap='18px'>
				{/* Welcome Card */}
				<Card
					p='0px'
					gridArea={{ md: '1 / 1 / 2 / 3', '2xl': 'auto' }}
					bgImage={medusa}
					bgSize='cover'
					bgPosition='50%'>
					<CardBody w='100%' h='100%'>
						<Flex flexDirection={{ sm: 'column', lg: 'row' }} w='100%' h='100%'>
							<Flex flexDirection='column' h='100%' p='22px' minW='60%' lineHeight='1.6'>
								<Text fontSize='sm' color='gray.400' fontWeight='bold'>
									Welcome back,
								</Text>
								<Text fontSize='28px' color='#fff' fontWeight='bold' mb='18px'>
									{user ? user.username: "User"}
								</Text>
								<Text fontSize='md' color='gray.400' fontWeight='normal' mb='auto'>
									Glad to see you again! <br />
									
								</Text>
								{/* <Spacer />
								<Flex align='center'>
									<Button
										p='0px'
										variant='no-hover'
										bg='transparent'
										my={{ sm: '1.5rem', lg: '0px' }}>
										<Text
											fontSize='sm'
											color='#fff'
											fontWeight='bold'
											cursor='pointer'
											transition='all .3s ease'
											my={{ sm: '1.5rem', lg: '0px' }}
											_hover={{ me: '4px' }}>
											Explore NFTs
										</Text>
										<Icon
											as={BsArrowRight}
											w='20px'
											h='20px'
											color='#fff'
											fontSize='2xl'
											transition='all .3s ease'
											mx='.3rem'
											cursor='pointer'
											pt='4px'
											_hover={{ transform: 'translateX(20%)' }}
										/>
									</Button>
								</Flex> */}
							</Flex>
						</Flex>
					</CardBody>
				</Card>
				{/* Satisfaction Rate */}
				{/* <Card gridArea={{ md: '2 / 1 / 3 / 2', '2xl': 'auto' }}>
					<CardHeader mb='24px'>
						<Flex direction='column'>
							<Text color='#fff' fontSize='lg' fontWeight='bold' mb='4px'>
								Stability Rate
							</Text>
							<Text color='gray.400' fontSize='sm'>
								From all invested NFTs
							</Text>
						</Flex>
					</CardHeader>
					<Flex direction='column' justify='center' align='center'>
						<Box zIndex='-1'>
							<CircularProgress
								size={200}
								value={80}
								thickness={6}
								color='#582CFF'
								variant='vision'
								rounded>
								<CircularProgressLabel>
									<IconBox mb='20px' mx='auto' bg='brand.200' borderRadius='50%' w='48px' h='48px'>
										<Icon as={BiHappy} color='#fff' w='30px' h='30px' />
									</IconBox>
								</CircularProgressLabel>
							</CircularProgress>
						</Box>
						<Stack
							direction='row'
							spacing={{ sm: '42px', md: '68px' }}
							justify='center'
							maxW={{ sm: '270px', md: '300px', lg: '100%' }}
							mx={{ sm: 'auto', md: '0px' }}
							p='18px 22px'
							bg='linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgba(10, 14, 35) 91.2%)'
							borderRadius='20px'
							position='absolute'
							bottom='5%'>
							<Text fontSize='xs' color='gray.400'>
								0%
							</Text>
							<Flex direction='column' align='center' minW='80px'>
								<Text color='#fff' fontSize='28px' fontWeight='bold'>
									95%
								</Text>
								<Text fontSize='xs' color='gray.400'>
									Based on latest transactions
								</Text>
							</Flex>
							<Text fontSize='xs' color='gray.400'>
								100%
							</Text>
						</Stack>
					</Flex>
				</Card>
				
				<Card gridArea={{ md: '2 / 2 / 3 / 3', '2xl': 'auto' }}>
					<Flex direction='column'>
						<Flex justify='space-between' align='center' mb='40px'>
							<Text color='#fff' fontSize='lg' fontWeight='bold'>
								Community Tracking
							</Text>
							<Button borderRadius='12px' w='38px' h='38px' bg='#22234B' _hover='none' _active='none'>
								<Icon as={IoEllipsisHorizontal} color='#7551FF' />
							</Button>
						</Flex>
						<Flex direction={{ sm: 'column', md: 'row' }}>
							<Flex direction='column' me={{ md: '6px', lg: '52px' }} mb={{ sm: '16px', md: '0px' }}>
								<Flex
									direction='column'
									p='22px'
									pe={{ sm: '22e', md: '8px', lg: '22px' }}
									minW={{ sm: '220px', md: '140px', lg: '220px' }}
									bg='linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)'
									borderRadius='20px'
									mb='20px'>
									<Text color='gray.400' fontSize='sm' mb='4px'>
										Membership in
									</Text>
									<Text color='#fff' fontSize='lg' fontWeight='bold'>
										145 communities
									</Text>
								</Flex>
								<Flex
									direction='column'
									p='22px'
									pe={{ sm: '22px', md: '8px', lg: '22px' }}
									minW={{ sm: '170px', md: '140px', lg: '170px' }}
									bg='linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)'
									borderRadius='20px'>
									<Text color='gray.400' fontSize='sm' mb='4px'>
										Links
									</Text>
									<Text color='#fff' fontSize='lg' fontWeight='bold'>
										1,465
									</Text>
								</Flex>
							</Flex>
							<Box mx={{ sm: 'auto', md: '0px' }}>
								<CircularProgress
									size={window.innerWidth >= 1024 ? 200 : window.innerWidth >= 768 ? 170 : 200}
									value={70}
									thickness={6}
									color='#05CD99'
									variant='vision'>
									<CircularProgressLabel>
										<Flex direction='column' justify='center' align='center'>
											<Text color='gray.400' fontSize='sm'>
												Safety
											</Text>
											<Text
												color='#fff'
												fontSize={{ md: '36px', lg: '50px' }}
												fontWeight='bold'
												mb='4px'>
												9.3
											</Text>
											<Text color='gray.400' fontSize='sm'>
												Total Score
											</Text>
										</Flex>
									</CircularProgressLabel>
								</CircularProgress>
							</Box>
						</Flex>
					</Flex>
				</Card> */}
			</Grid>

			<Grid
				templateColumns={{ sm: '1fr', lg: '1.7fr 1.3fr' }}
				maxW={{ sm: '100%', md: '100%' }}
				gap='24px'
				mb='24px'>
				{/* Sales Overview */}
				<Card p='28px 0px 0px 0px'>
					<CardHeader mb='20px' ps='22px'>
						<Flex direction='column' alignSelf='flex-start'>
							<Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
								Comparison
							</Text>
							<Text fontSize='md' fontWeight='medium' color='gray.400'>
								<Text as='span' color='green.400' fontWeight='bold'>
									(+5%) more
								</Text>{' '}
								in 2022
							</Text>
						</Flex>
					</CardHeader>
					<Box w='100%' minH={{ sm: '300px' }}>
						<LineChart
							lineChartData={lineChartDataDashboard}
							lineChartOptions={lineChartOptionsDashboard}
						/>
					</Box>
				</Card>

				{/* Type of Transactions*/}
				<Card p='16px'>
					<CardBody>
						<Flex direction='column' w='100%'>
							<Box
								bg='linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)'
								borderRadius='20px'
								display={{ sm: 'flex', md: 'block' }}
								justify={{ sm: 'center', md: 'flex-start' }}
								align={{ sm: 'center', md: 'flex-start' }}
								minH={{ sm: '180px', md: '220px' }}
								p={{ sm: '0px', md: '22px' }}>
								<BarChart
									barChartOptions={transactionsTypeOptionsDashboard}
									barChartData={transactionsTypeDataDashboard}
								/>
							</Box>
							<Flex direction='column' mt='24px' mb='36px' alignSelf='flex-start'>
								<Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
									Type of transactions(currency used for transactions)
								</Text>
								<Text fontSize='md' fontWeight='medium' color='gray.400'>
									<Text as='span' color='green.400' fontWeight='bold'>
										(+23%)
									</Text>{' '}
									increased in assests value
								</Text>
							</Flex>
							<SimpleGrid gap={{ sm: '12px' }} columns={4}>
								<Flex direction='column'>
									<Flex alignItems='center'>
										<IconBox as='box' h={'30px'} w={'30px'} bg='brand.200' me='6px'>
											<WalletIcon h={'15px'} w={'15px'} color='#fff' />
										</IconBox>
										<Text fontSize='sm' color='gray.400'>
											Transactions
										</Text>
									</Flex>
									<Text
										fontSize={{ sm: 'md', lg: 'lg' }}
										color='#fff'
										fontWeight='bold'
										mb='6px'
										my='6px'>
										32
									</Text>
									<Progress colorScheme='brand' bg='#2D2E5F' borderRadius='30px' h='5px' value={20} />
								</Flex>
								<Flex direction='column'>
									<Flex alignItems='center'>
										<IconBox as='box' h={'30px'} w={'30px'} bg='brand.200' me='6px'>
											<RocketIcon h={'15px'} w={'15px'} color='#fff' />
										</IconBox>
										<Text fontSize='sm' color='gray.400'>
											Clicks
										</Text>
									</Flex>
									<Text
										fontSize={{ sm: 'md', lg: 'lg' }}
										color='#fff'
										fontWeight='bold'
										mb='6px'
										my='6px'>
										240
									</Text>
									<Progress colorScheme='brand' bg='#2D2E5F' borderRadius='30px' h='5px' value={90} />
								</Flex>
								<Flex direction='column'>
									<Flex alignItems='center'>
										<IconBox as='box' h={'30px'} w={'30px'} bg='brand.200' me='6px'>
											<CartIcon h={'15px'} w={'15px'} color='#fff' />
										</IconBox>
										<Text fontSize='sm' color='gray.400'>
											Amount
										</Text>
									</Flex>
									<Text
										fontSize={{ sm: 'md', lg: 'lg' }}
										color='#fff'
										fontWeight='bold'
										mb='6px'
										my='6px'>
										2,400$
									</Text>
									<Progress colorScheme='brand' bg='#2D2E5F' borderRadius='30px' h='5px' value={30} />
								</Flex>
								<Flex direction='column'>
									<Flex alignItems='center'>
										<IconBox as='box' h={'30px'} w={'30px'} bg='brand.200' me='6px'>
											<StatsIcon h={'15px'} w={'15px'} color='#fff' />
										</IconBox>
										<Text fontSize='sm' color='gray.400'>
											Items
										</Text>
									</Flex>
									<Text
										fontSize={{ sm: 'md', lg: 'lg' }}
										color='#fff'
										fontWeight='bold'
										mb='6px'
										my='6px'>
										320
									</Text>
									<Progress colorScheme='brand' bg='#2D2E5F' borderRadius='30px' h='5px' value={50} />
								</Flex>
							</SimpleGrid>
						</Flex>
					</CardBody>
				</Card>
			</Grid>



			<Grid
				templateColumns={{ sm: '1fr', lg: '1.7fr 1.3fr' }}
				maxW={{ sm: '100%', md: '100%' }}
				gap='24px'
				mb='24px'>

				{/* Rarity Graph */}
				<DashboardData nfts={nfts}/>
				
				{/* Active Users */}
				<Card p='16px' overflowX={{ sm: 'scroll', xl: 'hidden' }}>
					<CardHeader p='12px 0px 28px 0px'>
						<Flex direction='column'>
							<Text fontSize='lg' color='#fff' fontWeight='bold' pb='8px'>
								Maximum No. of trasactions of a collection
							</Text>
							<Box
								bg='linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)'
								borderRadius='20px'
								display={{ sm: 'flex', md: 'block' }}
								justify={{ sm: 'center', md: 'flex-start' }}
								align={{ sm: 'center', md: 'flex-start' }}
								minH={{ sm: '280px', md: '370px' }}
								p={{ sm: '0px', md: '22px' }}>
                               <PieChart>
								</PieChart>
							</Box>
					</Flex>
					</CardHeader>
				</Card>
			</Grid>


				{/* Projects */}
				<Card p='28px 0px 0px 0px'>
					<CardHeader mb='20px' ps='22px'>
						<Flex direction='column' alignSelf='flex-start'>
							<Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
								TRENDING NFTS/VALUABLE NFTS
							</Text>
							<Text fontSize='md' fontWeight='medium' color='gray.400'>
								
								in 2023
							</Text>
						</Flex>
					</CardHeader>
					<Box w='100%' minH={{ sm: '300px' }}>
						<LineChart
							lineChartData={lineChartDataDashboard2}
							lineChartOptions={lineChartOptionsDashboard2}
						/>
					</Box>
				</Card>
				
				{/* Orders Overview */}
				{/* <Card>
					<CardHeader mb='32px'>
						<Flex direction='column'>
							<Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
								Recommondation
							</Text>
							<Flex align='center'>
								<Icon as={AiFillCheckCircle} color='green.500' w='15px' h='15px' me='5px' />
								<Text fontSize='sm' color='gray.400' fontWeight='normal'>
									<Text fontWeight='bold' as='span' color='gray.400'>
										Top NFTs 
									</Text>{' '}
									this month
								</Text>
							</Flex>
						</Flex>
					</CardHeader>
					<CardBody>
						<Flex direction='column' lineHeight='21px'>
							{timelineData.map((row, index, arr) => {
								return (
									<TimelineRow
										logo={row.logo}
										title={row.title}
										date={row.date}
										color={row.color}
										index={index}
										arrLength={arr.length}
									/>
								);
							})}
						</Flex>
					</CardBody>
				</Card> */}
		</Flex>
	);
}
