import { useRouter } from 'expo-router';
import { ArrowLeft, ArrowRight } from 'lucide-react-native';
import { useEffect, useRef, useState } from 'react';
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

export default function VerificationScreen() {
  const router = useRouter();
  const [code, setCode] = useState(['4', '4', '', '']);
  const [timer, setTimer] = useState(20);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleBack = () => {
    router.back();
  };

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text.slice(-1);
    setCode(newCode);

    // Auto-advance
    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleContinue = () => {
    router.replace('/home');
  };

  const formattedTimer = `0:${timer < 10 ? `0${timer}` : timer}`;

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
            Verification
          </Text>

          {/* Subtitle */}
          <Text
            className="text-[15px] text-[#120D26]/80 leading-6 mb-8"
            style={styles.subtitle}
          >
            We’ve send you the verification code on +1 2620 0323 7631
          </Text>

          {/* 4 OTP Digit Boxes */}
          <View className="flex-row justify-between mb-10 px-2" style={styles.otpRow}>
            {code.map((digit, index) => {
              const isFilled = Boolean(digit);
              return (
                <View
                  key={index}
                  className={`w-[58px] h-[58px] rounded-xl items-center justify-center bg-white border ${
                    index === 2 ? 'border-[#5669FF]' : 'border-[#E4DFDF]'
                  }`}
                  style={[
                    styles.otpBox,
                    index === 2 && styles.otpBoxActive,
                  ]}
                >
                  <TextInput
                    ref={(ref) => {
                      inputRefs.current[index] = ref;
                    }}
                    className="text-[24px] font-bold text-[#120D26] text-center w-full h-full"
                    style={styles.otpInput}
                    keyboardType="number-pad"
                    maxLength={1}
                    value={digit}
                    placeholder="-"
                    placeholderTextColor="#A0A0A0"
                    onChangeText={(text) => handleCodeChange(text, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                  />
                </View>
              );
            })}
          </View>

          {/* CONTINUE Button */}
          <Pressable
            onPress={handleContinue}
            className="bg-[#5669FF] h-14 rounded-2xl flex-row items-center justify-center relative shadow-lg active:opacity-90 mb-7"
            style={styles.primaryButton}
          >
            <Text
              className="text-white text-[16px] font-bold tracking-widest text-center"
              style={styles.primaryButtonText}
            >
              CONTINUE
            </Text>
            <View
              className="absolute right-3.5 w-8 h-8 rounded-full bg-[#3D56F0] items-center justify-center"
              style={styles.arrowCircle}
            >
              <ArrowRight size={18} color="#FFFFFF" />
            </View>
          </Pressable>

          {/* Re-send Code Timer */}
          <View className="flex-row justify-center items-center">
            <Text className="text-[15px] text-[#120D26]">
              Re-send code in{' '}
            </Text>
            <Text className="text-[15px] text-[#5669FF] font-medium">
              {formattedTimer}
            </Text>
          </View>
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
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  otpBox: {
    width: 58,
    height: 58,
    borderRadius: 14,
    borderWidth: 1.2,
    borderColor: '#E4DFDF',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpBoxActive: {
    borderColor: '#5669FF',
  },
  otpInput: {
    fontSize: 24,
    fontWeight: '700',
    color: '#120D26',
    textAlign: 'center',
    width: '100%',
    height: '100%',
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

