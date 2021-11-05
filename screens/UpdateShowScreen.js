import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';
import validate from '../utils/validator';
import styles from '../shared/stylesheet';

export default class UpdateShowScreen extends React.Component {
  state = {
    id: this.props.route.params.id,
    title: this.props.route.params.title,
    producer: this.props.route.params.producer,
    firstYear: this.props.route.params.firstYear,
    lastYear: this.props.route.params.lastYear,
    numberOfSeasons: this.props.route.params.numberOfSeasons,
    rating: this.props.route.params.rating,
  };

  CustomSlider = () => {
    return (
      <View>
        <Slider
          style={{width: 400, height: 40}}
          minimumValue={0}
          step={0.1}
          onValueChange={(value) => this.setState({rating: value})}
          value={this.state.rating}
          maximumValue={10}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#0000FF"
        />
        <Text style={{fontSize: 20, alignSelf: 'center', color: '#7B68EE'}}>
          {this.state.rating} /10
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.valueField}>
          <Text style={styles.textField}>Title:</Text>
          <TextInput
            editable
            defaultValue={this.state.title}
            style={styles.inputContainer}
            onChangeText={(value) => this.setState({title: value})}
            value={this.state.title}
          />
        </View>
        <View style={styles.valueField}>
          <Text style={styles.textField}>Producer:</Text>
          <TextInput
            editable
            defaultValue={this.state.producer}
            style={styles.inputContainer}
            onChangeText={(value) => this.setState({producer: value})}
            value={this.state.producer}
          />
        </View>
        <View style={styles.valueField}>
          <Text style={styles.textField}>First Year:</Text>
          <TextInput
            editable
            defaultValue={this.state.firstYear}
            style={styles.inputContainer}
            onChangeText={(value) => this.setState({firstYear: value})}
            value={this.state.firstYear}
          />
        </View>
        <View style={styles.valueField}>
          <Text style={styles.textField}>Last Year:</Text>
          <TextInput
            editable
            defaultValue={this.state.lastYear}
            style={styles.inputContainer}
            onChangeText={(value) => this.setState({lastYear: value})}
            value={this.state.lastYear}
          />
        </View>
        <View style={styles.valueField}>
          <Text style={styles.textField}>No Seasons:</Text>
          <TextInput
            editable
            defaultValue={this.state.numberOfSeasons}
            style={styles.inputContainer}
            onChangeText={(value) => this.setState({numberOfSeasons: value})}
            value={this.state.numberOfSeasons}
          />
        </View>
        <View>{this.CustomSlider()}</View>
        <TouchableOpacity
          style={localStyles.updateBttn}
          onPress={() => {
            if (
              validate(this.state.title, this.state.producer, this.state.firstYear,
                this.state.lastYear, this.state.numberOfSeasons, this.state.rating)
            ) {
              this.props.navigation.navigate('ViewShows', {
                adding: false,
                updating: true,
                id: this.state.id,
                title: this.state.title,
                producer: this.state.producer,
                firstYear: this.state.firstYear,
                lastYear: this.state.lastYear,
                numberOfSeasons: this.state.numberOfSeasons,
                rating: this.state.rating,
              });
            } else {
              Alert.alert('Invalid Data', "Please don't leave empty fields!");
            }
          }}>
          <Text style={{fontSize: 22, color: '#000000'}}>Update</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const localStyles = StyleSheet.create({
  updateBttn: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 120,
    height: 35,
    marginTop:20,
    backgroundColor: '#7B68EE',
    borderRadius: 12,
  },
});