import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { BottomTabBar, TabType } from './BottomTabBar';
import { CategoryList } from './CategoryList';
import { HomeHeader } from './HomeHeader';
import { InviteBanner } from './InviteBanner';
import { NearbyEvents } from './NearbyEvents';
import { UpcomingEvents } from './UpcomingEvents';

export interface HomeViewProps {
  onOpenMenu?: () => void;
  onPressNotification?: () => void;
  onPressFilter?: () => void;
  onPressInvite?: () => void;
}

export function HomeView({
  onOpenMenu,
  onPressNotification,
  onPressFilter,
  onPressInvite,
}: HomeViewProps) {
  const [activeCategory, setActiveCategory] = useState('Sports');
  const [activeTab, setActiveTab] = useState<TabType>('Explore');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Blue Header Section */}
        <HomeHeader
          onOpenMenu={onOpenMenu}
          onPressNotification={onPressNotification}
          onPressFilter={onPressFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Categories Pills */}
        <CategoryList
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Upcoming Events Carousel */}
        <UpcomingEvents />

        {/* Invite Friends Banner */}
        <InviteBanner onPressInvite={onPressInvite} />

        {/* Nearby Events */}
        <NearbyEvents />
      </ScrollView>

      {/* Floating Bottom Tab Bar */}
      <BottomTabBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24,
  },
});

export default HomeView;

