import { useState } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import {
  Center,
  Container,
  Input,
  Stack,
  Pressable,
  Icon,
  Button,
  Link,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import rootStyles, { colors } from "../assets/css/main";

const Login = ({ navigation }) => {
  const [show, setShow] = useState(false);

  return (
    <ImageBackground
      source={require("../assets/images/pattern.png")}
      style={rootStyles.body}
    >
      <Container alignItems="center">
        <Image
          source={require("../assets/images/quiz-logo.png")}
          style={rootStyles.logo}
          resizeMode="contain"
        ></Image>
        <Text style={rootStyles.h2}>Welcome Back</Text>
        <Text style={rootStyles.paragraph}>Login your credentials</Text>
        <Stack space={4} w="100%" alignItems="center" marginTop="20px">
          <Input
            w={{
              base: "85%",
              md: "45%",
            }}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="person" />}
                size={5}
                ml="2"
                color="muted.800"
              />
            }
            placeholder="Name"
          />
          <Input
            w={{
              base: "85%",
              md: "25%",
            }}
            type={show ? "text" : "password"}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="lock" />}
                size={5}
                ml="2"
                color="muted.800"
              />
            }
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.800"
                />
              </Pressable>
            }
            placeholder="Password"
          />
        </Stack>
      </Container>
      <Link href="#" marginTop="10px" style={rootStyles.forgotPassword}>
        <Text style={{ color: colors.primaryColor }}>Forgot Password?</Text>
      </Link>
      <Stack space={4} w="100%" alignItems="center" marginTop="20px">
        <Button
          onPress={() => navigation.navigate("Home")}
          style={rootStyles.buttonContainer}
        >
          LOG IN
        </Button>
        <Button style={rootStyles.buttonContainer} variant={"outline"}>
          REGISTER
        </Button>
      </Stack>
    </ImageBackground>
  );
};

export default Login;
