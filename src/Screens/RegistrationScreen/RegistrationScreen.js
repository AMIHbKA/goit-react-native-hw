import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Avatar } from "../../components/Avatar/Avatar";
import Background from "../../components/Background/Background";
import { ButtonLink, ButtonMain } from "../../components/Buttons";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { Input } from "../../components/Inputs";
import { ScrollContainer } from "../../components/ScrollContainer/ScrollContainer";
import { pixels } from "../../utilities";
import {
  validateLogin,
  validateEmail,
  validatePassword,
} from "../../utilities";

export const RegistrationScreen = () => {
  const navigation = useNavigation();

  const initialValuesForm = { login: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValuesForm);
  const [errors, setErrors] = useState({
    login: false,
    email: false,
    password: false,
  });

  const handleChange = (name) => (text) => {
    setFormValues((prevState) => ({ ...prevState, [name]: text }));
  };

  const handlePress = () => {
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    const { login, email, password } = formValues;
    const trimmedLogin = login.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const newFormValues = {
      login: trimmedLogin,
      email: trimmedEmail,
      password: trimmedPassword,
    };

    const newErrors = {
      login: !validateLogin(trimmedLogin),
      email: !validateEmail(trimmedEmail),
      password: !validatePassword(trimmedPassword),
    };

    if (!newErrors.login && !newErrors.email && !newErrors.password) {
      setFormValues(initialValuesForm);
      navigation.navigate("Home", { newFormValues });
    } else {
      setFormValues(newFormValues);
    }

    setErrors(newErrors);
  };

  return (
    <>
      <Background />
      <TouchableWithoutFeedback onPress={handlePress}>
        <FormLayout>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={styles.container}
          >
            <Avatar />
            <ScrollContainer>
              <Text style={styles.text}>Реєстрація</Text>
              <View>
                <Input
                  placeholder="Логін"
                  textContentType="username"
                  style={{ marginBottom: pixels.height[16] }}
                  value={formValues.login}
                  onChangeText={handleChange("login")}
                  error={errors.login}
                  errorText="Логін: 3-32 символи, пробіли дозволені"
                />

                <Input
                  placeholder="Адреса електронної пошти"
                  textContentType="emailAddress"
                  style={{ marginBottom: pixels.height[16] }}
                  value={formValues.email}
                  onChangeText={handleChange("email")}
                  error={errors.email}
                  errorText="Введіть дійсну електронну адресу"
                />

                <Input
                  placeholder="Пароль"
                  textContentType="password"
                  value={formValues.password}
                  onChangeText={handleChange("password")}
                  error={errors.password}
                  errorText="Пароль: 8-32 символи, латиниця/кирилиця, 1 велика літера, 1 цифра, пробіли і розділові знаки дозволені"
                  password
                />
              </View>

              <ButtonMain
                text="Зареєструватися"
                style={{
                  marginTop: pixels.height[43],
                  fontSize: pixels.height[16],
                }}
                onPress={handleSubmit}
              />
              <ButtonLink
                text="Вже є акаунт? "
                link="Увійти"
                onPress={() => navigation.navigate("Login")}
                style={{
                  marginTop: pixels.height[16],
                  justifyContent: "center",
                  fontSize: pixels.height[16],
                }}
              />
            </ScrollContainer>
          </KeyboardAvoidingView>
        </FormLayout>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: pixels.height[32],
    marginBottom: pixels.height[32],
    fontSize: pixels.height[30],
    textAlign: "center",
    fontWeight: 500,
    letterSpacing: 0.3,
    color: "#212121",
  },
});
