import { useState } from 'react';
import { ScrollView, View } from 'react-native';
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
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-6"
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
    </View>
  );
}

export default HomeView;
