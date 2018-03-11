var React = require("react");
var { View, Text, Picker } = require("react-native");
import { Dropdown } from 'react-native-material-dropdown';

function select(locals) {
  if (locals.hidden) {
    return null;
  }
 
  var stylesheet = locals.stylesheet;
  var formGroupStyle = stylesheet.formGroup.normal;
  var formSelectGroupStyle = null;
  if(stylesheet.formSelectGroup.normal)
  {
    formSelectGroupStyle = stylesheet.formSelectGroup.normal;
  }

  
  var controlLabelStyle = stylesheet.controlLabel.normal;
  var selectStyle = Object.assign(
    {},
    stylesheet.select.normal,
    stylesheet.pickerContainer.normal
  );
  var helpBlockStyle = stylesheet.helpBlock.normal;
  var errorBlockStyle = stylesheet.errorBlock;

  if (locals.hasError) {
    formGroupStyle = stylesheet.formGroup.error;
    formSelectGroupStyle = stylesheet.formSelectGroup.error;
    controlLabelStyle = stylesheet.controlLabel.error;
    selectStyle = stylesheet.select.error;
    helpBlockStyle = stylesheet.helpBlock.error;
  }

  var label = locals.label ? (
    <Text style={controlLabelStyle}>{locals.label}</Text>
  ) : null;
  var help = locals.help ? (
    <Text style={helpBlockStyle}>{locals.help}</Text>
  ) : null;
  var error =
    locals.hasError && locals.error ? (
      <Text accessibilityLiveRegion="polite" style={errorBlockStyle}>
        {locals.error}
      </Text>
    ) : null;

  return (
    <View style={[formGroupStyle, formSelectGroupStyle]}>
      {label}
      <Dropdown
        fontSize = {14}
        data={locals.options}
        value={locals.value}
        containerStyle = {selectStyle}
        inputContainerStyle={{borderBottomColor: 'transparent', height:30, paddingTop:10,}}
      />
    </View>
  );
}

module.exports = select;
