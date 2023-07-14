
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const noticeIcon    = require('./images/notice-icon.png')
const searchIcon    = require('./images/search-icon.png')
const doctorIcon    = require('./images/doctor.png');
const starIcon      = require('./images/star-icon.png')    
const menuIcon      = require('./images/menu-icon.png')
const calendarIcon  = require('./images/calendar-icon.png')
const timeIcon      = require('./images/time-icon.png')
const medicineIcon  = require('./images/medicine-icon.png')


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.profilePicture} onPress={() => alert("2313")}>
            <Image
              style={styles.profilePictureImage}
              source={{
                uri: 'https://cdn.r10.net/image.php?u=163981'
              }}
            />
          </TouchableOpacity>
          <Text style={styles.name}>Volkan Yasir Yılmaz</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.searchIcon}>
            <Image
              style={styles.searchIconImage}
              source={searchIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.noticeIcon}>
            <Image
              style={styles.noticeIconImage}
              source={noticeIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View  style={styles.upcomingContainer}>
        <Text style={styles.titleMain}>Yaklaşan Randevu</Text>
        <View style={styles.upcoming}>
            <View style={styles.upcomingHead}>
              <View style={styles.upcomingHeadLeft}>
                <Image
                  style={styles.doctorImage}
                  source={doctorIcon}
                />
                <View style={styles.doctorInfo}>
                    <Text style={styles.doctorName}>Dr. Oğuzhan Akbolat</Text>
                    <Text style={styles.doctorDegree}>Senior Cerrah</Text>
                    <View style={styles.doctorRating}>
                      <Image
                        style={styles.starIcon}
                        source={starIcon}
                      />
                      <Text style={styles.ratingNumber}>5.0</Text>
                    </View>
                </View>
              </View>
              <TouchableOpacity style={styles.doctorMenu}>
                <Image 
                 style={styles.doctorMenuIcon}
                 source={menuIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.upcomingBottom}>
              <View style={styles.upcomingBottomLeft}>
                <Image
                style={styles.calendarIcon}
                  source={calendarIcon}
                />
                <Text style={styles.timeText}>Bugün, 14 Temmuz</Text>
              </View>
              <View  style={styles.upcomingBottomRight}>
                <Image
                style={styles.timeIcon}
                source={timeIcon}
                />
                
                <Text style={styles.timeText}>10:00 - 11:00</Text>
              </View>
            </View>
        </View>
      </View>
      <View style={styles.medicinesContainer}>
              <Text style={styles.titleMain}>Today's Medicines</Text>
              <ScrollView horizontal style={styles.medicineScroll}>
                <View style={styles.medicineContainer}>
                  <View style={styles.medicineImage}>
                    <Image
                      source={medicineIcon}
                      style={styles.medicineIcon}
                    />
                  </View>
                  <Text style={styles.medicineName}>Coldact</Text>
                  <Text style={styles.medicineTitle}>3 capsules / day</Text>
                  <View style={styles.medicineTime}>
                    <Text style={styles.medicineTimeText}>Taken</Text>
                    <Image
                      source={timeIcon}
                      style={styles.medicineTimeIcon}
                    />
                  </View>
                </View>
                <View style={styles.medicineContainer}>
                  <View style={styles.medicineImage}>
                    <Image
                      source={medicineIcon}
                      style={styles.medicineIcon}
                    />
                  </View>
                  <Text style={styles.medicineName}>Coldact</Text>
                  <Text style={styles.medicineTitle}>3 capsules / day</Text>
                  <View style={styles.medicineTime}>
                    <Text style={styles.medicineTimeText}>Taken</Text>
                    <Image
                      source={timeIcon}
                      style={styles.medicineTimeIcon}
                    />
                  </View>
                </View>
                <View style={styles.medicineContainer}>
                  <View style={styles.medicineImage}>
                    <Image
                      source={medicineIcon}
                      style={styles.medicineIcon}
                    />
                  </View>
                  <Text style={styles.medicineName}>Coldact</Text>
                  <Text style={styles.medicineTitle}>3 capsules / day</Text>
                  <View style={styles.medicineTime}>
                    <Text style={styles.medicineTimeText}>Taken</Text>
                    <Image
                      source={timeIcon}
                      style={styles.medicineTimeIcon}
                    />
                  </View>
                </View>
              </ScrollView>
      </View>
    </View>
  );
}

