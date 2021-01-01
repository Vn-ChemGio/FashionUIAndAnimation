import React                                                          from 'react'
import {StackNavigationProps, AuthenticationRoutes}                   from '../navigators';
import {Container, Button, Text, Box, RoundedIconButton, RoundedIcon} from '../components'

const SIZE = 70;

const PasswordChanged = ({navigation}: StackNavigationProps<AuthenticationRoutes, "PasswordChanged">) => {

    const footer = (
        <Box flexDirection="row" justifyContent="center">
            <RoundedIconButton
                name="x"
                size={60}
                color="secondary"
                backgroundColor="white"
                onPress={() => navigation.navigate("Login")}
            />
        </Box>
    )
    return (
        <Container pattren={0} {...{footer}}>
            <Box alignSelf="center">
                <RoundedIcon
                    name="check"
                    size={SIZE}
                    color="primary"
                    backgroundColor="primaryLight"
                />
            </Box>
            <Text variant="title1" textAlign="center" marginBottom="l">
                Your password was successfully changed
            </Text>
            <Text variant="body" textAlign="center" marginBottom="l">
                Close this window and login again
            </Text>
            <Box>
                <Box alignItems="center" marginTop="m">
                    <Button
                        variant="primary"
                        label="Login again"
                        onPress={() => navigation.navigate('Login')}
                    />
                </Box>
            </Box>
        </Container>
    )
}

export default PasswordChanged