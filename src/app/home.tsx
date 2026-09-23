import { HomeView } from '@/modules/home';
import { SideMenu } from '@/modules/menu';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  Pressable,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.75; // Bề rộng menu (75% màn hình)

export default function HomeScreen() {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerAnim = useRef(new Animated.Value(0)).current;

  // Hàm mở menu trượt
  const openDrawer = () => {
    setIsDrawerOpen(true);
    Animated.timing(drawerAnim, {
      toValue: 1,
      duration: 250,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  };

  // Hàm đóng menu trượt
  const closeDrawer = () => {
    Animated.timing(drawerAnim, {
      toValue: 0,
      duration: 220,
      easing: Easing.inOut(Easing.cubic),
      useNativeDriver: true,
    }).start(() => {
      setIsDrawerOpen(false);
    });
  };

  // Nút hamburger chuyển đổi bật/tắt menu
  const toggleDrawer = () => {
    if (isDrawerOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  };

  const handleSignOut = () => {
    closeDrawer();
    router.replace('/signin');
  };

  // --- Animation trượt song song (Push style) ---
  // Cả Menu và Màn hình chính sẽ cùng trượt một khoảng DRAWER_WIDTH sang bên phải
  const translateX = drawerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, DRAWER_WIDTH],
  });

  return (
    <View style={styles.rootContainer}>
      <StatusBar barStyle={isDrawerOpen ? 'dark-content' : 'dark-content'} />

      {/* Khung chứa cả Side Menu & Main Content cùng trượt */}
      <Animated.View
        style={[
          styles.animatedContainer,
          {
            transform: [{ translateX }],
          },
        ]}
      >
        {/* 1. Side Menu nằm cố định ở lề ngoài bên trái (-DRAWER_WIDTH) */}
        <View style={[styles.drawerWrapper, { width: DRAWER_WIDTH, left: -DRAWER_WIDTH }]}>
          <SideMenu
            onClose={closeDrawer}
            onSignOut={handleSignOut}
            width={DRAWER_WIDTH}
          />
        </View>

        {/* 2. Màn hình chính chiếm full width */}
        <View style={styles.mainHomeContainer}>
          {/* Lớp phủ mờ chặn thao tác trên màn hình chính khi menu mở */}
          {isDrawerOpen && (
            <Pressable
              onPress={closeDrawer}
              style={styles.drawerBackdrop}
            />
          )}

          {/* Màn hình chính với nút hamburger toggle */}
          <HomeView onOpenMenu={toggleDrawer} />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  animatedContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  drawerWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    height: '100%',
    zIndex: 2,
    backgroundColor: '#FFFFFF',
    // Đổ bóng ở mép nối giữa Side Menu và Main Content
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  mainHomeContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  drawerBackdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    zIndex: 10,
  },
});