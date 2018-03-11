var React = require("react");
var { View, Text, TextInput, TouchableOpacity } = require("react-native");
import { Icon } from 'react-native-elements'
//var ImagePicker = require('react-native-image-picker');
import ImagePicker from 'react-native-image-picker';

function selectPhotoTapped() {
    const options = {
        quality: 1.0,
        maxWidth: 400,
        maxHeight: 400,
        storageOptions: {
            skipBackup: true
        }
    };

    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
        if (response.didCancel) {
            console.log('User cancelled photo picker');
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        }
        else {

            let source = response.uri;
            let extension = source.split('.').pop();
            fileName = this.props.userId + "-" + moment() + '.' + extension;
            console.log('fileName-----', fileName);

            this.setState({ avatarSource: source, fileName: fileName, isModified: true })
        }
    });
}

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
        <TouchableOpacity style={fileIconOuterStyle} >
            <View style={fileIconStyle}><Icon name={locals.icon ? locals.icon : 'add'} size={locals.iconSize ? locals.iconSize : 20} color={locals.iconColor ? locals.iconColor : "#fff"}></Icon></View>
        </TouchableOpacity>
        {label}
        {help}
        {error}
    </View>
  );
}

module.exports = file;
