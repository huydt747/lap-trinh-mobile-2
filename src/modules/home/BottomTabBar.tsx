import { useRouter } from 'expo-router';
import {
  Calendar,
  Compass,
  MapPin,
  Plus,
  User,
} from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type TabType = 'Explore' | 'Events' | 'Map' | 'Profile';

export interface BottomTabBarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onPressAdd?: () => void;
}

export function BottomTabBar({
  activeTab,
  onTabChange,
  onPressAdd,
}: BottomTabBarProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleTabPress = (tab: TabType) => {
    onTabChange(tab);
    if (tab === 'Events') {
      router.push('/events');
    }
  };

  return (
    <View
      className="bg-white border-t border-[#F2F2F2] flex-row items-center justify-around px-2 shadow-lg shadow-black/10"
      style={{ paddingBottom: Math.max(insets.bottom, 12), paddingTop: 8 }}
    >
      {/* Tab 1: Explore */}
      <Pressable
        onPress={() => handleTabPress('Explore')}
        className="items-center py-1 flex-1 active:opacity-75"
      >
        <Compass
          size={22}
          color={activeTab === 'Explore' ? '#5669FF' : '#747688'}
        />
        <Text
          className={`text-[11px] mt-1 font-medium ${
            activeTab === 'Explore' ? 'text-[#5669FF]' : 'text-[#747688]'
          }`}
        >
          Explore
        </Text>
      </Pressable>

      {/* Tab 2: Events */}
      <Pressable
        onPress={() => handleTabPress('Events')}
        className="items-center py-1 flex-1 active:opacity-75"
      >
        <Calendar
          size={22}
          color={activeTab === 'Events' ? '#5669FF' : '#747688'}
        />
        <Text
          className={`text-[11px] mt-1 font-medium ${
            activeTab === 'Events' ? 'text-[#5669FF]' : 'text-[#747688]'
          }`}
        >
          Events
        </Text>
      </Pressable>

      {/* Center Floating Action Button */}
      <View className="items-center -mt-7 flex-1">
        <Pressable
          onPress={onPressAdd}
          className="w-12 h-12 rounded-full bg-[#5669FF] items-center justify-center shadow-lg shadow-[#5669FF]/50 active:opacity-90"
        >
          <Plus size={24} color="#FFFFFF" strokeWidth={2.5} />
        </Pressable>
      </View>

      {/* Tab 3: Map */}
      <Pressable
        onPress={() => handleTabPress('Map')}
        className="items-center py-1 flex-1 active:opacity-75"
      >
        <MapPin
          size={22}
          color={activeTab === 'Map' ? '#5669FF' : '#747688'}
        />
        <Text
          className={`text-[11px] mt-1 font-medium ${
            activeTab === 'Map' ? 'text-[#5669FF]' : 'text-[#747688]'
          }`}
        >
          Map
        </Text>
      </Pressable>

      {/* Tab 4: Profile */}
      <Pressable
        onPress={() => handleTabPress('Profile')}
        className="items-center py-1 flex-1 active:opacity-75"
      >
        <User
          size={22}
          color={activeTab === 'Profile' ? '#5669FF' : '#747688'}
        />
        <Text
          className={`text-[11px] mt-1 font-medium ${
            activeTab === 'Profile' ? 'text-[#5669FF]' : 'text-[#747688]'
          }`}
        >
          Profile
        </Text>
      </Pressable>
    </View>
  );
}

export default BottomTabBar;
