import React from 'react';
import { Text, View , TouchableOpacity , StyleSheet} from 'react-native';

export default class StarMapScreen extends React.Component {
  render(){
    return(
<View style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Star Map Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});