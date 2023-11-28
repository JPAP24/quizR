import * as React from 'react';
import { View, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { VStack, Center, HStack, Heading, Flex, Container, Box, Text, Badge } from "native-base";
import Carousel from 'react-native-snap-carousel';
import { Entypo, AntDesign } from '@expo/vector-icons';
import rootStyles from '../assets/css/main';
function Home() {

    const screenWidth = Dimensions.get('window').width;

    const data = [

        { title: 'Software Engineering', description: '30 items' },
        { title: 'Physical Education', description: '30 items' },
        { title: 'Humanities', description: '30 items' },
    ];

    const _renderItem = ({ item, index }) => {
        return (
            // Recent Quiz Carousel
            <ImageBackground
                source={require('../assets/images/pattern-two.png')}
                resizeMode='cover'
                style={{ backgroundColor: '#DAE8FD', borderRadius: 10 }}
            >
                <View style={rootStyles.slide}>
                    <Flex direction="row" justifyContent="space-between" alignItems="center" paddingBottom="10px">
                        <Entypo textAlign='right' name="code" size={24} />
                        <Badge colorScheme="danger">New</Badge>
                    </Flex>
                    <Box>
                        <Heading size="md">{item.title}</Heading>
                        <Heading size="xs" color>{item.description}</Heading>
                    </Box>

                </View>
            </ImageBackground>
        );
    };
    return (
        <VStack>
            <Center w="100%" h="25%" bg="primary.600" shadow={3}>
                <ImageBackground
                    source={require('../assets/images/pattern-darker.png')}
                    style={rootStyles.topBg}
                    resizeMode="cover"
                >
                    <Center marginBottom="20px">
                        <Heading size="lg" color="white">Your Dashboard</Heading>
                        <Text color="muted.50">Hi Alex, see what’s new.</Text>
                    </Center>

                    {/* Count per category - Completed vs Pending */}
                    <HStack space={2} justifyContent="center" style={{ marginBottom: -70 }}>
                        <Center h="20" w="30%" bg="primary.500" rounded="md" shadow={3}>
                            <Heading size="lg">0</Heading>
                            <Text>Completed</Text>
                        </Center>
                        <Center h="20" w="30%" bg="primary.500" rounded="md" shadow={3}>
                            <Heading size="lg">0</Heading>
                            <Text>Pending</Text>
                        </Center>
                    </HStack>

                </ImageBackground>
            </Center >
            <View >
                <ScrollView style={{ marginTop: -15, width: '100%', backgroundColor: '#fff', paddingTop: 30, borderRadius: 15 }}>
                    <Center rounded="md" height="100%" style={{ backgroundColor: '#fff', justifyContent: 'flex-start' }} shadow={1}>

                        {/* Trivia of the day - Shuffled per day */}
                        <Container w="100%" rounded="md">
                            <Heading size="lg" paddingBottom="15px">Trivia of the Day</Heading>
                            <ImageBackground
                                source={require('../assets/images/pattern-darker.png')}
                                style={rootStyles.defaultPadding}
                            >
                                <View style={rootStyles.card} >
                                    <Flex direction="row" justifyContent="space-between" alignItems="center" paddingBottom="10px">
                                        <Heading size="md">Software Engineering</Heading>
                                        <Entypo name="code" size={24} />
                                    </Flex>
                                    <Text>Software engineering is the systematic application of engineering principles and methods to the design, development, testing, and maintenance of software systems, ensuring their reliability, efficiency, and scalability.</Text>
                                </View>
                            </ImageBackground>
                        </Container>

                        {/* Recently generated quizzes via ChatGPT */}
                        <Container w="100%" paddingTop="20px">
                            <Flex w="100%" direction="row" justifyContent="space-between" alignItems="center" paddingBottom="15px">
                                <Heading size="lg" >Recent Quizzes </Heading>
                                <AntDesign name="arrowright" size={20} />
                            </Flex>
                            <Carousel
                                layout={'default'}
                                data={data}
                                sliderWidth={300}
                                itemWidth={200}
                                renderItem={_renderItem}
                                loop={true}
                            />
                        </Container>

                        {/* Recently generated quizzes via ChatGPT */}
                        <Container w="100%" paddingTop="20px">
                            <Flex w="100%" direction="row" justifyContent="space-between" alignItems="center" paddingBottom="15px">
                                <Heading size="lg" >Completed Quizzes </Heading>
                                <AntDesign name="arrowright" size={20} />
                            </Flex>
                            <Carousel
                                layout={'default'}
                                data={data}
                                sliderWidth={300}
                                itemWidth={200}
                                renderItem={_renderItem}
                                loop={true}
                            />
                        </Container>
                    </Center>
                </ScrollView>
            </View>
        </VStack >

    );
}

export default Home;