import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import {
  Bookmark,
  Calendar,
  CircleHelp,
  Crown,
  LogOut,
  Mail,
  MessageSquare,
  Settings,
  User,
} from 'lucide-react-native';
import {
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export interface SideMenuProps {
  onClose?: () => void;
  onSignOut?: () => void;
  width?: number;
}

export function SideMenu({ onClose, onSignOut, width }: SideMenuProps) {
  const router = useRouter();

  const handleItemPress = (action?: () => void) => {
    if (action) {
      action();
    }
    if (onClose) {
      onClose();
    }
  };

  const handleSignOutPress = () => {
    if (onSignOut) {
      onSignOut();
    } else {
      if (onClose) onClose();
      router.replace('/signin');
    }
  };

  return (
    <SafeAreaView
      edges={['top', 'left', 'bottom']}
      className="bg-white pl-6 h-full"
      style={width ? { width } : undefined}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
        className="ml-7"
      >
        {/* User Profile Section */}
        <View className="pt-4 mb-7">
          <Image
            source={{ uri: 'https://placehold.co/200x200/EEE/31343C' }}
            style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: '#EEEEEE' }}
            contentFit="cover"
          />
          <Text className="text-[19px] font-bold text-[#120D26] mt-3">
            Ashfak Sayem
          </Text>
        </View>

        {/* Menu Items List */}
        <View className="gap-6 mb-8">
          {/* My Profile */}
          <Pressable
            onPress={() => handleItemPress()}
            className="flex-row items-center py-1 active:opacity-70"
          >
            <User size={23} color="#747688" />
            <Text className="text-[16px] text-[#120D26] font-medium ml-3.5">My Profile</Text>
          </Pressable>

          {/* Massage with badge 3 */}
          <Pressable
            onPress={() => handleItemPress()}
            className="flex-row items-center justify-between py-1 active:opacity-70"
          >
            <View className="flex-row items-center">
              <MessageSquare size={23} color="#747688" />
              <Text className="text-[16px] text-[#120D26] font-medium ml-3.5">Message</Text>
            </View>
            <View className="bg-[#F59762] w-5 h-5 rounded-full items-center justify-center mr-6">
              <Text className="text-[11px] text-white font-bold">3</Text>
            </View>
          </Pressable>

          {/* Calender */}
          <Pressable
            onPress={() => handleItemPress(() => router.push('/events'))}
            className="flex-row items-center py-1 active:opacity-70"
          >
            <Calendar size={23} color="#747688" />
            <Text className="text-[16px] text-[#120D26] font-medium ml-3.5">Calendar</Text>
          </Pressable>

          {/* Bookmark */}
          <Pressable
            onPress={() => handleItemPress()}
            className="flex-row items-center py-1 active:opacity-70"
          >
            <Bookmark size={23} color="#747688" />
            <Text className="text-[16px] text-[#120D26] font-medium ml-3.5">Bookmark</Text>
          </Pressable>

          {/* Contact Us */}
          <Pressable
            onPress={() => handleItemPress()}
            className="flex-row items-center py-1 active:opacity-70"
          >
            <Mail size={23} color="#747688" />
            <Text className="text-[16px] text-[#120D26] font-medium ml-3.5">Contact Us</Text>
          </Pressable>

          {/* Settings */}
          <Pressable
            onPress={() => handleItemPress()}
            className="flex-row items-center py-1 active:opacity-70"
          >
            <Settings size={23} color="#747688" />
            <Text className="text-[16px] text-[#120D26] font-medium ml-3.5">Settings</Text>
          </Pressable>

          {/* Helps & FAQs */}
          <Pressable
            onPress={() => handleItemPress()}
            className="flex-row items-center py-1 active:opacity-70"
          >
            <CircleHelp size={23} color="#747688" />
            <Text className="text-[16px] text-[#120D26] font-medium ml-3.5">Helps & FAQs</Text>
          </Pressable>

          {/* Sign Out */}
          <Pressable
            onPress={handleSignOutPress}
            className="flex-row items-center py-1 active:opacity-70"
          >
            <LogOut size={23} color="#747688" />
            <Text className="text-[16px] text-[#120D26] font-medium ml-3.5">Sign Out</Text>
          </Pressable>
        </View>

        {/* Upgrade Pro Button */}
        <Pressable className="flex-row items-center bg-[#E6FCFC] rounded-xl px-4 py-3 self-start mt-2 mb-6 active:opacity-80">
          <Crown size={20} color="#00D2D7" />
          <Text className="text-[#00D2D7] text-[14px] font-semibold ml-2">Upgrade Pro</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SideMenu;
