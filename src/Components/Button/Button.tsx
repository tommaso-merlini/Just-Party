import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";

import { View } from "react-native";

export const Button = (props) => {
  if (props.withFeedback === true) {
    return (
      <TouchableOpacity
        onPress={props.onPress}
        style={[
          props.props.style,
          { alignItems: "center", justifyContent: "center" },
        ]}
      >
        {props.children}
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableWithoutFeedback
        onPress={props.onPress}
        style={[
          props.props.style,
          { alignItems: "center", justifyContent: "center" },
        ]}
      >
        {props.children}
      </TouchableWithoutFeedback>
    );
  }
};
