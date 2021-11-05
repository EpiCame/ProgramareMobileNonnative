import React from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';
import validate from '../utils/validator';
import styles from '../shared/stylesheet';

export default class AddShowScreen extends React.Component {
  state = {
    title: null,
    producer: null,
    firstYear: null,
    lastYear: null,
    numberOfSeasons: null,
    rating: 5,
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
          style={styles.fab}
          onPress={() => {
            if (
                validate(this.state.title, this.state.producer, this.state.firstYear,
                    this.state.lastYear, this.state.numberOfSeasons, this.state.rating)
            ) {
              this.props.navigation.navigate('ViewShows', {
                adding: true,
                updating: false,
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
          <Text style={{fontSize: 36, color: '#000000'}}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
