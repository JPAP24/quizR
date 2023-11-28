import * as React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { Center, Container, Input, Stack, Pressable, Icon, Button, Link } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import rootStyles from '../assets/css/main';
function Login({ navigation }) {
    const [show, setShow] = React.useState(false);

    return (
        <ImageBackground
            source={require('../assets/images/pattern.png')}
            style={rootStyles.body}
        >
            <Container alignItems="center">
                <Image
                    source={require('../assets/images/quiz-logo.png')}
                    style={rootStyles.logo}
                    resizeMode="contain"
                >
                </Image>
                <Text style={rootStyles.h2}>Welcome Back</Text>
                <Text style={rootStyles.paragraph}>Login your credentials</Text>
                <Stack space={4} w="100%" alignItems="center" marginTop="20px">
                    <Input w={{
                        base: "85%",
                        md: "45%"
                    }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.800" />} placeholder="Name" />
                    <Input w={{
                        base: "85%",
                        md: "25%"
                    }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                        <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.800" />
                    </Pressable>} placeholder="Password" />
                </Stack>

            </Container>
            <Link href="#" marginTop="10px" style={{ textAlign: 'left', width: 245 }}>
                <Text _dark={{
                    color: "primary.800"
                }}>Forgot Password</Text>
            </Link>
            <Stack space={4} w="100%" alignItems="center" marginTop="20px">
                <Button onPress={() => navigation.navigate('Home')} style={rootStyles.buttonContainer} >LOG IN</Button>
                <Button style={rootStyles.buttonContainer} variant={"outline"}>REQUEST AN ACCOUNT</Button>
            </Stack>
        </ImageBackground >

    );
}

export default Login;