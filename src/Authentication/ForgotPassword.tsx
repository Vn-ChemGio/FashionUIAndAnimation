import React       from 'react'
import {Linking}   from 'react-native'
import {useFormik} from 'formik';
import * as Yup    from 'yup';

import {Text, Box}                            from '../layouts';
import {AuthenticationProps}                  from "../navigators";
import {Container, Button, TextInput, Footer} from '../components'

const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

const ForgotPassword = ({navigation}: AuthenticationProps<"ForgotPassword">) => {
    const footer = (
        <Footer
            title="Don't work?"
            action="Try another way"
            onPress={() => Linking.openURL("mailto:help@support.com")}
        />
    )
    const {
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              touched,
          }      = useFormik({
        initialValues   : {email: ''},
        validationSchema: ForgotPasswordSchema,
        onSubmit        : () => navigation.navigate('PasswordChanged')
    });

    return (
        <Container pattren={2} {...{footer}}>

            <Text variant="lTitle" textAlign="center" marginBottom="l">
                Forgot password?
            </Text>
            <Text variant="body" textAlign="center" marginBottom="l">
                Enter the email address associated with your account
            </Text>
            <Box>
                <TextInput
                    icon="mail"
                    placeholder="Enter your Email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    error={errors.email}
                    touched={touched.email}
                    autoCompleteType="email"
                    autoCapitalize="none"
                    returnKeyType="go"
                    returnKeyLabel="go"
                    autoCorrect={false}
                    onSubmitEditing={() => handleSubmit}
                />
                <Box alignItems="center" marginTop="m">
                    <Button
                        variant="primary"
                        label="Reset password"
                        onPress={handleSubmit}
                    />
                </Box>
            </Box>
        </Container>
    )
}

export default ForgotPassword