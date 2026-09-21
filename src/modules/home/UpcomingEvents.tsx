import { Image } from 'expo-image';
import { Bookmark, ChevronRight, MapPin } from 'lucide-react-native';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export interface EventItem {
  id: string;
  title: string;
  dateDay: string;
  dateMonth: string;
  image: string;
  location: string;
  goingCount: number;
}

const UPCOMING_EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'International Band Mu...',
    dateDay: '10',
    dateMonth: 'JUNE',
    image: 'https://placehold.co/600x400/EEE/31343C',
    location: '36 Guild Street London, UK',
    goingCount: 20,
  },
  {
    id: '2',
    title: 'Jo Malone London...',
    dateDay: '10',
    dateMonth: 'JUNE',
    image: 'https://placehold.co/600x400/EEE/31343C',
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
    <View style={styles.container}>
      {/* Section Header */}
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Upcoming Events</Text>
        <Pressable onPress={onSeeAll} style={styles.seeAllButton} hitSlop={10}>
          <Text style={styles.seeAllText}>See All</Text>
          <ChevronRight size={14} color="#747688" />
        </Pressable>
      </View>

      {/* Horizontal Cards Scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {events.map((event) => (
          <Pressable
            key={event.id}
            onPress={() => onSelectEvent?.(event)}
            style={styles.eventCard}
          >
            {/* Card Image Banner */}
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: event.image }}
                style={styles.cardImage}
                contentFit="cover"
              />

              {/* Date Badge */}
              <View style={styles.dateBadge}>
                <Text style={styles.dateDay}>{event.dateDay}</Text>
                <Text style={styles.dateMonth}>{event.dateMonth}</Text>
              </View>

              {/* Bookmark Button */}
              <View style={styles.bookmarkBadge}>
                <Bookmark size={15} color="#EB5757" fill="#EB5757" />
              </View>
            </View>

            {/* Event Title */}
            <Text numberOfLines={1} style={styles.eventTitle}>
              {event.title}
            </Text>

            {/* Attendees Row */}
            <View style={styles.attendeesRow}>
              <View style={styles.avatarsGroup}>
                <Image
                  source={{ uri: 'https://placehold.co/100x100/EEE/31343C' }}
                  style={[styles.avatar, { zIndex: 3 }]}
                />
                <Image
                  source={{ uri: 'https://placehold.co/100x100/DDD/31343C' }}
                  style={[styles.avatar, styles.avatarOverlap, { zIndex: 2 }]}
                />
                <Image
                  source={{ uri: 'https://placehold.co/100x100/CCC/31343C' }}
                  style={[styles.avatar, styles.avatarOverlap, { zIndex: 1 }]}
                />
              </View>
              <Text style={styles.goingText}>
                +{event.goingCount} Going
              </Text>
            </View>

            {/* Location Row */}
            <View style={styles.locationRow}>
              <MapPin size={14} color="#716E90" />
              <Text numberOfLines={1} style={styles.locationText}>
                {event.location}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
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
  scrollContent: {
    paddingLeft: 20,
    paddingRight: 8,
  },
  eventCard: {
    width: 235,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 10,
    marginRight: 16,
    shadowColor: '#505588',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F2F2F2',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 130,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  dateBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
  },
  dateDay: {
    color: '#F0635A',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 16,
  },
  dateMonth: {
    color: '#F0635A',
    fontWeight: '700',
    fontSize: 9,
  },
  bookmarkBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#120D26',
    marginBottom: 8,
  },
  attendeesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarsGroup: {
    flexDirection: 'row',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  avatarOverlap: {
    marginLeft: -8,
  },
  goingText: {
    fontSize: 12,
    color: '#3F38DD',
    fontWeight: '600',
    marginLeft: 8,
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

export default UpcomingEvents;

