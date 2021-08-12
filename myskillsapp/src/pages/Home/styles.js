import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 20,
  },

  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 20 : 15,
    marginTop: 30,
    borderRadius: 7,
  },

  greeting: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
});
