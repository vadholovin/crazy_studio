const smartgrid = require('smart-grid');

const settings = {
  filename: "_smart-grid",
  outputStyle: 'scss', /* less || scss || sass || styl */
  columns: 18,
  offset: '20px',
  container: {
    maxWidth: '1280px',
    fields: '20px'
  },
  oldSizeStyle: false,
  breakPoints: {
    lg: {
      'width': '1200px',
      'fields': '20px'
    },
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