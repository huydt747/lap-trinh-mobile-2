import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { ArrowLeft, ArrowRight, Eye, EyeOff, Lock, Mail, User } from 'lucide-react-native';
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

export default function SignUpScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleBack = () => {
    router.back();
  };

  const handleSignUp = () => {
    router.push('/verification');
  };

  const handleSignIn = () => {
    router.push('/signin');
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
          <View className="pt-2 pb-4">
            <Pressable onPress={handleBack} hitSlop={15} className="w-10 h-10 justify-center">
              <ArrowLeft size={24} color="#120D26" />
            </Pressable>
          </View>

          {/* Heading */}
          <Text className="text-[24px] font-bold text-[#120D26] mb-6">
            Sign up
          </Text>

          {/* Full Name Input */}
          <View className="flex-row items-center border border-[#E4DFDF] rounded-xl px-4 h-14 bg-white mb-5">
            <User size={22} color="#807A7A" />
            <TextInput
              className="flex-1 ml-3 text-[14px] text-[#120D26]"
              placeholder="Full name"
              placeholderTextColor="#747688"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          {/* Email Input */}
          <View className="flex-row items-center border border-[#E4DFDF] rounded-xl px-4 h-14 bg-white mb-5">
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

          {/* Password Input */}
          <View className="flex-row items-center border border-[#E4DFDF] rounded-xl px-4 h-14 bg-white mb-5">
            <Lock size={22} color="#807A7A" />
            <TextInput
              className="flex-1 ml-3 text-[14px] text-[#120D26]"
              placeholder="Your password"
              placeholderTextColor="#747688"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              hitSlop={10}
            >
              {showPassword ? (
                <Eye size={22} color="#807A7A" />
              ) : (
                <EyeOff size={22} color="#807A7A" />
              )}
            </Pressable>
          </View>

          {/* Confirm Password Input */}
          <View className="flex-row items-center border border-[#E4DFDF] rounded-xl px-4 h-14 bg-white mb-8">
            <Lock size={22} color="#807A7A" />
            <TextInput
              className="flex-1 ml-3 text-[14px] text-[#120D26]"
              placeholder="Confirm password"
              placeholderTextColor="#747688"
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <Pressable
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              hitSlop={10}
            >
              {showConfirmPassword ? (
                <Eye size={22} color="#807A7A" />
              ) : (
                <EyeOff size={22} color="#807A7A" />
              )}
            </Pressable>
          </View>

          {/* SIGN UP Button */}
          <Pressable
            onPress={handleSignUp}
            className="bg-[#5669FF] h-[58px] rounded-[15px] flex-row items-center justify-center relative shadow-lg shadow-[#5669FF]/30 active:opacity-90 mb-7"
          >
            <Text className="text-white text-[16px] font-bold tracking-widest text-center">
              SIGN UP
            </Text>
            <View className="absolute right-3.5 w-[30px] h-[30px] rounded-full bg-[#3D56F0] items-center justify-center">
              <ArrowRight size={18} color="#FFFFFF" />
            </View>
          </Pressable>

          {/* OR Divider */}
          <Text className="text-center text-[#9D9898] text-[16px] font-semibold mb-5">
            OR
          </Text>

          {/* Social Logins */}
          <View className="gap-3.5 mb-7">
            {/* Google */}
            <Pressable className="flex-row items-center justify-center h-14 bg-white rounded-xl border border-[#F0ECEC] shadow-sm shadow-[#D3D1D8]/20 active:opacity-80">
              <Image
                source={require('@/assets/images/google.webp')}
                className="w-[25px] h-[25px]"
                contentFit="contain"
              />
              <Text className="text-[#120D26] text-[14px] font-medium ml-3">
                Login with Google
              </Text>
            </Pressable>

            {/* Facebook */}
            <Pressable className="flex-row items-center justify-center h-14 bg-white rounded-xl border border-[#F0ECEC] shadow-sm shadow-[#D3D1D8]/20 active:opacity-80">
              <Image
                source={require('@/assets/images/facebook.webp')}
                className="w-[25px] h-[25px]"
                contentFit="contain"
              />
              <Text className="text-[#120D26] text-[14px] font-medium ml-3">
                Login with Facebook
              </Text>
            </Pressable>
          </View>

          {/* Footer: Already have an account? Signin */}
          <View className="flex-row justify-center items-center pb-6">
            <Text className="text-[15px] text-[#120D26]">
              Already have an account?{' '}
            </Text>
            <Pressable onPress={handleSignIn} hitSlop={10}>
              <Text className="text-[15px] text-[#5669FF] font-semibold">
                Signin
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
