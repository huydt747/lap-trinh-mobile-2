import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

interface OnboardingSlide {
  id: string;
  image: any;
  title: string;
  description: string;
}

const ONBOARDING_DATA: OnboardingSlide[] = [
  {
    id: '1',
    image: require('@/assets/images/onboarding 1.webp'),
    title: 'Explore Upcoming and\nNearby Events',
    description:
      'In publishing and graphic design, Lorem is\na placeholder text commonly',
  },
  {
    id: '2',
    image: require('@/assets/images/onboarding 2.webp'),
    title: 'Web Have Modern Events\nCalendar Feature',
    description:
      'In publishing and graphic design, Lorem is\na placeholder text commonly',
  },
  {
    id: '3',
    image: require('@/assets/images/onboarding 3.webp'),
    title: 'To Look Up More Events or\nActivities Nearby By Map',
    description:
      'In publishing and graphic design, Lorem is\na placeholder text commonly',
  },
];

interface OnboardingScreenProps {
  onComplete?: () => void;
}

export default function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    if (index >= 0 && index < ONBOARDING_DATA.length && index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const goToSlide = (index: number) => {
    flatListRef.current?.scrollToIndex({ index, animated: true });
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < ONBOARDING_DATA.length - 1) {
      goToSlide(currentIndex + 1);
    } else {
      handleFinish();
    }
  };

  const handleSkip = () => {
    handleFinish();
  };

  const handleFinish = () => {
    if (onComplete) {
      onComplete();
    } else {
      router.replace('/signin');
    }
  };

  const currentSlide = ONBOARDING_DATA[currentIndex];

  return (
    <View className="flex-1 bg-white">
      {/* Upper Area: Phone Mockup Illustrations Carousel */}
      <View className="flex-1 justify-center items-center pt-6 ios:pt-11">
        <FlatList
          ref={flatListRef}
          data={ONBOARDING_DATA}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={16}
          onScroll={handleScroll}
          onMomentumScrollEnd={handleScroll}
          renderItem={({ item }) => (
            <View
              style={{ width }}
              className="items-center justify-center px-5 h-full"
            >
              <Image
                source={item.image}
                style={{
                  width: width * 0.85,
                  height: height * 0.52,
                  maxHeight: 460,
                }}
                contentFit="contain"
                priority="high"
              />
            </View>
          )}
        />
      </View>

      {/* Bottom Sheet: Vibrant Blue Container */}
      <View className="bg-[#5669FF] rounded-t-5xl pt-9 px-9 items-center justify-between min-h-[38vh]">
        {/* Title */}
        <Text className="text-[22px] font-bold text-white text-center leading-8 tracking-tight">
          {currentSlide.title}
        </Text>

        {/* Description */}
        <Text className="text-[15px] text-white/80 text-center leading-6 mt-4 px-3">
          {currentSlide.description}
        </Text>

        {/* Footer: Skip | Pagination Dots | Next */}
        <SafeAreaView
          edges={['bottom']}
          className="w-full mt-5 mb-6 ios:mb-3"
        >
          <View className="w-full flex-row items-center justify-between px-2">
            {/* Skip Button */}
            <Pressable
              onPress={handleSkip}
              hitSlop={15}
              className="py-2 px-3 active:opacity-60"
            >
              <Text className="text-lg text-white/70 font-medium">
                Skip
              </Text>
            </Pressable>

            {/* Pagination Dots */}
            <View className="flex-row items-center gap-2">
              {ONBOARDING_DATA.map((_, index) => {
                const isActive = index === currentIndex;
                return (
                  <Pressable
                    key={index}
                    hitSlop={8}
                    onPress={() => goToSlide(index)}
                  >
                    <View
                      className={`h-2 rounded-full ${
                        isActive ? 'w-2 bg-white' : 'w-2 bg-white/30'
                      }`}
                    />
                  </Pressable>
                );
              })}
            </View>

            {/* Next Button */}
            <Pressable
              onPress={handleNext}
              hitSlop={15}
              className="py-2 px-3 active:opacity-60"
            >
              <Text className="text-lg text-white font-semibold">
                Next
              </Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}
