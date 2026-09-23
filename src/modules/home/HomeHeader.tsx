import {
    Bell,
    ChevronDown,
    Menu,
    Search,
    SlidersHorizontal,
} from 'lucide-react-native';
import {
    Pressable,
    Text,
    TextInput,
    View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface HomeHeaderProps {
  onOpenMenu?: () => void;
  onPressNotification?: () => void;
  onPressFilter?: () => void;
  searchQuery?: string;
  onSearchChange?: (text: string) => void;
}

export function HomeHeader({
  onOpenMenu,
  onPressNotification,
  onPressFilter,
  searchQuery,
  onSearchChange,
}: HomeHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="bg-[#4A5EF6] rounded-b-[32px] pb-6 px-5"
      style={{ paddingTop: Math.max(insets.top, 20) + 12 }}
    >
      {/* Top Bar: Menu Hamburger | Location Dropdown | Notification Bell */}
      <View className="flex-row items-center justify-between mb-5">
        {/* Hamburger Menu Toggle */}
        <Pressable onPress={onOpenMenu} hitSlop={15}>
          <Menu size={26} color="#FFFFFF" />
        </Pressable>

        {/* Current Location */}
        <View className="items-center">
          <View className="flex-row items-center">
            <Text className="text-[12px] text-white/80 font-normal">Current Location</Text>
            <ChevronDown size={14} color="rgba(255,255,255,0.8)" style={{ marginLeft: 3 }} />
          </View>
          <Text className="text-[14px] text-white font-semibold mt-0.5">New York, USA</Text>
        </View>

        {/* Notification Bell */}
        <Pressable
          onPress={onPressNotification}
          className="w-9 h-9 rounded-full bg-white/15 items-center justify-center relative active:opacity-80"
          hitSlop={10}
        >
          <Bell size={18} color="#FFFFFF" />
          <View className="w-2 h-2 rounded-full bg-[#00F8FF] absolute top-1.5 right-1.5" />
        </Pressable>
      </View>

      {/* Search and Filters Bar */}
      <View className="flex-row items-center justify-between">
        <View className="flex-1 flex-row items-center mr-3">
          <Search size={22} color="#FFFFFF" style={{ opacity: 0.9 }} />
          <View className="w-[1px] h-4 bg-white/30 mx-2.5" />
          <TextInput
            value={searchQuery}
            onChangeText={onSearchChange}
            placeholder="Search..."
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
            className="flex-1 text-[15px] text-white py-1"
          />
        </View>

        {/* Filters Pill */}
        <Pressable
          onPress={onPressFilter}
          className="flex-row items-center bg-[#5D56F3] rounded-full px-3.5 py-2 active:opacity-85"
        >
          <View className="w-5 h-5 rounded-full bg-[#4A5EF6] items-center justify-center mr-1.5">
            <SlidersHorizontal size={13} color="#FFFFFF" />
          </View>
          <Text className="text-white text-[13px] font-medium">Filters</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default HomeHeader;
