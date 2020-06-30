import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class reminderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.warn(this.props.name);

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
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    marginRight: 15,
    width: 330,
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
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
  },
  dateWish: {
    color: 'white',
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
    width: 17,
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
