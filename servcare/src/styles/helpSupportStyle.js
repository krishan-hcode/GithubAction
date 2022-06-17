import { StyleSheet } from 'react-native';
import Colors from '../utilites/Colors';

export const helpSupportStyles = StyleSheet.create({
  header: {
    backgroundColor: '#F0ECE7',
    height: '8%',
    color: Colors.BLACK,
    paddingTop: 15,
    paddingHorizontal: 20
  },

  headerTitle: {
    color: Colors.BLACK,
    fontSize: 22,
    textAlign: 'center'
  },

  animationView: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F0ECE7',
    height: '65%'
  },

  contentContainer: {
    position: 'absolute',
    height: '50%',
    width: '100%',
    paddingTop: 50,
    top: '40%',
    backgroundColor: Colors.WHITE
  },

  askQuestionBox: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 25,
    width: '100%',
    top: '37%',
    zIndex: 10
  },

  askQuestionTextInput: {
    fontFamily: 'Montserrat-Regular',
    paddingHorizontal: 15,
    color: Colors.BLACK,
    height: 50,
    backgroundColor: Colors.WHITE,
    width: 290,
  },

  goButton: {
    backgroundColor: Colors.GREEN_100,
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center'
  },

  chatButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '10%'
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  chatButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 14,
    backgroundColor: Colors.WHITE,
    borderRadius: 4,
    borderColor: Colors.GREEN_100,
    borderWidth: 1
  },

  appButtonText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    paddingHorizontal: 10,
    color: Colors.GREEN_100,
    alignSelf: 'center',
  },

  faqContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    borderColor: Colors.GRAY,
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20
  },

  question: {
    width: '90%'
  },

  faqHeader: {
    paddingHorizontal: 25,
    paddingBottom: 20,
    fontSize: 16
  },
});
