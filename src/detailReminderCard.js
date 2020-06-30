import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class reminderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.body}>
        <View>
          <Image
            style={styles.profileImg}
            source={{uri: this.props.userprofile}}
          />
        </View>
        <View style={styles.cardDetails}>
          <Text style={styles.name}>{this.props.name}</Text>
          <Text style={styles.dateWish}>{this.props.message}</Text>
          <Text style={styles.dateWish}>{this.props.date}</Text>
          <View style={styles.icons}>
            <TouchableOpacity>
              <Image
                style={styles.iconStylebig}
                tintColor="#D3074F"
                source={require('../src/assets/facebook.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.iconStylebig}
                tintColor="#D3074F"
                source={require('../src/assets/insta.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.iconStylebig}
                // tintColor="#D3074F"
                source={require('../src/assets/linkedin.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.iconStyle}
                tintColor="#D3074F"
                source={require('../src/assets/twitter.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.iconStylebig}
                tintColor="#D3074F"
                source={require('../src/assets/whatsapp.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.iconStyle}
                tintColor="grey"
                source={require('../src/assets/message.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    elevation: 3,
    marginBottom: 5,
  },
  profileImg: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  cardDetails: {
    marginLeft: 15,
  },
  name: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
  },
  dateWish: {
    color: '#A7A3A4',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  icons: {
    flexDirection: 'row',
    marginTop: 5,
  },
  iconStyle: {
    height: 17,
    width: 18,
    marginLeft: 5,
    marginRight: 5,
  },
  iconStylebig: {
    height: 12.9,
    width: 13,
    marginLeft: 5,
    marginRight: 5,
  },
});
export default reminderCard;
