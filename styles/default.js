import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleWrap: {
    margin: 25,
    padding: 15,
    borderColor: '#383838',
    borderBottomWidth: 2,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#383838',
  },
  input: {
    padding: 10,
    backgroundColor: '#e8e8e8',
    width: '80%',
    margin: 15,
  }
});

export default styles;