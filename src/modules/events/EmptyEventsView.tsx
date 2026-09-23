import { Image } from 'expo-image';
import { ArrowLeft, ArrowRight, MoreVertical } from 'lucide-react-native';
import { useState } from 'react';
import {
  Pressable,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export type EventTabType = 'UPCOMING' | 'PAST EVENTS';

export interface EmptyEventsViewProps {
  onBack?: () => void;
  onExploreEvents?: () => void;
}

export function EmptyEventsView({
  onBack,
  onExploreEvents,
}: EmptyEventsViewProps) {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<EventTabType>('UPCOMING');

  return (
    <SafeAreaView edges={['top', 'left', 'right']} className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Top Header Bar */}
      <View className="flex-row items-center justify-between px-5 pt-2 pb-4">
        <View className="flex-row items-center">
          <Pressable
            onPress={onBack}
            hitSlop={15}
            className="w-9 h-9 justify-center items-start"
          >
            <ArrowLeft size={24} color="#120D26" />
          </Pressable>
          <Text className="text-[24px] font-bold text-[#120D26] ml-1.5">
            Events
          </Text>
        </View>

        <Pressable hitSlop={15} className="w-9 h-9 justify-center items-end">
          <MoreVertical size={24} color="#120D26" />
        </Pressable>
      </View>

      {/* Tab Switcher: UPCOMING | PAST EVENTS */}
      <View className="flex-row bg-[#F2F2F6] rounded-full mx-6 p-1 mt-2">
        <Pressable
          onPress={() => setActiveTab('UPCOMING')}
          className={`flex-1 py-3 items-center justify-center rounded-full ${
            activeTab === 'UPCOMING' ? 'bg-white' : ''
          }`}
          style={
            activeTab === 'UPCOMING'
              ? {
                  elevation: 2,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                }
              : undefined
          }
        >
          <Text
            className={`text-[14px] tracking-wide ${
              activeTab === 'UPCOMING'
                ? 'text-[#5669FF] font-bold'
                : 'text-[#747688] font-medium'
            }`}
          >
            UPCOMING
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setActiveTab('PAST EVENTS')}
          className={`flex-1 py-3 items-center justify-center rounded-full ${
            activeTab === 'PAST EVENTS' ? 'bg-white' : ''
          }`}
          style={
            activeTab === 'PAST EVENTS'
              ? {
                  elevation: 2,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                }
              : undefined
          }
        >
          <Text
            className={`text-[14px] tracking-wide ${
              activeTab === 'PAST EVENTS'
                ? 'text-[#5669FF] font-bold'
                : 'text-[#747688] font-medium'
            }`}
          >
            PAST EVENTS
          </Text>
        </Pressable>
      </View>

      {/* Center Empty State Content */}
      <View className="flex-1 items-center justify-center px-9 pb-8">
        {/* Soft Circular Backdrop */}
        <View className="w-[210px] h-[210px] rounded-full bg-[#EEF3FF] items-center justify-center">
          <Image
            source={require('@/assets/images/event.webp')}
            style={{ width: 165, height: 165 }}
            contentFit="contain"
            priority="high"
          />
        </View>

        {/* Heading */}
        <Text className="text-[24px] font-bold text-[#120D26] text-center mt-9">
          {activeTab === 'UPCOMING' ? 'No Upcoming Event' : 'No Past Event'}
        </Text>

        {/* Subtitle */}
        <Text className="text-[16px] text-[#747688] text-center leading-6 mt-3">
          {'Lorem ipsum dolor sit amet,\nconsectetur'}
        </Text>
      </View>

      {/* Bottom Action Button: EXPLORE EVENTS */}
      <View
        className="px-8"
        style={{ paddingBottom: Math.max(insets.bottom, 20) + 12 }}
      >
        <Pressable
          onPress={onExploreEvents}
          className="bg-[#5669FF] h-[58px] rounded-2xl flex-row items-center justify-center relative active:opacity-90"
          style={{
            elevation: 4,
            shadowColor: '#5669FF',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
          }}
        >
          <Text className="text-white text-[16px] font-bold tracking-widest text-center">
            EXPLORE EVENTS
          </Text>
          <View className="absolute right-3.5 w-8 h-8 rounded-full bg-[#3D56F0] items-center justify-center">
            <ArrowRight size={18} color="#FFFFFF" />
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default EmptyEventsView;
