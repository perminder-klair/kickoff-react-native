# React Native Template

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions before proceeding.

## Installation

To get started, clone the repository and install the dependencies:

```bash
bundle install # you need to run this only once in your project.
bundle exec pod install # Install Cocoapods
npm install # Install node modules
```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
npm start -- --reset-cache
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
npm run android
```

### For iOS

```bash
# using npm
npm run ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Libraries used

- zustand (state management)
- apollo-client (data fetching)
- gluestack-ui (styling framework)
- react-hook-form + yup (form management and validation)
- daysjs, lodash (helper libraries)
- eslint and prettier (code formatting)

## Debug

Clear watchman cache (in case some random issues)

```bash
watchman watch-del-all
```

## TODO

- [ ] Image slider
- [ ] skeleton loading
