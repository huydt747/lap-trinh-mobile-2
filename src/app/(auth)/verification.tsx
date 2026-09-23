import { useRouter } from 'expo-router';
import { ArrowLeft, ArrowRight } from 'lucide-react-native';
import { useEffect, useRef, useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
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
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className="flex-1"
      >
        <ScrollView
          contentContainerClassName="px-7 grow"
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Back Button */}
          <View className="pt-2 pb-5">
            <Pressable
              onPress={handleBack}
              hitSlop={15}
              className="w-10 h-10 justify-center"
            >
              <ArrowLeft size={24} color="#120D26" />
            </Pressable>
          </View>

          {/* Heading */}
          <Text className="text-[24px] font-bold text-[#120D26] mb-3">
            Verification
          </Text>

          {/* Subtitle */}
          <Text className="text-[15px] text-[#120D26]/80 leading-6 mb-8">
            We’ve send you the verification code on +1 2620 0323 7631
          </Text>

          {/* 4 OTP Digit Boxes */}
          <View className="flex-row justify-between mb-10 px-2">
            {code.map((digit, index) => {
              const isActive = index === 2;
              return (
                <View
                  key={index}
                  className={`w-[58px] h-[58px] rounded-[14px] items-center justify-center bg-white border-[1.2px] ${
                    isActive ? 'border-[#5669FF]' : 'border-[#E4DFDF]'
                  }`}
                >
                  <TextInput
                    ref={(ref) => {
                      inputRefs.current[index] = ref;
                    }}
                    className="text-[24px] font-bold text-[#120D26] text-center w-full h-full"
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
            className="bg-[#5669FF] h-[58px] rounded-[15px] flex-row items-center justify-center relative shadow-md shadow-[#5669FF]/30 active:opacity-90 mb-7"
          >
            <Text className="text-white text-[16px] font-bold tracking-widest text-center">
              CONTINUE
            </Text>
            <View className="absolute right-3.5 w-[30px] h-[30px] rounded-full bg-[#3D56F0] items-center justify-center">
              <ArrowRight size={18} color="#FFFFFF" />
            </View>
          </Pressable>

          {/* Re-send Code Timer */}
          <View className="flex-row justify-center items-center">
            <Text className="text-[15px] text-[#120D26]">Re-send code in </Text>
            <Text className="text-[15px] text-[#5669FF] font-medium">
              {formattedTimer}
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
