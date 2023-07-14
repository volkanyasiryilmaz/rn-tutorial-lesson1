import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginBottom: 30
      },
    headerLeft: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
     
    },
    profilePicture:{
      width: 40,
      height: 40,
      backgroundColor: '#999',
      borderRadius: 20,
      marginRight: 12,
    },
    profilePictureImage: {
        width:40,
        height:40,
        borderRadius: 20
    },  
    name: {
        fontWeight: 500,
        fontSize: 16
    },
    headerRight:{
      flexDirection: 'row'
    },
    searchIcon:{
        height: 50,
        width: 40,
        borderRadius: 30,
        marginRight: 8,
        alignItems: "center",
      justifyContent: "center"
    },
    searchIconImage: {
      width: 25,
      height: 25,
     
    },  
    noticeIcon: {
        height: 50,
        width: 40,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    noticeIconImage: {
        height: 25,
        width: 25, 
    },
    titleMain:{
      fontSize: 22,
      fontWeight: 500,
      width: '100%',
      textAlign : 'left',
      color: '#353946',
    },
    upcomingContainer:{
      width: '100%',
      marginBottom: 30
    },
    upcoming:{
      backgroundColor: '#6B8CFF',
      padding: 16,
      borderRadius: 12,
      marginTop: 30
    },
    upcomingHead:{
       flexDirection: 'row',
       justifyContent: 'space-between'
    },
    upcomingHeadLeft:{
        flexDirection: 'row'
    },
    doctorInfo:{
      justifyContent: 'space-between'
    },
    doctorImage: {
      width: 75,
      height: 75,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#f1f1f1',
      marginRight: 12
    },
    doctorName: {
        color: '#f1f1f1',
        fontWeight: 500,
        fontSize: 16,
    },
    doctorDegree: {
      color: '#f1f1f1',
      fontWeight: 400,
      fontSize: 14,
    },
    doctorRating: {
      flexDirection: 'row',
      backgroundColor: '#f1f1f1',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      width: 50
      },
    starIcon:{
      height: 12,
      width: 12,
      marginRight: 4
    },
    ratingNumber:{
      fontWeight: 700,
    },
    doctorMenu:{
      backgroundColor: '#7897FF',
      height: 36,
      width: 40,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',   
    },
    doctorMenuIcon:{
      height: 10,
      width: 20,
      tintColor: '#f1f1f1'
    },
    upcomingBottom: {
      marginTop: 32,
      backgroundColor: '#5E7DE9',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 12
    },
    upcomingBottomLeft :{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',
    },
    calendarIcon:{
      width: 22,
      height: 22,
      marginRight: 4,
      tintColor: '#f1f1f1'
    },
    upcomingBottomRight :{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center'
    },
    timeIcon: {
      width: 22,
       height: 22,
       marginRight: 4,
       tintColor: '#f1f1f1'
    },
    timeText:{
      color: '#f1f1f1',
      fontWeight: 400
    },
    medicinesContainer:{
      width: '100%'
    
    },
    medicineContainer: {
      backgroundColor: '#f6f7f9',
      paddingHorizontal:16,
      paddingVertical: 12,
      borderRadius:12,
      justifyContent:'space-between',
      width: 175,
      marginRight: 16
      
    },
    medicineImage:{
      backgroundColor: '#87C115',
      width: 45,
      height: 45,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16
    },
    medicineIcon: {
      tintColor: '#f1f1f1',
      height: 22,
      width: 22,
    },
    medicineName: {
      fontSize: 22,
      marginBottom: 4,
      color: '#363942',
      
    },
    medicineTitle:{
      fontSize : 16,
      marginBottom: 12,
      color: '#848994'
    },
    medicineTime:{
      backgroundColor: '#6B8CFF',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 6,
      borderRadius: 16
    },
    medicineTimeText:{
      color:'#f1f1f1',
      marginRight: 8,
    },
    medicineTimeIcon:{
      width: 16,
      height: 16,
      tintColor: '#f1f1f1'
    },
    medicineScroll:{
      marginTop: 30
    }



    
  });
  