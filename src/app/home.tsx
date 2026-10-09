import { BottomTabBar, HomeView, TabType } from '@/modules/home';
import { SideMenu } from '@/modules/menu';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  Pressable,
  StatusBar,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.75; // Bề rộng menu (75% màn hình)

export default function HomeScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('Explore');
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
  const translateX = drawerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, DRAWER_WIDTH],
  });

  return (
    <View className="flex-1 bg-white overflow-hidden">
      <StatusBar barStyle="dark-content" />

      {/* Khung chứa cả Side Menu & Main Content cùng trượt */}
      <Animated.View
        className="flex-1 flex-row w-full h-full"
        style={{ transform: [{ translateX }] }}
      >
        {/* 1. Side Menu nằm cố định ở lề ngoài bên trái (-DRAWER_WIDTH) */}
        <View
          className="absolute top-0 bottom-0 h-full z-20 bg-white shadow-md"
          style={{ width: DRAWER_WIDTH, left: -DRAWER_WIDTH }}
        >
          <SideMenu
            onClose={closeDrawer}
            onSignOut={handleSignOut}
            width={DRAWER_WIDTH}
          />
        </View>

        {/* 2. Màn hình chính chiếm full width */}
        <View className="flex-1 w-full h-full bg-white flex-col">
          {/* Lớp phủ mờ chặn thao tác trên màn hình chính khi menu mở */}
          {isDrawerOpen && (
            <Pressable
              onPress={closeDrawer}
              className="absolute inset-0 bg-black/10 z-10"
            />
          )}

          {/* Màn hình chính với nút hamburger toggle */}
          <HomeView
            onOpenMenu={toggleDrawer}
            onPressNotification={() => router.push('/notification')}
          />

          {/* Bottom Tab Bar hiển thị cố định ở chân màn hình */}
          <BottomTabBar
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </View>
      </Animated.View>
    </View>
  );
}