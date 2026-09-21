import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export interface InviteBannerProps {
  onPressInvite?: () => void;
}

export function InviteBanner({ onPressInvite }: InviteBannerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Invite your friends</Text>
        <Text style={styles.subtitle}>Get $20 for ticket</Text>
        <Pressable
          onPress={onPressInvite}
          style={styles.inviteButton}
        >
          <Text style={styles.inviteButtonText}>INVITE</Text>
        </Pressable>
      </View>
      <Image
        source={{ uri: 'https://placehold.co/300x200/00F8FF/FFFFFF' }}
        style={styles.bannerImage}
        contentFit="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 28,
    borderRadius: 16,
    backgroundColor: '#D2F5F3',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  textContainer: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#120D26',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#484D70',
    marginBottom: 12,
  },
  inviteButton: {
    backgroundColor: '#00F8FF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: 'flex-start',
  },
  inviteButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 1,
  },
  bannerImage: {
    width: 100,
    height: 80,
    borderRadius: 12,
  },
});

export default InviteBanner;

