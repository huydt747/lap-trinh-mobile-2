import { Image } from 'expo-image';
import { ChevronRight, MapPin } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

export interface NearbyEventItem {
  id: string;
  title: string;
  time: string;
  location: string;
  image: any;
}

const NEARBY_EVENTS: NearbyEventItem[] = [
  {
    id: '1',
    title: 'International Gala Music Festival',
    time: '10 June • 9:00 PM',
    location: '36 Guild Street London, UK',
    image: require('@/assets/home/image1.png'),
  },
];

export interface NearbyEventsProps {
  events?: NearbyEventItem[];
  onSeeAll?: () => void;
  onSelectEvent?: (event: NearbyEventItem) => void;
}

export function NearbyEvents({
  events = NEARBY_EVENTS,
  onSeeAll,
  onSelectEvent,
}: NearbyEventsProps) {
  return (
    <View className="mb-6">
      {/* Section Header */}
      <View className="flex-row items-center justify-between px-5 mb-4">
        <Text className="text-[18px] font-bold text-[#120D26]">Nearby You</Text>
        <Pressable onPress={onSeeAll} className="flex-row items-center" hitSlop={10}>
          <Text className="text-[14px] text-[#747688] mr-1">See All</Text>
          <ChevronRight size={14} color="#747688" />
        </Pressable>
      </View>

      {/* Events List */}
      {events.map((event) => (
        <Pressable
          key={event.id}
          onPress={() => onSelectEvent?.(event)}
          className="mx-5 bg-white rounded-2xl p-3 shadow-sm border border-[#F2F2F2] flex-row items-center active:opacity-90"
        >
          <Image
            source={
              typeof event.image === 'string'
                ? { uri: event.image }
                : event.image
            }
            style={{ width: 72, height: 72, borderRadius: 12 }}
            contentFit="cover"
          />
          <View className="flex-1 ml-3.5 justify-center">
            <Text className="text-[12px] text-[#5669FF] font-medium mb-1">{event.time}</Text>
            <Text numberOfLines={1} className="text-[15px] font-bold text-[#120D26] mb-1.5">
              {event.title}
            </Text>
            <View className="flex-row items-center">
              <MapPin size={13} color="#716E90" />
              <Text numberOfLines={1} className="text-[12px] text-[#747688] ml-1 flex-1">
                {event.location}
              </Text>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

export default NearbyEvents;
