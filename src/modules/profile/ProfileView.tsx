import { Image } from 'expo-image';
import {
  ArrowLeft,
  ChevronDown,
  Pencil,
  SquarePen,
} from 'lucide-react-native';
import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export interface ProfileViewProps {
  onBack?: () => void;
  onEditProfile?: () => void;
  onChangeInterest?: () => void;
}

const INTERESTS = [
  { id: '1', name: 'Games Online', bg: 'bg-[#5669FF]' },
  { id: '2', name: 'Concert', bg: 'bg-[#EE544A]' },
  { id: '3', name: 'Music', bg: 'bg-[#F59762]' },
  { id: '4', name: 'Art', bg: 'bg-[#7D64FF]' },
  { id: '5', name: 'Movie', bg: 'bg-[#29D697]' },
  { id: '6', name: 'Others', bg: 'bg-[#02C6EE]' },
];

export function ProfileView({
  onBack,
  onEditProfile,
  onChangeInterest,
}: ProfileViewProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SafeAreaView edges={['top', 'left', 'right']} className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Top Header Bar */}
      <View className="flex-row items-center px-5 pt-2 pb-3">
        <Pressable
          onPress={onBack}
          hitSlop={15}
          className="w-9 h-9 justify-center items-start active:opacity-70"
        >
          <ArrowLeft size={24} color="#120D26" />
        </Pressable>
        <Text className="text-[24px] font-bold text-[#120D26] ml-2">
          Profile
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-10"
        className="flex-1"
      >
        {/* Profile Avatar */}
        <View className="items-center mt-5">
          <View className="w-24 h-24 rounded-full overflow-hidden bg-[#F0F0F0]">
            <Image
              source={require('@/assets/images/avatar 1.png')}
              style={{ width: 96, height: 96, borderRadius: 48 }}
              contentFit="cover"
              priority="high"
            />
          </View>
        </View>

        {/* User Name */}
        <Text className="text-[24px] font-bold text-[#120D26] text-center mt-4">
          Ashfak Sayem
        </Text>

        {/* Follow Stats */}
        <View className="flex-row items-center justify-center mt-4">
          <View className="items-center px-4">
            <Text className="text-[17px] font-bold text-[#120D26]">350</Text>
            <Text className="text-[14px] text-[#747688] mt-0.5">Following</Text>
          </View>

          {/* Divider */}
          <View className="w-[1px] h-7 bg-[#E5E5E5] mx-5" />

          <View className="items-center px-4">
            <Text className="text-[17px] font-bold text-[#120D26]">346</Text>
            <Text className="text-[14px] text-[#747688] mt-0.5">Followers</Text>
          </View>
        </View>

        {/* Edit Profile Button */}
        <View className="items-center mt-5">
          <Pressable
            onPress={onEditProfile}
            className="flex-row items-center justify-center border-[1.5px] border-[#5669FF] rounded-[10px] px-6 py-2.5 h-[50px] min-w-[154px] active:opacity-80"
          >
            <SquarePen size={18} color="#5669FF" style={{ marginRight: 8 }} />
            <Text className="text-[16px] text-[#5669FF] font-medium">
              Edit Profile
            </Text>
          </Pressable>
        </View>

        {/* About Me Section */}
        <View className="mt-8 px-6">
          <Text className="text-[18px] font-bold text-[#120D26] mb-2.5">
            About Me
          </Text>
          <Text className="text-[15px] text-[#3C3E56]/90 leading-6 font-normal">
            Enjoy your favorite dishe and a lovely your friends and family and
            have a great time. Food from local food trucks will be available for
            purchase.{' '}
            <Text
              onPress={() => setIsExpanded(!isExpanded)}
              className="text-[#5669FF] font-medium"
            >
              Read More <ChevronDown size={14} color="#5669FF" />
            </Text>
          </Text>
        </View>

        {/* Interest Section */}
        <View className="mt-7 px-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-[18px] font-bold text-[#120D26]">
              Interest
            </Text>
            <Pressable
              onPress={onChangeInterest}
              className="flex-row items-center bg-[#ECEBFC] px-3 py-1.5 rounded-full active:opacity-75"
            >
              <Pencil size={11} color="#5669FF" style={{ marginRight: 4 }} />
              <Text className="text-[11px] font-bold text-[#5669FF] tracking-wider">
                CHANGE
              </Text>
            </Pressable>
          </View>

          {/* Interest Tags */}
          <View className="flex-row flex-wrap gap-2.5">
            {INTERESTS.map((interest) => (
              <View
                key={interest.id}
                className={`${interest.bg} px-5 py-2.5 rounded-full`}
              >
                <Text className="text-white text-[13px] font-medium">
                  {interest.name}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileView;

