/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import axios from 'axios';
import Header from '../ReminderApp/src/Header';
import ReminderCard from '../ReminderApp/src/reminderCard';
import DetailReminderCard from '../ReminderApp/src/detailReminderCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIcon: false,
      weekSelected: false,
      monthSelected: true,
      yearSelected: false,
      loading: false,
      data: [],
      monthData: [],
      weekData: [],
      yearData: [],
      todayData: [],
    };
  }

  weekSelection = () => {
    this.setState({
      weekSelected: true,
      monthSelected: false,
      yearSelected: false,
      data: this.state.weekData,
    });
  };

  monthSelection = () => {
    this.setState({
      weekSelected: false,
      monthSelected: true,
      yearSelected: false,
      data: this.state.monthData,
    });
  };

  yearSelection = () => {
    this.setState({
      weekSelected: false,
      monthSelected: false,
      yearSelected: true,
      data: this.state.yearData,
    });
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });
    axios
      .get('http://103.129.98.170/HayatMart/API/productListTest.json')
      .then(response => {
        this.setState({
          loading: false,
          todayData: response.data.todayData,
          data: response.data.monthData,
          monthData: response.data.monthData,
          weekData: response.data.weekData,
          yearData: response.data.yearData,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  showReminderCard = ({item}) => (
    <View>
      <ReminderCard
        userprofile={item.userprofile}
        name={item.name}
        message={item.card.cardMessage}
        date={item.eventDate}
      />
    </View>
  );

  showDetailReminderCard = ({item}) => (
    <View>
      <DetailReminderCard
        userprofile={item.userprofile}
        name={item.name}
        message={item.eventName}
        date={this.convertTimeToDate(item.eventTime)}
      />
    </View>
  );

  convertTimeToDate = time => {
    var date = new Date(time);
    var dateString = date.toString();
    var day = dateString.slice(7, 9);
    var month = dateString.slice(4, 7);
    var year = dateString.slice(10, 16);
    return day + ' ' + month + ' ' + year;
  };

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Header />
          <ScrollView style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.reminderBanner}>
                <FlatList
                  horizontal={true}
                  data={this.state.todayData}
                  renderItem={this.showReminderCard}
                  keyExtractor={item => item.eventTypeId.toString()}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
              <View style={styles.seperatorLine} />
              <View style={styles.remindersectionsBanner}>
                <TouchableOpacity onPress={this.weekSelection}>
                  <Text
                    style={
                      (styles.filterTitleBg,
                      this.state.weekSelected === true
                        ? styles.filterTitleBg
                        : styles.filterTitle)
                    }>
                    This week
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.monthSelection}>
                  <Text
                    style={
                      this.state.monthSelected === true
                        ? styles.filterTitleBg
                        : styles.filterTitle
                    }>
                    This month
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.yearSelection}>
                  <Text
                    style={
                      this.state.yearSelected === true
                        ? styles.filterTitleBg
                        : styles.filterTitle
                    }>
                    This year
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.reminderSections}>
              <Text style={styles.reminderSectionTitle}>September</Text>
              <FlatList
                data={this.state.data}
                renderItem={this.showDetailReminderCard}
                keyExtractor={item => item.eventId.toString()}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </ScrollView>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.advertisementBanner}>
              <View style={styles.bannerBg}>
                <Image
                  style={styles.img}
                  source={require('../ReminderApp/src/assets/adv2.png')}
                />
              </View>
              <View style={styles.bannerBg}>
                <Image
                  style={styles.img}
                  source={require('../ReminderApp/src/assets/adv1.png')}
                />
              </View>
              <View style={styles.bannerBg}>
                <Image
                  style={styles.img}
                  source={require('../ReminderApp/src/assets/adv2.png')}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    height: 650,
  },
  body: {
    backgroundColor: 'rgba(252, 3, 119,0.78)',
  },
  reminderBanner: {
    marginLeft: 20,
    marginRight: 20,
  },
  remindersectionsBanner: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bannerBg: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  advertisementBanner: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
  },
  img: {
    height: 60,
    width: 320,
    margin: 10,
    borderRadius: 10,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '200',
    marginBottom: 15,
  },
  reminderSectionTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 15,
  },
  filterTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '200',
    marginBottom: 15,
    marginTop: 10,
  },
  filterTitleBg: {
    backgroundColor: 'white',
    color: '#F40430',
    fontSize: 16,
    fontWeight: '200',
    marginBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
  },
  seperatorLine: {
    marginTop: 20,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'pink',
    opacity: 0.5,
  },
  reminderSections: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default App;
