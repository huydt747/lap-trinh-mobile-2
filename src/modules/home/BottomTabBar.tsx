import { useRouter } from 'expo-router';
import {
  Calendar,
  Compass,
  MapPin,
  Plus,
  User,
} from 'lucide-react-native';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

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
  return (
    <View style={styles.container}>
      {/* Tab 1: Explore */}
      <Pressable
        onPress={() => onTabChange('Explore')}
        style={styles.tabItem}
      >
        <Compass size={22} color={activeTab === 'Explore' ? '#5669FF' : '#747688'} />
        <Text
          style={[
            styles.tabText,
            { color: activeTab === 'Explore' ? '#5669FF' : '#747688' },
          ]}
        >
          Explore
        </Text>
      </Pressable>

      {/* Tab 2: Events */}
      <Pressable
        onPress={() => {
          onTabChange('Events');
          router.push('/events');
        }}
        style={styles.tabItem}
      >
        <Calendar size={22} color={activeTab === 'Events' ? '#5669FF' : '#747688'} />
        <Text
          style={[
            styles.tabText,
            { color: activeTab === 'Events' ? '#5669FF' : '#747688' },
          ]}
        >
          Events
        </Text>
      </Pressable>

      {/* Center Floating Action Button */}
      <View style={styles.floatingButtonContainer}>
        <Pressable
          onPress={onPressAdd}
          style={styles.floatingButton}
        >
          <Plus size={24} color="#FFFFFF" strokeWidth={2.5} />
        </Pressable>
      </View>

      {/* Tab 3: Map */}
      <Pressable
        onPress={() => onTabChange('Map')}
        style={styles.tabItem}
      >
        <MapPin size={22} color={activeTab === 'Map' ? '#5669FF' : '#747688'} />
        <Text
          style={[
            styles.tabText,
            { color: activeTab === 'Map' ? '#5669FF' : '#747688' },
          ]}
        >
          Map
        </Text>
      </Pressable>

      {/* Tab 4: Profile */}
      <Pressable
        onPress={() => onTabChange('Profile')}
        style={styles.tabItem}
      >
        <User size={22} color={activeTab === 'Profile' ? '#5669FF' : '#747688'} />
        <Text
          style={[
            styles.tabText,
            { color: activeTab === 'Profile' ? '#5669FF' : '#747688' },
          ]}
        >
          Profile
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderTopColor: '#F2F2F2',
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 8,
    paddingHorizontal: 8,
    paddingBottom: Platform.OS === 'ios' ? 24 : 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 8,
  },
  tabItem: {
    alignItems: 'center',
    paddingVertical: 4,
    flex: 1,
  },
  tabText: {
    fontSize: 11,
    marginTop: 4,
    fontWeight: '500',
  },
  floatingButtonContainer: {
    alignItems: 'center',
    marginTop: -24,
    flex: 1,
  },
  floatingButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#5669FF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#5669FF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
});

export default BottomTabBar;

