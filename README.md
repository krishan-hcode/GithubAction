# servcare-mobile
### Installing and running

> Note: Make sure the [servcare-mobile](https://github.com/impactility-dev/servcare-mobile)   projects are running on the local machine.

Install dependencies for the project:

```
npm install

```
npx react-native start

``
#run command in new tab
react-native run-android

# install ADB on Windows, macOS, and Linux without Android sdk
Link : https://www.xda-developers.com/install-adb-windows-macos-linux/

1. Download the Android SDK Platform Tools ZIP file for Windows, macOS, and Linux from : https://developer.android.com/studio/releases/platform-tools.html

2. Extract the archive to a folder on your desktop or laptop
3. Open in  Terminal right click on Platform Tools folder
4. Enable USB Debugging on your Android device and connect it.
   exp : 'https://androidcommunity.com/how-to-getting-adb-on-your-pc-without-installing-full-android-sdk-20180307/' 
5. run command 'adb devices'
# install ADB with command on Linux

1. sudo apt-get install android-tools-adb
2. adb devices


```
#run project on real device
Connect the device to the computer
Link : https://reactnative.dev/docs/running-on-device
run "adb devices"
Run "adb reverse tcp:8081 tcp:8081"
Run "react-native run-android"
Enable Live Reload in the application
```

### Run/install/debug Android applications over Wi-Fi
Enable the Wireless debugging option
1. Connect the device via USB
2. run adb devices
3. run adb tcpip 5555
4. run adb connect <DEVICE_IP_ADDRESS>:5555
5. run react-native run-android

### Installing the native stack navigator library
Link : https://reactnavigation.org/docs/getting-started

```
npm install @react-navigation/native
```
npm install @react-navigation/native-stack

```
npm install react-native-screens react-native-safe-area-context
```
npx react-native start
```
#run command in new tab
react-native run-android

```
### Generate React Native Debug APK for Android
Link :`https://stackoverflow.com/questions/35283959/build-and-install-unsigned-apk-on-device-without-the-development-server`
```
We will generate this apk by following simple 4 steps. These steps are given below are only for the first time build process.

```
### To Build APK steps (One time only)
```
1. Asset Directory 
2. Blank File (index.android)
```
### To Generate new build every time
```
3. App Bandle
4. Generate APK

```
### Step:1 – Asset Directory
```
First of all, we will create an asset directory. open your terminal in `YourProject/android/app/src/main` and run the following command.

#run the command
mkdir android/app/src/main/assets

```
### Step:2 – Blank File
```
#run the command
touch android/app/src/main/assets/index.android

```
### Step3: – App Bundle

```
#run the command 
rm -rf android/app/build && react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

```
### Step:4 – Generate APK
```
#run the command
cd android && ./gradlew assembleDebug && cd ../

This command will take some time and then it will create an APK file. You can access this APK file in YourProject/android/app/build/outputs/apk/debug/ with the name app-debug.apk

`Copy this file and install in your android device`

```

### Generate React Native Release APK for Android
```
### To Build APK steps (One time only)
```
1. Generate a keystore
2. Setting up Gradle variables
3. Add signing config in app’s Gradle config
4. Asset Directory (One Time)
5. Blank File (index.android)

```
### To Generate new build every time
```
6. App Bandle
7. Generate APK

```
### Step 1. Generate a keystore
```
You will need a Java generated signing key which is a keystore file used to generate a React Native executable binary for Android. You can create one using the keytool in the terminal with the following command

#run the command
sudo keytool -genkey -v -keystore your_key_name.keystore -alias your_key_alias-alias -keyalg RSA -keysize 2048 -validity 10000

You can change your_key_name with any name you want, as well as your_key_alias. This key uses key-size 2048, instead of default 1024 for security reason.

```
### Step:2 – Setting up Gradle variables
```
1. Copy your my-app-key.keystrore file and paste it in YourProject\android\app directory.
2 .Open android\gradle.properties file and add the following code.

MYAPP_UPLOAD_STORE_FILE=my-app-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-app-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****

-Replace these value according to your keystore file.

```
### Step:3 – Add signing config in app’s Gradle config

```
Now it’s time to setup release builds to be signed using upload key. Open file YourProject\android\app\build.gradle and the following code.

 android {
     …
     defaultConfig { … }
     signingConfigs {
         release {
             if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                 storeFile file(MYAPP_UPLOAD_STORE_FILE)
                 storePassword MYAPP_UPLOAD_STORE_PASSWORD
                 keyAlias MYAPP_UPLOAD_KEY_ALIAS
                 keyPassword MYAPP_UPLOAD_KEY_PASSWORD
             }
         }
     }
     buildTypes {
         release {
             …
             signingConfig signingConfigs.release
         }
     }
 }

 ```
### Call 1 to 3 steps of Generate Debug APK for Android
### Step:7 – Generate Release APK
```
#run the command
cd android
./gradlew assembleRelease

# Generating the release AAB
./gradlew bundleRelease 

This command will take some time and then it will create a new Release APK file. You can access this APK file in YourProject/android/app/build/outputs/apk/release/ with the name app-release.apk

`Copy this file and install in your android device or upload it on play store`

```


###  react-native-dropdown-picker
Link : https://hossein-zare.github.io/react-native-dropdown-picker-website/docs

### react-native-geolocation
Link : https://github.com/react-native-geolocation/react-native-geolocation

###  react-native-search-bar
Link : https://www.npmjs.com/package/react-native-dynamic-search-bar

### react-native-date-picker
Link : https://www.npmjs.com/package/react-native-date-picker

### react-native-tooltip
Link : https://reactnativeelements.com/docs/2.3.2/tooltip


###  react-native-permissions
Link 1 : https://www.npmjs.com/package/react-native-permissions
Link 2 : https://blog.logrocket.com/react-native-permissions/

###  react-native-document-picker
Link 1 : https://www.npmjs.com/package/react-native-document-picker
Link 2 : https://dev-yakuza.posstree.com/en/react-native/react-native-image-picker/
Link 3 : https://www.npmjs.com/package/react-native-image-picker


###  react-native-simple-toast
Link : https://www.npmjs.com/package/react-native-simple-toast






