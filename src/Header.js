import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.headerBg}>
        <View>
          <Image
            style={styles.img}
            source={require('../src/assets/profile.jpg')}
          />
        </View>
        <View>
          <Text style={styles.headerText}> Hello, Amelia! </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerBg: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(252, 3, 119,0.78)',
  },
  img: {
    width: 40,
    height: 40,
    margin: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
  },
});

export default Header;
