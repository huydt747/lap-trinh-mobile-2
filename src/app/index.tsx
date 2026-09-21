import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export interface SplashScreenProps {
  onFinish?: () => void;
  nextRoute?: string;
  autoNavigate?: boolean;
  duration?: number;
}

export default function SplashScreen({
  onFinish,
  nextRoute = '/onboarding',
  autoNavigate = true,
  duration = 2000,
}: SplashScreenProps) {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.92)).current;

  useEffect(() => {
    // Smooth entrance animation for the logo
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 7,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();

    if (!autoNavigate || (!onFinish && !nextRoute)) return;

    const timer = setTimeout(() => {
      if (onFinish) {
        onFinish();
      } else if (nextRoute) {
        try {
          router.replace(nextRoute as any);
        } catch {
          // Route fallback
        }
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [fadeAnim, scaleAnim, autoNavigate, duration, nextRoute, onFinish, router]);

  const handlePress = () => {
    if (onFinish) {
      onFinish();
    } else if (nextRoute) {
      try {
        router.replace(nextRoute as any);
      } catch {}
    }
  };

  return (
    <Pressable
      className="flex-1 bg-white relative overflow-hidden"
      style={styles.container}
      onPress={handlePress}
    >
      {/* Subtle ambient pastel glow background elements matching reference */}
      <View
        pointerEvents="none"
        className="absolute rounded-full bg-[#F5E6FB] opacity-50 blur-3xl"
        style={styles.topRightGlow}
      />
      <View
        pointerEvents="none"
        className="absolute rounded-full bg-[#E8F1FD] opacity-55 blur-3xl"
        style={styles.bottomRightGlow}
      />
      <View
        pointerEvents="none"
        className="absolute rounded-full bg-[#FCEDF7] opacity-40 blur-2xl"
        style={styles.topLeftGlow}
      />

      <SafeAreaView
        className="flex-1 items-center justify-center"
        style={styles.content}
      >
        {/* Centered EventHub Logo */}
        <Animated.View
          className="items-center justify-center"
          style={[
            styles.logoWrapper,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <Image
            source={require('@/assets/images/logo.webp')}
            className="w-[250px] h-[72px]"
            style={styles.logo}
            contentFit="contain"
            priority="high"
          />
        </Animated.View>
      </SafeAreaView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: Math.min(width * 0.65, 270),
    height: 72,
  },
  topRightGlow: {
    position: 'absolute',
    top: -height * 0.1,
    right: -width * 0.25,
    width: width * 1.05,
    height: width * 1.05,
    borderRadius: (width * 1.05) / 2,
    backgroundColor: '#F5E6FB',
    opacity: 0.5,
    ...Platform.select({
      web: {
        filter: 'blur(80px)',
      } as any,
    }),
  },
  bottomRightGlow: {
    position: 'absolute',
    bottom: -height * 0.08,
    right: -width * 0.15,
    width: width * 0.95,
    height: width * 0.95,
    borderRadius: (width * 0.95) / 2,
    backgroundColor: '#E8F1FD',
    opacity: 0.55,
    ...Platform.select({
      web: {
        filter: 'blur(90px)',
      } as any,
    }),
  },
  topLeftGlow: {
    position: 'absolute',
    top: height * 0.05,
    left: -width * 0.35,
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: (width * 0.7) / 2,
    backgroundColor: '#FCEDF7',
    opacity: 0.4,
    ...Platform.select({
      web: {
        filter: 'blur(70px)',
      } as any,
    }),
  },
});