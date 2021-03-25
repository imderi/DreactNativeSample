import React from 'react';
import { SafeAreaView, View, ScrollView, Text, StyleSheet, TextBase } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const SignInScreen = ({ navigation: { goBack } }) => {
    return (
        <SafeAreaView>
            <ScrollView
                contentContainerStyle={styles.content}
            >
                <View style={styles.header}>
                    <Text>SIGN IN</Text>
                    <Text style={styles.headerTitle}>Welcome</Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput dense={true} label="Email Address" mode="outlined" style={styles.inputContainerStyle} />
                    <TextInput dense={true} label="Password" mode="outlined" style={styles.inputContainerStyle} right={
                        <TextInput.Icon
                            name={'eye'} // name={'eye-off}
                            forceTextInputFocus={false}
                        />
                    } />
                    <Button mode="contained" onPress={() => goBack()}>SIGN IN</Button>
                    <Text>Haven't registered yet? SIGN UP</Text>
                    <Text>Forgot Password?</Text>
                </View>
                <View style={styles.devintro}>
                    <Text>developer options</Text>
                    <Text>Back to Into</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 35,
    },
    header: {
        marginBottom: 50
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: "bold"
    },
    formContainer: {

    },
    inputContainerStyle: {
        marginBottom: 20,
    },
    devintro: {
        paddingTop: 30
    }
})
export default SignInScreen
