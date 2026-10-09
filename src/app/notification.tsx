import { EmptyNotificationView } from '@/modules/notification';
import { useRouter } from 'expo-router';

export default function NotificationScreen() {
  const router = useRouter();

  const handleBack = () => {
    try {
      if (router.canGoBack()) {
        router.back();
        return;
      }
    } catch {
      // Safe fallback
    }
    router.replace('/home');
  };

  return <EmptyNotificationView onBack={handleBack} />;
}

