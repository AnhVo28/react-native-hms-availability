

import React, {useEffect} from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView} from "react-native";
import HMSAvailability, {ErrorCode} from "@hmscore/react-native-hms-availability";
import { styles } from "./styles";

const Button = (props) => (
  <TouchableOpacity
    style={[
      styles.buttonContainer,
      styles.secondaryButton,
      styles.buttonContainerSlim,
    ]}
    onPress={props.onPress}
  >
    <Text style={styles.buttonText}>{props.text}</Text>
  </TouchableOpacity>
);


class App extends React.Component {

  isHuaweiMobileServicesAvailable() {
    HMSAvailability.isHuaweiMobileServicesAvailable()
      .then((res) => {
        this.getErrorString(res)
      })
      .catch((err) => this.showResult(err));
  }

  getErrorString(errorCode = ErrorCode.HMS_CORE_APK_OUT_OF_DATE) {
    HMSAvailability.getErrorString(errorCode)
     .then((res) => {
       this.showResult(errorCode +": "+res)
     })
     .catch((err) => this.showResult(err));
  }

  showResult = (res) => alert(JSON.stringify(res, null, 4));



  render(){
    return (
    
      <ScrollView>
        <View style={styles.title}>
          <Text style={styles.header}>HMS Availability</Text>
        </View>
  
        <Button
          text="Check HMS availability"
          onPress={() => {
            this.isHuaweiMobileServicesAvailable();
          }}
        /> 
  
      </ScrollView>
    );
  }
};

export default App;
