import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  headerKP: {
    backgroundColor: '#F8F8F8',
    height: 110,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatarKP: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 20,
  },
  bodyKP: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  name: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Bahnschrift',
    fontWeight: 'bold',
  },
  buttonContainerKP: {
    marginTop: 10,
    height: 38,
    width: 340,
    backgroundColor: 'white',
    borderWidth: .4,
    borderColor: '#c5002f',
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
  },
  buttonColorKP: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Bahnschrift',
    marginLeft: 10,
  },
  buttonColorDataKP: {
    color: 'black',
    fontFamily: 'Bahnschrift',
  },
  inputStyleIcon: {
    backgroundColor: "white",
    padding: 5,
    right: 5,
    position: 'absolute',
    width: "4%",
    fontFamily: 'Bahnschrift',
    color: "#c5002f",
    fontWeight: "bold",
    fontSize: 18,
  },      
  disabled: {
    borderColor: '#c2c0c0',
    marginTop: 10,
    height: 38,
    width: 340,
    backgroundColor: 'white',
    borderWidth: .4,
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
  },
  buttonGuncelleKP :{
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Bahnschrift',
  },
  cikis: {
    marginTop: 10,
    height: 38,
    width: 340,
    backgroundColor: '#c5002F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
  },
  registerColorKP: {
    fontFamily: 'Bahnschrift',
    marginTop: 10,
  },
});
