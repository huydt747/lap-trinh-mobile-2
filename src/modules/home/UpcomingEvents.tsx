import { Image } from 'expo-image';
import { Bookmark, ChevronRight, MapPin } from 'lucide-react-native';
import { Pressable, ScrollView, Text, View } from 'react-native';

export interface EventItem {
  id: string;
  title: string;
  dateDay: string;
  dateMonth: string;
  image: any;
  location: string;
  goingCount: number;
}

const UPCOMING_EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'International Band Mu...',
    dateDay: '10',
    dateMonth: 'JUNE',
    image: require('@/assets/home/image1.png'),
    location: '36 Guild Street London, UK',
    goingCount: 20,
  },
  {
    id: '2',
    title: 'Jo Malone London...',
    dateDay: '10',
    dateMonth: 'JUNE',
    image: require('@/assets/home/image2.png'),
    location: 'Radius Gallery, Santa Cruz',
    goingCount: 20,
  },
];

export interface UpcomingEventsProps {
  events?: EventItem[];
  onSeeAll?: () => void;
  onSelectEvent?: (event: EventItem) => void;
}

export function UpcomingEvents({
  events = UPCOMING_EVENTS,
  onSeeAll,
  onSelectEvent,
}: UpcomingEventsProps) {
  return (
    <View className="mb-6">
      {/* Section Header */}
      <View className="flex-row items-center justify-between px-5 mb-4">
        <Text className="text-[18px] font-bold text-[#120D26]">Upcoming Events</Text>
        <Pressable onPress={onSeeAll} className="flex-row items-center" hitSlop={10}>
          <Text className="text-[14px] text-[#747688] mr-1">See All</Text>
          <ChevronRight size={14} color="#747688" />
        </Pressable>
      </View>

      {/* Horizontal Cards Scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 20, paddingRight: 8 }}
      >
        {events.map((event) => (
          <Pressable
            key={event.id}
            onPress={() => onSelectEvent?.(event)}
            className="w-[235px] bg-white rounded-2xl p-2.5 mr-4 shadow-sm border border-[#F2F2F2] active:opacity-95"
          >
            {/* Card Image Banner */}
            <View className="relative w-full h-[130px] rounded-xl overflow-hidden mb-3">
              <Image
                source={
                  typeof event.image === 'string'
                    ? { uri: event.image }
                    : event.image
                }
                style={{ width: '100%', height: '100%' }}
                contentFit="cover"
              />

              {/* Date Badge */}
              <View className="absolute top-2 left-2 bg-white/90 rounded-xl px-2 py-1 items-center">
                <Text className="text-[#F0635A] font-bold text-[16px] leading-4">{event.dateDay}</Text>
                <Text className="text-[#F0635A] font-bold text-[9px]">{event.dateMonth}</Text>
              </View>

              {/* Bookmark Button */}
              <View className="absolute top-2 right-2 bg-white/90 w-7 h-7 rounded-lg items-center justify-center">
                <Bookmark size={15} color="#EB5757" fill="#EB5757" />
              </View>
            </View>

            {/* Event Title */}
            <Text numberOfLines={1} className="text-[16px] font-bold text-[#120D26] mb-2">
              {event.title}
            </Text>

            {/* Attendees Row */}
            <View className="flex-row items-center mb-2.5">
              <View className="flex-row">
                <Image
                  source={{ uri: 'https://placehold.co/100x100/EEE/31343C' }}
                  style={{ width: 24, height: 24, borderRadius: 12, borderWidth: 1.5, borderColor: '#FFFFFF', zIndex: 30 }}
                />
                <Image
                  source={{ uri: 'https://placehold.co/100x100/DDD/31343C' }}
                  style={{ width: 24, height: 24, borderRadius: 12, borderWidth: 1.5, borderColor: '#FFFFFF', marginLeft: -8, zIndex: 20 }}
                />
                <Image
                  source={{ uri: 'https://placehold.co/100x100/CCC/31343C' }}
                  style={{ width: 24, height: 24, borderRadius: 12, borderWidth: 1.5, borderColor: '#FFFFFF', marginLeft: -8, zIndex: 10 }}
                />
              </View>
              <Text className="text-[12px] text-[#3F38DD] font-semibold ml-2">
                +{event.goingCount} Going
              </Text>
            </View>

            {/* Location Row */}
            <View className="flex-row items-center">
              <MapPin size={14} color="#716E90" />
              <Text numberOfLines={1} className="text-[12px] text-[#747688] ml-1 flex-1">
                {event.location}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

export default UpcomingEvents;
