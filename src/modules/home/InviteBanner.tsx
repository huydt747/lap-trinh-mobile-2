import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';

export interface InviteBannerProps {
  onPressInvite?: () => void;
}

export function InviteBanner({ onPressInvite }: InviteBannerProps) {
  return (
    <View className="mx-5 mb-7 rounded-2xl bg-[#D2F5F3] p-4 flex-row items-center justify-between overflow-hidden">
      <View className="flex-1 pr-3">
        <Text className="text-[18px] font-bold text-[#120D26] mb-1">
          Invite your friends
        </Text>
        <Text className="text-[13px] text-[#484D70] mb-3">
          Get $20 for ticket
        </Text>
        <Pressable
          onPress={onPressInvite}
          className="bg-[#00F8FF] rounded-lg px-4 py-2 self-start active:opacity-80"
        >
          <Text className="text-white font-bold text-[12px] tracking-wider">
            INVITE
          </Text>
        </Pressable>
      </View>
      <Image
        source={{ uri: 'https://placehold.co/300x200/00F8FF/FFFFFF' }}
        style={{ width: 100, height: 80, borderRadius: 12 }}
        contentFit="cover"
      />
    </View>
  );
}

export default InviteBanner;
