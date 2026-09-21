import { HomeView } from '@/modules/home';
import { SideMenu } from '@/modules/menu';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Pressable,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.72;

export default function HomeScreen() {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerAnim = useRef(new Animated.Value(0)).current;

  const openDrawer = () => {
    setIsDrawerOpen(true);
    Animated.timing(drawerAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(drawerAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setIsDrawerOpen(false);
    });
  };

  const handleSignOut = () => {
    closeDrawer();
    router.replace('/signin');
  };

  // Interpolated animated values for 3D drawer effect
  const homeTranslateX = drawerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, DRAWER_WIDTH],
  });

  const homeScale = drawerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.88],
  });

  const homeBorderRadius = drawerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 36],
  });

  return (
    <View style={styles.rootContainer}>
      <StatusBar barStyle={isDrawerOpen ? 'dark-content' : 'light-content'} />

      {/* Side Drawer Menu Module */}
      <View style={[styles.drawerWrapper, { width: DRAWER_WIDTH }]}>
        <SideMenu
          onClose={closeDrawer}
          onSignOut={handleSignOut}
          width={DRAWER_WIDTH}
        />
      </View>

      {/* Main Home Screen Module */}
      <Animated.View
        style={[
          styles.mainHomeContainer,
          {
            transform: [
              { translateX: homeTranslateX },
              { scale: homeScale },
            ],
            borderRadius: homeBorderRadius,
          },
        ]}
      >
        {/* Backdrop overlay to close drawer when tapping home preview */}
        {isDrawerOpen && (
          <Pressable
            onPress={closeDrawer}
            style={styles.drawerBackdrop}
          />
        )}

        {/* Modular Home Screen Component */}
        <HomeView onOpenMenu={openDrawer} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  drawerWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
  },
  mainHomeContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: { width: -4, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 10,
    overflow: 'hidden',
  },
  drawerBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: 10,
  },
});
