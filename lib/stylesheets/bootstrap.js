/*

  a bootstrap like style

*/
"use strict";

import { Platform } from "react-native";

var LABEL_COLOR = "#000000";
var INPUT_COLOR = "#000000";
var ERROR_COLOR = "#a94442";
var HELP_COLOR = "#999999";
var BORDER_COLOR = "#cccccc";
var DISABLED_COLOR = "#777777";
var DISABLED_BACKGROUND_COLOR = "#eeeeee";
var FONT_SIZE = 14;
var FONT_WEIGHT = "500";
var GREY_LIGHT = 'rgb(233,233,239)';
var DARK_GRAY_BACKGROUND = 'rgb(193, 189, 189)';

var stylesheet = Object.freeze({
  fieldset: {},
  // the style applied to the container of all inputs
  formGroup: {
    normal: {
      marginBottom: 10
    },
    error: {
      marginBottom: 10
    }
  },
  formSelectGroup :{
    normal: {
      marginBottom: 10
    },
    error: {
      marginBottom: 10
    }
  },
  fileGroup :{
    normal: {
      marginBottom: 10
    },
    error: {
      marginBottom: 10
    }
  },
  fileIconOuter : {
    normal: {
      borderColor:GREY_LIGHT, padding:4, borderWidth:1, marginRight : 20, backgroundColor:"white"
    },
    error: {
      borderColor:GREY_LIGHT, padding:4, borderWidth:1, marginRight : 20, backgroundColor:"white"
    }
  },
  fileIcon : {
    normal: {
      alignItems:'flex-start', backgroundColor:DARK_GRAY_BACKGROUND, height:50, width:50,justifyContent:'center',alignItems:'center',
    },
    error: {
      alignItems:'flex-start', backgroundColor:DARK_GRAY_BACKGROUND, height:50, width:50,justifyContent:'center',alignItems:'center',
    }
  },
  fileLabel : {
    normal: {
      justifyContent:'center', alignItems:'center'
    },
    error: {
      justifyContent:'center',
    }
  },
  fileLabelText : {
    normal: {
      justifyContent:'center', alignItems:'center'
    },
    error: {
      justifyContent:'center', alignItems:'center'
    }
  },
  controlLabel: {
    normal: {
      color: LABEL_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 7,
      fontWeight: FONT_WEIGHT
    },
    // the style applied when a validation error occours
    error: {
      color: ERROR_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 7,
      fontWeight: FONT_WEIGHT
    }
  },
  helpBlock: {
    normal: {
      color: HELP_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 2
    },
    // the style applied when a validation error occours
    error: {
      color: HELP_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 2
    }
  },
  errorBlock: {
    fontSize: FONT_SIZE,
    marginBottom: 2,
    color: ERROR_COLOR
  },
  textboxView: {
    normal: {},
    error: {},
    notEditable: {}
  },
  textbox: {
    normal: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      height: 36,
      paddingVertical: Platform.OS === "ios" ? 7 : 0,
      paddingHorizontal: 7,
      borderRadius: 4,
      borderColor: BORDER_COLOR,
      borderWidth: 1,
      marginBottom: 5
    },
    // the style applied when a validation error occours
    error: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      height: 36,
      paddingVertical: Platform.OS === "ios" ? 7 : 0,
      paddingHorizontal: 7,
      borderRadius: 4,
      borderColor: ERROR_COLOR,
      borderWidth: 1,
      marginBottom: 5
    },
    // the style applied when the textbox is not editable
    notEditable: {
      fontSize: FONT_SIZE,
      height: 36,
      paddingVertical: Platform.OS === "ios" ? 7 : 0,
      paddingHorizontal: 7,
      borderRadius: 4,
      borderColor: BORDER_COLOR,
      borderWidth: 1,
      marginBottom: 5,
      color: DISABLED_COLOR,
      backgroundColor: DISABLED_BACKGROUND_COLOR
    }
  },
  checkbox: {
    normal: {
      marginBottom: 4
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4
    }
  },
  inputContainerStyle :{
    normal: {
      borderBottomColor: 'transparent', height:30, paddingTop:10,
    },
    error: {
      borderBottomColor: 'transparent', height:30, paddingTop:10,
    }
  },
  pickerContainer: {
    normal: {
      marginBottom: 4,
      borderRadius: 4,
      borderColor: BORDER_COLOR,
      borderWidth: 1
    },
    error: {
      marginBottom: 4,
      borderRadius: 4,
      borderColor: ERROR_COLOR,
      borderWidth: 1
    },
    open: {
      // Alter styles when select container is open
    }
  },
  select: {
    normal: Platform.select({
      android: {
      },
      ios: {}
    }),
    // the style applied when a validation error occours
    error: Platform.select({
      android: {
        paddingLeft: 7,
      },
      ios: {}
    })
  },
  pickerTouchable: {
    normal: {
      height: 44,
      flexDirection: "row",
      alignItems: "center"
    },
    error: {
      height: 44,
      flexDirection: "row",
      alignItems: "center"
    },
    active: {
      borderBottomWidth: 1,
      borderColor: BORDER_COLOR
    }
  },
  pickerValue: {
    normal: {
      fontSize: FONT_SIZE,
      paddingLeft: 7
    },
    error: {
      fontSize: FONT_SIZE,
      paddingLeft: 7
    }
  },
  datepicker: {
    normal: {
      marginBottom: 4
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4
    }
  },
  dateTouchable: {
    normal: {},
    error: {}
  },
  dateValue: {
    normal: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      padding: 7,
      marginBottom: 5
    },
    error: {
      color: ERROR_COLOR,
      fontSize: FONT_SIZE,
      padding: 7,
      marginBottom: 5
    }
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center"
  },
  button: {
    height: 36,
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  }
});

module.exports = stylesheet;
