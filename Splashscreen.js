
import { Image, View,StyleSheet } from 'react-native';

const SplashScreen =() => {


 return(
  <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <Image source={require('./assets/icon1.png' )}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
        </View>
      </View>
 );
};
export default SplashScreen

const styles = StyleSheet.create(
  {
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },

    SplashScreen_RootView:
    {
      justifyContent: 'center',
      flex: 1,
      margin: 10,
      position: 'absolute',
      width: '100%',
      height: '100%',
    },

    SplashScreen_ChildView:
    {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      flex: 1,
    },
    
  });