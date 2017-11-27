const smartgrid = require('smart-grid');

const settings = {
  filename: "_smart-grid",
  outputStyle: 'scss', /* less || scss || sass || styl */
  columns: 8,
  offset: '0px',
  container: {
    maxWidth: '1240px',
    fields: '20px'
  },
  oldSizeStyle: false,
  breakPoints: {
    md: {
      'width': '992px',
      'fields': '20px'
    },
    sm: {
      'width': '768px',
      'fields': '15px'
    },
    xs: {
      'width': '544px',
      'fields': '15px'
    },
    xxs: {
      'width': '420px',
      'fields': '15px'
    }
  }
};

smartgrid('./src/precss', settings);