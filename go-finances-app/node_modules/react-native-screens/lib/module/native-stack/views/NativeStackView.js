function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { StackActions, useTheme } from '@react-navigation/native';
import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native'; // @ts-ignore Getting private component

import AppContainer from 'react-native/Libraries/ReactNative/AppContainer';
import { Screen as ScreenComponent, ScreenStack } from 'react-native-screens';
import HeaderConfig from './HeaderConfig';
const Screen = ScreenComponent;
const isAndroid = Platform.OS === 'android';
let Container = View;

if (__DEV__) {
  const DebugContainer = props => {
    const {
      stackPresentation,
      ...rest
    } = props;

    if (Platform.OS === 'ios' && stackPresentation !== 'push') {
      return /*#__PURE__*/React.createElement(AppContainer, null, /*#__PURE__*/React.createElement(View, rest));
    }

    return /*#__PURE__*/React.createElement(View, rest);
  }; // @ts-ignore Wrong props


  Container = DebugContainer;
}

export default function NativeStackView({
  state,
  navigation,
  descriptors
}) {
  const {
    key,
    routes
  } = state;
  const {
    colors
  } = useTheme();
  return /*#__PURE__*/React.createElement(ScreenStack, {
    style: styles.container
  }, routes.map(route => {
    const {
      options,
      render: renderScene
    } = descriptors[route.key];
    const {
      gestureEnabled,
      replaceAnimation = 'pop',
      stackPresentation = 'push',
      stackAnimation,
      contentStyle
    } = options;
    const viewStyles = [styles.container, stackPresentation !== 'transparentModal' && {
      backgroundColor: colors.background
    }, contentStyle];
    return /*#__PURE__*/React.createElement(Screen, {
      key: route.key,
      style: StyleSheet.absoluteFill,
      gestureEnabled: isAndroid ? false : gestureEnabled,
      replaceAnimation: replaceAnimation,
      stackPresentation: stackPresentation,
      stackAnimation: stackAnimation,
      onWillAppear: () => {
        navigation.emit({
          type: 'transitionStart',
          data: {
            closing: false
          },
          target: route.key
        });
      },
      onWillDisappear: () => {
        navigation.emit({
          type: 'transitionStart',
          data: {
            closing: true
          },
          target: route.key
        });
      },
      onAppear: () => {
        navigation.emit({
          type: 'appear',
          target: route.key
        });
        navigation.emit({
          type: 'transitionEnd',
          data: {
            closing: false
          },
          target: route.key
        });
      },
      onDisappear: () => {
        navigation.emit({
          type: 'transitionEnd',
          data: {
            closing: true
          },
          target: route.key
        });
      },
      onDismissed: () => {
        navigation.emit({
          type: 'dismiss',
          target: route.key
        });
        navigation.dispatch({ ...StackActions.pop(),
          source: route.key,
          target: key
        });
      }
    }, /*#__PURE__*/React.createElement(HeaderConfig, _extends({}, options, {
      route: route
    })), /*#__PURE__*/React.createElement(Container, {
      style: viewStyles // @ts-ignore Wrong props passed to View
      ,
      stackPresentation: stackPresentation
    }, renderScene()));
  }));
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
//# sourceMappingURL=NativeStackView.js.map