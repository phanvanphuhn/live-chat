import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class Fire {
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyD1u8lnRNh57TrEYSMtkqMlpVGVucCkrU8",
                authDomain: "login-e4289.firebaseapp.com",
                databaseURL: "https://login-e4289.firebaseio.com",
                projectId: "login-e4289",
                storageBucket: "login-e4289.appspot.com",
                messagingSenderId: "41304156981",
                appId: "1:41304156981:web:dabf0136f2b099b6f33a7c",
                measurementId: "G-VNY4JZHXRC"
            })
        }
    }

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously()
            }
        })
    }

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }

            this, db.push(message)
        })
    }

    parse = message => {
        const { user, text, timestamp } = message.val()
        const { key: _id } = message
        const createAt = new Date(timestamp)

        return {
            _id,
            createAt,
            text,
            user
        }
    }

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)))
    }

    off() {
        this.db.off()
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }

    get db() {
        return firebase.database().ref('messages')
    }
}

export default Fire

