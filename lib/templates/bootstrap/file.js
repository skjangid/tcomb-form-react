var React = require("react");
var { View, Text, TextInput } = require("react-native");
import { Icon } from 'react-native-elements'

function file(locals) {
  if (locals.hidden) {
    return null;
  }

  var stylesheet = locals.stylesheet;
  var formGroupStyle = stylesheet.formGroup.normal;
  var formFileGroupStyle = stylesheet.fileGroup.normal;
  var controlLabelStyle = stylesheet.controlLabel.normal;
  var textboxStyle = stylesheet.textbox.normal;
  var textboxViewStyle = stylesheet.textboxView.normal;
  var helpBlockStyle = stylesheet.helpBlock.normal;
  var errorBlockStyle = stylesheet.errorBlock;
  var fileIconOuterStyle = stylesheet.fileIconOuter.normal;
  var fileIconStyle = stylesheet.fileIcon.normal;
  var fileLabelStyle = stylesheet.fileLabel.normal;
  var fileLabelTextStyle = stylesheet.fileLabelText.normal;

  if (locals.hasError) {
    formGroupStyle = stylesheet.formGroup.error;
    formFileGroupStyle = stylesheet.fileGroup.error;
    controlLabelStyle = stylesheet.controlLabel.error;
    textboxStyle = stylesheet.textbox.error;
    textboxViewStyle = stylesheet.textboxView.error;
    helpBlockStyle = stylesheet.helpBlock.error;
    fileIconOuterStyle = stylesheet.fileIconOuter.error;
    fileIconStyle = stylesheet.fileIcon.error;
    fileLabelStyle = stylesheet.fileLabel.error;
    fileLabelTextStyle = stylesheet.fileLabelText.error;
  }

  if (locals.editable === false) {
    textboxStyle = stylesheet.textbox.notEditable;
    textboxViewStyle = stylesheet.textboxView.notEditable;
  }

  var label = locals.label ? (
    <View style={fileLabelStyle}><Text style={[controlLabelStyle, fileLabelTextStyle]}>{locals.label}</Text></View>
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
    <View style={[formGroupStyle, formFileGroupStyle]}>
        <View style={fileIconOuterStyle}>
            <View style={fileIconStyle}><Icon name={locals.icon ? locals.icon : 'add'} size={locals.iconSize ? locals.iconSize : 20} color={locals.iconColor ? locals.iconColor : "#fff"}></Icon></View>
        </View>
        {label}
        {help}
        {error}
    </View>
  );
}

module.exports = file;
