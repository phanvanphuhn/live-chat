import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import { SafeAreaView } from 'react-native-safe-area-context';
import Fire from '../../fireStore/index'

export default class ChatScreen extends React.Component {
    state = {
        message: []
    }

    get user() {
        return {
            _id: Fire.uid,
            name: this.props?.params?.name
        }
    }

    componentDidMount() {
        Fire?.get(message => this.setState(prev => ({
            message: GiftedChat.append(prev.message, message)
        })))
    }

    componentWillUnmount() {
        Fire?.off()
    }

    render() {
        console.log('this', this.props)
        const chat = <GiftedChat messages={this.state.message} onSend={Fire.send} user={this.user} />

        if (Platform.OS === "android") {
            return (
                <KeyboardAvoidingView state={{ flex: 1 }} behavior='padding'>
                    {chat}
                </KeyboardAvoidingView>
            )
        }

        return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 18
    },
    wrapContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        borderWidth: 0.5,
        borderColor: 'red',
        flex: 1
    },
    buttonContainer: {
        marginLeft: 6,
        backgroundColor: '#ffb6c1',
        padding: 10,
        borderRadius: 8
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#4682b4'
    }
})