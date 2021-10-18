import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height:'100%',
        flexDirection:'column',
        padding:20,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:80,
        color:'grey'
    },
    additionalContainer:{
        flexDirection:'row',
        margin:5
    },
    additionalText:{
        margin:5,
        fontSize:20,
        color:'grey',
        textDecorationLine: 'underline'
    }
});
  
export default styles;