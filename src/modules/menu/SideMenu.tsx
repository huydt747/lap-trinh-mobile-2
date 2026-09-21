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
  StyleSheet,
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
      style={[styles.drawerContainer, width ? { width } : undefined]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* User Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://placehold.co/200x200/EEE/31343C' }}
            style={styles.avatarImage}
            contentFit="cover"
          />
          <Text style={styles.profileName}>
            Ashfak Sayem
          </Text>
        </View>

        {/* Menu Items List */}
        <View style={styles.menuList}>
          {/* My Profile */}
          <Pressable
            onPress={() => handleItemPress()}
            style={styles.menuItem}
          >
            <User size={23} color="#747688" />
            <Text style={styles.menuText}>My Profile</Text>
          </Pressable>

          {/* Massage with badge 3 */}
          <Pressable
            onPress={() => handleItemPress()}
            style={styles.menuItemWithBadge}
          >
            <View style={styles.menuItemLeft}>
              <MessageSquare size={23} color="#747688" />
              <Text style={styles.menuText}>Massage</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </Pressable>

          {/* Calender */}
          <Pressable
            onPress={() => handleItemPress()}
            style={styles.menuItem}
          >
            <Calendar size={23} color="#747688" />
            <Text style={styles.menuText}>Calender</Text>
          </Pressable>

          {/* Bookmark */}
          <Pressable
            onPress={() => handleItemPress()}
            style={styles.menuItem}
          >
            <Bookmark size={23} color="#747688" />
            <Text style={styles.menuText}>Bookmark</Text>
          </Pressable>

          {/* Contact Us */}
          <Pressable
            onPress={() => handleItemPress()}
            style={styles.menuItem}
          >
            <Mail size={23} color="#747688" />
            <Text style={styles.menuText}>Contact Us</Text>
          </Pressable>

          {/* Settings */}
          <Pressable
            onPress={() => handleItemPress()}
            style={styles.menuItem}
          >
            <Settings size={23} color="#747688" />
            <Text style={styles.menuText}>Settings</Text>
          </Pressable>

          {/* Helps & FAQs */}
          <Pressable
            onPress={() => handleItemPress()}
            style={styles.menuItem}
          >
            <CircleHelp size={23} color="#747688" />
            <Text style={styles.menuText}>Helps & FAQs</Text>
          </Pressable>

          {/* Sign Out */}
          <Pressable
            onPress={handleSignOutPress}
            style={styles.menuItem}
          >
            <LogOut size={23} color="#747688" />
            <Text style={styles.menuText}>Sign Out</Text>
          </Pressable>
        </View>

        {/* Upgrade Pro Button */}
        <Pressable style={styles.upgradeButton}>
          <Crown size={20} color="#00D2D7" />
          <Text style={styles.upgradeText}>Upgrade Pro</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    height: '100%',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  profileSection: {
    paddingTop: 16,
    marginBottom: 28,
  },
  avatarImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EEEEEE',
  },
  profileName: {
    fontSize: 19,
    fontWeight: '700',
    color: '#120D26',
    marginTop: 12,
  },
  menuList: {
    gap: 24,
    marginBottom: 32,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  menuItemWithBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    color: '#120D26',
    fontWeight: '500',
    marginLeft: 14,
  },
  badge: {
    backgroundColor: '#F59762',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 24,
  },
  badgeText: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  upgradeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6FCFC',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignSelf: 'flex-start',
    marginTop: 8,
    marginBottom: 24,
  },
  upgradeText: {
    color: '#00CCD8',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default SideMenu;

