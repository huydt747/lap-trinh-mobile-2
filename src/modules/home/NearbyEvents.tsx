import { Image } from 'expo-image';
import { ChevronRight, MapPin } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export interface NearbyEventItem {
  id: string;
  title: string;
  time: string;
  location: string;
  image: string;
}

const NEARBY_EVENTS: NearbyEventItem[] = [
  {
    id: '1',
    title: 'International Gala Music Festival',
    time: '10 June • 9:00 PM',
    location: '36 Guild Street London, UK',
    image: 'https://placehold.co/200x200/EEE/31343C',
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
    <View style={styles.container}>
      {/* Section Header */}
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Nearby You</Text>
        <Pressable onPress={onSeeAll} style={styles.seeAllButton} hitSlop={10}>
          <Text style={styles.seeAllText}>See All</Text>
          <ChevronRight size={14} color="#747688" />
        </Pressable>
      </View>

      {/* Events List */}
      {events.map((event) => (
        <Pressable
          key={event.id}
          onPress={() => onSelectEvent?.(event)}
          style={styles.eventCard}
        >
          <Image
            source={{ uri: event.image }}
            style={styles.eventImage}
            contentFit="cover"
          />
          <View style={styles.infoContainer}>
            <Text style={styles.timeText}>{event.time}</Text>
            <Text numberOfLines={1} style={styles.titleText}>
              {event.title}
            </Text>
            <View style={styles.locationRow}>
              <MapPin size={13} color="#716E90" />
              <Text numberOfLines={1} style={styles.locationText}>
                {event.location}
              </Text>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#120D26',
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 14,
    color: '#747688',
    marginRight: 4,
  },
  eventCard: {
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    shadowColor: '#505588',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F2F2F2',
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventImage: {
    width: 72,
    height: 72,
    borderRadius: 12,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 12,
    color: '#5669FF',
    fontWeight: '500',
    marginBottom: 4,
  },
  titleText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#120D26',
    marginBottom: 6,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 12,
    color: '#747688',
    marginLeft: 4,
    flex: 1,
  },
});

export default NearbyEvents;

