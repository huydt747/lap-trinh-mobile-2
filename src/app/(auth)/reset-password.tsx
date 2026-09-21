import { useRouter } from 'expo-router';
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react-native';
import { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ResetPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleBack = () => {
    router.back();
  };

  const handleSend = () => {
    // Navigate to Verification screen
    router.push('/verification');
  };

  return (
    <SafeAreaView className="flex-1 bg-white" style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Back Button */}
          <View className="pt-2 pb-5">
            <Pressable onPress={handleBack} hitSlop={15} style={styles.backButton}>
              <ArrowLeft size={24} color="#120D26" />
            </Pressable>
          </View>

          {/* Heading */}
          <Text
            className="text-[24px] font-bold text-[#120D26] mb-3"
            style={styles.heading}
          >
            Resset Password
          </Text>

          {/* Subtitle */}
          <Text
            className="text-[15px] text-[#120D26]/80 leading-6 mb-7"
            style={styles.subtitle}
          >
            Please enter your email address to request a password reset
          </Text>

          {/* Email Input */}
          <View
            className="flex-row items-center border border-[#E4DFDF] rounded-xl px-4 h-14 bg-white mb-8"
            style={styles.inputContainer}
          >
            <Mail size={22} color="#807A7A" />
            <TextInput
              className="flex-1 ml-3 text-[15px] text-[#120D26]"
              style={styles.textInput}
              placeholder="abc@email.com"
              placeholderTextColor="#747688"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* SEND Button */}
          <Pressable
            onPress={handleSend}
            className="bg-[#5669FF] h-14 rounded-2xl flex-row items-center justify-center relative shadow-lg active:opacity-90"
            style={styles.primaryButton}
          >
            <Text
              className="text-white text-[16px] font-bold tracking-widest text-center"
              style={styles.primaryButtonText}
            >
              SEND
            </Text>
            <View
              className="absolute right-3.5 w-8 h-8 rounded-full bg-[#3D56F0] items-center justify-center"
              style={styles.arrowCircle}
            >
              <ArrowRight size={18} color="#FFFFFF" />
            </View>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 28,
    flexGrow: 1,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#120D26',
  },
  subtitle: {
    fontSize: 15,
    color: '#120D26',
    lineHeight: 23,
    opacity: 0.85,
  },
  inputContainer: {
    borderColor: '#E4DFDF',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  textInput: {
    fontSize: 14,
    color: '#120D26',
  },
  primaryButton: {
    backgroundColor: '#5669FF',
    height: 58,
    borderRadius: 15,
    shadowColor: '#5669FF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
  },
  arrowCircle: {
    backgroundColor: '#3D56F0',
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

