import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Channel, MessageList, MessageInput, } from 'stream-chat-expo';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ChannelScreen( props ) {

    const { route } = props;
    const { params: { channel } } = route;

    return (
        <View style={styles.container}>
            <Channel channel={channel}>
                <MessageList />
                <MessageInput />
            </Channel>
        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
