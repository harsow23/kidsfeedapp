import React from 'react';
import { View, Text, StyleSheet, FlatList,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const NotificationScreen = () => {
  
  const notifications = [
    { id: '1', title: 'New Songs Available', message: 'Check out the latest Songs added to the app!' },
    { id: '2', title: 'New Video Uploaded', message: 'Watch the new video added to your favorite playlist.' },
    { id: '3', title: 'Special Event Alert', message: 'Join us for a special event happening this weekend!' },
  
  ];

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/20/18/db/2018db3bb5bd8e2e8e88d386fa56e5b7.jpg' }} 
      style={styles.background}
    >
    <View style={styles.container}>
    <View style={styles.iconContainer}>
                <Icon name="bell" size={24} color="purple" /> 
                </View>
      <Text style={styles.title}>Pop-ups</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notification}>
            
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationMessage}>{item.message}</Text>
          </View>
        )}
      />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    top:130,
    alignItems:'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'purple'
  },
  notification: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 5,
    alignItems:'center'
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'purple'
  },
  notificationMessage: {
    fontSize: 16,
    color:'black'
  },
});

export default NotificationScreen;
