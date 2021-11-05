import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import styles from '../shared/stylesheet';

let SHOWS = [
  {
    id: 1,
    title: 'The Wire',
    producer: 'HBO',
    firstYear: '2002',
    lastYear: '2008',
    numberOfSeasons: '5',
    rating: 9.8,
  },
  {
    id: 2,
    title: 'Lost',
    producer: 'ABC',
    firstYear: '2004',
    lastYear: '2010',
    numberOfSeasons: '6',
    rating: 8.9,
  },
];
let nextId = 3;

export default class ViewShowScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: SHOWS,
      refreshing: false,
    };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.loadShows();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  getShow(id) {
    for (let item of SHOWS) {
      if (item.id === id) {
        return item;
      }
    }
    return null;
  }

  removeShow(id) {
    SHOWS = SHOWS.filter((item) => item.id !== id);
    this.setState({refreshing: true});
    this.setState({data: SHOWS});
    this.setState({refreshing: false});
  }

  removeShowDialog(id) {
    Alert.alert(
        'Delete',
        'Are you sure you want to delete ' + this.getShow(id).title + '?',
        [
          {
            text: 'CANCEL',
            style: 'cancel',
          },
          {text: 'OK', onPress: () => this.removeShow(id)},
        ],
        {cancelable: false},
    );
  }

  loadShows() {
    if (!this.props.route.params) {
      this.setState({refreshing: true});
      this.setState({data: SHOWS});
      this.setState({refreshing: false});
      }
    else {
      if (this.props.route.params.updating) {
        this.setState({refreshing: true});
        SHOWS = SHOWS.map((obj) => {
          if (obj.id === this.props.route.params.id){
            return {
              id: this.props.route.params.id,
              title: this.props.route.params.title,
              producer: this.props.route.params.producer,
              firstYear: this.props.route.params.firstYear,
              lastYear: this.props.route.params.lastYear,
              numberOfSeasons: this.props.route.params.numberOfSeasons,
              rating: this.props.route.params.rating,
            }
          }
          else {
            return obj;
          }
        });
        this.setState({data: SHOWS});
        this.setState({refreshing: false});
        this.props.route.params.updating = false;
      } else if (this.props.route.params.adding) {
        this.setState({refreshing: true});
        SHOWS.push({
            id: nextId,
            title: this.props.route.params.title,
            producer: this.props.route.params.producer,
            firstYear: this.props.route.params.firstYear,
            lastYear: this.props.route.params.lastYear,
            numberOfSeasons: this.props.route.params.numberOfSeasons,
            rating: this.props.route.params.rating,
        });
        nextId++;
        this.setState({data: SHOWS});
        this.setState({refreshing: false});
        this.props.route.params.adding = false;
      }
    }
  }


  renderShowComponent = ({id, title, producer, firstYear, lastYear, numberOfSeasons, rating}) => {
    if (rating === 0) {
      return (
        <TouchableOpacity
          onLongPress={() => this.removeShowDialog(id)}
          onPress={() =>
            this.props.navigation.navigate('UpdateShow', {
              id,
              title,
              producer,
              firstYear,
              lastYear,
              numberOfSeasons,
              rating,
            })
          }>
          <View style={styles.displayContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.producer}>{producer}</Text>
            <Text style={styles.year}>{firstYear}</Text>
            <Text style={styles.year}>{lastYear}</Text>
            <Text style={styles.noSeasons}>{numberOfSeasons}</Text>
            <Text style={styles.notSeen}>Not seen</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onLongPress={() => this.removeShowDialog(id)}
          onPress={() =>
            this.props.navigation.navigate('UpdateShow', {
              id: id,
              title: title,
              producer: producer,
              firstYear: firstYear,
              lastYear: lastYear,
              numberOfSeasons: numberOfSeasons,
              rating: rating,
            })
          }>
          <View style={styles.displayContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  ItemSeparator = () => (
    <View
      style={{
        height: 1,
        backgroundColor: 'rgba(0,0,0,1)',
      }}
    />
  );

  handleRefresh = () => {
    this.setState({refreshing: false}, () => {
      this.loadShows();
    });
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <SafeAreaView>
          <FlatList
            data={this.state.data}
            renderItem={(item) => this.renderShowComponent(item.item)}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={this.ItemSeparator}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
          />
        </SafeAreaView>
        <TouchableOpacity
          style={styles.fab}
          onPress={() => this.props.navigation.navigate('AddShow')}>
          <Text style={{fontSize: 36, color: '#000000'}}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}