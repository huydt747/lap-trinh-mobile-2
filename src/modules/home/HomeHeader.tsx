import {
    Bell,
    ChevronDown,
    Menu,
    Search,
    SlidersHorizontal,
} from 'lucide-react-native';
import {
    Pressable,
    StyleSheet,
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
    <View style={[styles.container, { paddingTop: Math.max(insets.top, 20) + 12 }]}>
      {/* Top Bar: Menu Hamburger | Location Dropdown | Notification Bell */}
      <View style={styles.topBar}>
        {/* Hamburger Menu Toggle */}
        <Pressable onPress={onOpenMenu} hitSlop={15}>
          <Menu size={26} color="#FFFFFF" />
        </Pressable>

        {/* Current Location */}
        <View style={styles.locationContainer}>
          <View style={styles.locationRow}>
            <Text style={styles.locationLabel}>Current Location</Text>
            <ChevronDown size={14} color="rgba(255,255,255,0.8)" style={{ marginLeft: 3 }} />
          </View>
          <Text style={styles.locationValue}>New York, USA</Text>
        </View>

        {/* Notification Bell */}
        <Pressable
          onPress={onPressNotification}
          style={styles.bellButton}
          hitSlop={10}
        >
          <Bell size={18} color="#FFFFFF" />
          <View style={styles.bellDot} />
        </Pressable>
      </View>

      {/* Search and Filters Bar */}
      <View style={styles.searchRow}>
        <View style={styles.searchInputContainer}>
          <Search size={22} color="#FFFFFF" style={{ opacity: 0.9 }} />
          <View style={styles.searchDivider} />
          <TextInput
            value={searchQuery}
            onChangeText={onSearchChange}
            placeholder="Search..."
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
            style={styles.searchInput}
          />
        </View>

        {/* Filters Pill */}
        <Pressable
          onPress={onPressFilter}
          style={styles.filterButton}
        >
          <View style={styles.filterIconCircle}>
            <SlidersHorizontal size={13} color="#FFFFFF" />
          </View>
          <Text style={styles.filterText}>Filters</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4A5EF6',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingBottom: 26,
    paddingHorizontal: 20,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  locationContainer: {
    alignItems: 'center',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '400',
  },
  locationValue: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
    marginTop: 2,
  },
  bellButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  bellDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#00F8FF',
    position: 'absolute',
    top: 7,
    right: 7,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  searchDivider: {
    width: 1,
    height: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#FFFFFF',
    paddingVertical: 4,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5D56F3',
    borderRadius: 24,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  filterIconCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#4A5EF6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  filterText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
  },
});

export default HomeHeader;

