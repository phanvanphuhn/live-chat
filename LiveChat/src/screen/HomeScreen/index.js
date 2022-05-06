import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'

export default class HomeScreen extends React.Component {
    state = {
        name: ''
    }

    continue = () => {
        this.props.navigation.navigate("LiveChat", { name: this.state.name })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Home Screen
                </Text>

                <View style={styles.wrapContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={name => { this.setState({ name }) }}
                        value={this.state.name}
                        placeholder="Placeholder"
                    />
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={this.continue}
                    >
                        <Text
                            style={styles.buttonText}
                        >
                            Send
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 22
    },
    description: {
        color: '#87ceeb'
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
