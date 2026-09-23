import { useRouter } from 'expo-router';
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react-native';
import { useState } from 'react';
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

export default function ResetPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleBack = () => {
    router.back();
  };

  const handleSend = () => {
    router.push('/verification');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 28, flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Back Button */}
          <View className="pt-2 pb-5">
            <Pressable onPress={handleBack} hitSlop={15} className="w-10 h-10 justify-center">
              <ArrowLeft size={24} color="#120D26" />
            </Pressable>
          </View>

          {/* Heading */}
          <Text className="text-[24px] font-bold text-[#120D26] mb-3">
            Resset Password
          </Text>

          {/* Subtitle */}
          <Text className="text-[15px] text-[#120D26]/85 leading-6 mb-7">
            Please enter your email address to request a password reset
          </Text>

          {/* Email Input */}
          <View className="flex-row items-center border border-[#E4DFDF] rounded-xl px-4 h-14 bg-white mb-8">
            <Mail size={22} color="#807A7A" />
            <TextInput
              className="flex-1 ml-3 text-[14px] text-[#120D26]"
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
            className="bg-[#5669FF] h-[58px] rounded-[15px] flex-row items-center justify-center relative shadow-lg shadow-[#5669FF]/30 active:opacity-90"
          >
            <Text className="text-white text-[16px] font-bold tracking-widest text-center">
              SEND
            </Text>
            <View className="absolute right-3.5 w-[30px] h-[30px] rounded-full bg-[#3D56F0] items-center justify-center">
              <ArrowRight size={18} color="#FFFFFF" />
            </View>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
