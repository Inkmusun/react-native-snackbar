import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Snackbar from 'react-native-snackbar';

import App from '../App';

describe('Snackbar example app', () => {
  it('renders without crashing', () => {
    Snackbar.emitter = { addListener: jest.fn() };
    renderer.create(<App />);
  });
});
