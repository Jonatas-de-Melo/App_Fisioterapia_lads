import { StyleSheet, Platform } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#00005D',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  backButton: {
    width: 22,
    height: 22,
  },
  backButtonImage: {
    width: 22,
    height: 22,
  },
  image: {
    width: 191,
    height: 71,
    marginBottom: 50,
  },
  textLogin: {
    fontSize: 18,
    marginBottom: 20,
    // position: 'absolute',
    marginRight: '35%',
    fontWeight: 'bold',
    // fontFamily: 'Inter-Bold',
    color: '#484848',
  },
  input: {
    width: '80%',
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    boxShadow: '0px 2px 4px #00000040',
    elevation: 5,
    // fontFamily: 'Inter-Regular',
    fontStyle: 'italic',
  },
  fakeInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
  },
  falsoinputtexto: {
    fontSize: 14,
    color: '#565656',
    position: 'absolute',
    left: 10,
    top: 10,
    // fontFamily: 'Inter-Regular',
  },
  containerbotao: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    paddingRight: 10,
  },
  botaomf: {
    width: 25,
    padding: 5,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  textomf: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    // fontFamily: 'Inter-Regular',
  },
  espacoPicker: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingLeft: 100,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    boxShadow: '0px 2px 4px #00000040',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontStyle: 'bold',
  },
  estadocivil: {
    height: 40,
    width: '100%',
    alignItems: 'center',
  },
  pickerTexto: {
    position: 'absolute',
    left: 3,
    top: 5,
    fontSize: 15,
    color: '#565656',
    backgroundColor: '#fff',
    padding: '0px 10px',
    fontStyle: 'italic',
  },
  loginButton: {
    width: '80%',
    height: 58,
    borderRadius: 10,
    backgroundColor: '#00005D',
    padding: 10,
    borderRadius: 10,
    border: '1px solid #00000033',
    boxShadow: '4px 4px #00000040',
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 5,
    fontWeight: 'bold',
    // fontFamily: 'Inter-Bold',
  },
  viewsign:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'static',
    top: 140,

  },
  
});
