import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export const AuthButton = ({ text, icon, backgroundColor, textColor }) => {
  return (
    <TouchableOpacity style={[styles.button,  {backgroundColor} ]} >
      
      {/* ICONO */}
      <View style={styles.iconContainer}>
        {icon}
      </View>

      {/* TEXTO */}
      <Text style={[styles.text, { color: textColor }]}>
        {text}
      </Text>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    position: 'relative',
    marginLeft:'5%',
    marginRight:'5%',
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    // Android
    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  iconContainer: {
    position: 'absolute',
    left: 20,
    width: 30,
    alignItems: 'center',
  },
});
