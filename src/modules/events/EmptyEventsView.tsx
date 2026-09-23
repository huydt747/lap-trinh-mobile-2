import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { ArrowLeft, ArrowRight, MoreVertical } from 'lucide-react-native';
import { useState } from 'react';
import {
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    View
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
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<EventTabType>('UPCOMING');

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/home');
    }
  };

  const handleExplore = () => {
    if (onExploreEvents) {
      onExploreEvents();
    } else {
      router.replace('/home');
    }
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Top Header Bar */}
      <View style={styles.headerBar}>
        <View style={styles.headerLeft}>
          <Pressable onPress={handleBack} hitSlop={15} style={styles.backButton}>
            <ArrowLeft size={24} color="#120D26" />
          </Pressable>
          <Text style={styles.headerTitle}>Events</Text>
        </View>

        <Pressable hitSlop={15} style={styles.moreButton}>
          <MoreVertical size={24} color="#120D26" />
        </Pressable>
      </View>

      {/* Tab Switcher: UPCOMING | PAST EVENTS */}
      <View style={styles.tabContainer}>
        <Pressable
          onPress={() => setActiveTab('UPCOMING')}
          style={[
            styles.tabButton,
            activeTab === 'UPCOMING' && styles.activeTabButton,
          ]}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'UPCOMING' && styles.activeTabText,
            ]}
          >
            UPCOMING
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setActiveTab('PAST EVENTS')}
          style={[
            styles.tabButton,
            activeTab === 'PAST EVENTS' && styles.activeTabButton,
          ]}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'PAST EVENTS' && styles.activeTabText,
            ]}
          >
            PAST EVENTS
          </Text>
        </Pressable>
      </View>

      {/* Center Empty State Content */}
      <View style={styles.centerContent}>
        {/* Soft Circular Backdrop */}
        <View style={styles.illustrationCircle}>
          <Image
            source={require('@/assets/images/event.webp')}
            style={styles.illustrationImage}
            contentFit="contain"
            priority="high"
          />
        </View>

        {/* Heading */}
        <Text style={styles.emptyTitle}>
          {activeTab === 'UPCOMING' ? 'No Upcoming Event' : 'No Past Event'}
        </Text>

        {/* Subtitle */}
        <Text style={styles.emptySubtitle}>
          {'Lorem ipsum dolor sit amet,\nconsectetur'}
        </Text>
      </View>

      {/* Bottom Action Button: EXPLORE EVENTS */}
      <View style={[styles.bottomContainer, { paddingBottom: Math.max(insets.bottom, 20) + 12 }]}>
        <Pressable
          onPress={handleExplore}
          style={styles.primaryButton}
        >
          <Text style={styles.primaryButtonText}>
            EXPLORE EVENTS
          </Text>
          <View style={styles.arrowCircle}>
            <ArrowRight size={18} color="#FFFFFF" />
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#120D26',
    marginLeft: 6,
  },
  moreButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F6',
    borderRadius: 28,
    marginHorizontal: 24,
    padding: 4,
    marginTop: 8,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
  activeTabButton: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#747688',
    letterSpacing: 0.4,
  },
  activeTabText: {
    color: '#5669FF',
    fontWeight: '700',
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 36,
    paddingBottom: 32,
  },
  illustrationCircle: {
    width: 210,
    height: 210,
    borderRadius: 105,
    backgroundColor: '#EEF3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationImage: {
    width: 165,
    height: 165,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#120D26',
    textAlign: 'center',
    marginTop: 36,
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#747688',
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 12,
  },
  bottomContainer: {
    paddingHorizontal: 32,
  },
  primaryButton: {
    backgroundColor: '#5669FF',
    height: 58,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    shadowColor: '#5669FF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
    textAlign: 'center',
  },
  arrowCircle: {
    position: 'absolute',
    right: 14,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3D56F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EmptyEventsView;

