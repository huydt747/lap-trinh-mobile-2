import { EmptyEventsView } from '@/modules/events';
import { useRouter } from 'expo-router';

export default function EventsScreen() {
  const router = useRouter();

  const handleBack = () => {
    try {
      if (router.canGoBack()) {
        router.back();
        return;
      }
    } catch {}
    router.replace('/home');
  };

  const handleExploreEvents = () => {
    try {
      router.replace('/home');
    } catch {}
  };

  return (
    <EmptyEventsView
      onBack={handleBack}
      onExploreEvents={handleExploreEvents}
    />
  );
}
