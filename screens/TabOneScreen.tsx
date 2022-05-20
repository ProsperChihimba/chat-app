import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { ChannelList } from 'stream-chat-expo';
import { chatApiKey, chatUserId } from '../chatConfig';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const filters = {
  members: {
    '$in': [chatUserId]
  },
};

const sort = {
  last_message_at: -1,
};

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  // const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ChannelList
        filters={filters}
        sort={sort}
        onSelect={(channel) => navigation.navigate('ChannelScreen', { channel })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
