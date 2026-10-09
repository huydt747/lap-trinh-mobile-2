import { ProfileView } from '@/modules/profile';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
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

  return (
    <ProfileView
      onBack={handleBack}
      onEditProfile={() => {
        // Can be hooked up to edit profile screen later
      }}
      onChangeInterest={() => {
        // Can be hooked up to change interest screen later
      }}
    />
  );
}

