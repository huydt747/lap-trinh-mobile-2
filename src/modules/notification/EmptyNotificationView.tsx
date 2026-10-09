import { Image } from 'expo-image';
import { ArrowLeft, MoreVertical } from 'lucide-react-native';
import {
  Pressable,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export interface EmptyNotificationViewProps {
  onBack?: () => void;
  onMorePress?: () => void;
}

export function EmptyNotificationView({
  onBack,
  onMorePress,
}: EmptyNotificationViewProps) {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Top Header Bar */}
      <View className="flex-row items-center justify-between px-5 pt-2 pb-4">
        <View className="flex-row items-center">
          <Pressable
            onPress={onBack}
            hitSlop={15}
            className="w-9 h-9 justify-center items-start active:opacity-70"
          >
            <ArrowLeft size={24} color="#120D26" />
          </Pressable>
          <Text className="text-[24px] font-bold text-[#120D26] ml-2">
            Notification
          </Text>
        </View>

        <Pressable
          onPress={onMorePress}
          hitSlop={15}
          className="w-9 h-9 justify-center items-end active:opacity-70"
        >
          <MoreVertical size={24} color="#120D26" />
        </Pressable>
      </View>

      {/* Center Empty State Content */}
      <View className="flex-1 items-center justify-center px-8 pb-16">
        <Image
          source={require('@/assets/images/bell.png')}
          style={{ width: 175, height: 195 }}
          contentFit="contain"
          priority="high"
        />

        {/* Heading */}
        <Text className="text-[18px] font-bold text-[#120D26] text-center mt-7">
          No Notifications!
        </Text>

        {/* Subtitle */}
        <Text className="text-[15px] text-[#747688] text-center leading-6 mt-3 max-w-[280px]">
          {'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit sed do eiusmod tempor'}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default EmptyNotificationView;

