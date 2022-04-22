import theme from 'styled-theming';

export const buttonBackgroundColor = theme('mode', {
  light: '#cc0000',
  dark: '#f0f8ff'
});

export const buttonTextColor = theme('mode', {
  light: 'white',
  dark: '#800080'
});

export const leftBackgroundColor = theme('mode', {
  light: '#cecece',
  dark: 'white'
});

export const leftTextColor = theme('mode', {
  light: ' #2f4f4f',
  dark: ' #696969'
});

export const rightBackgroundColor = theme('mode', {
  light: 'white',
  dark: '#008080'
});

export const rightTextColor = theme('mode', {
  light: '  #000000',
  dark: ' white'
});
