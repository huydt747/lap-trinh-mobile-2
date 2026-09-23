import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { ArrowRight, Eye, EyeOff, Lock, Mail } from 'lucide-react-native';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleSignIn = () => {
    router.replace('/home');
  };

  const handleForgotPassword = () => {
    router.push('/reset-password');
  };

  const handleSignUp = () => {
    router.push('/signup');
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
          className='mt-12'
        >
          {/* Logo Section */}
          <View className="items-center mt-6 mb-8">
            <Image
              source={require('@/assets/images/logo_small.webp')}
              className="w-[58px] h-[58px]"
              contentFit="contain"
            />
            <Text className="text-[34px] font-bold text-[#37364A] tracking-tight mt-1">
              EventHub
            </Text>
          </View>

          {/* Heading */}
          <Text className="text-[24px] font-bold text-[#120D26] mb-5">
            Sign in
          </Text>

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
          <View className="flex-row items-center border border-[#E4DFDF] rounded-xl px-4 h-14 bg-white mb-4">
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

          {/* Remember Me & Forgot Password Row */}
          <View className="flex-row items-center justify-between mb-8">
            <View className="flex-row items-center">
              <Switch
                value={rememberMe}
                onValueChange={setRememberMe}
                trackColor={{ false: '#D1D5DB', true: '#5669FF' }}
                thumbColor="#FFFFFF"
                style={Platform.OS === 'ios' ? { transform: [{ scale: 0.8 }] } : undefined}
              />
              <Text className="text-[14px] text-[#120D26] ml-2 font-medium">
                Remember Me
              </Text>
            </View>
            <Pressable onPress={handleForgotPassword} hitSlop={10}>
              <Text className="text-[14px] text-[#120D26] font-medium">
                Forgot Password?
              </Text>
            </Pressable>
          </View>

          {/* SIGN IN Button */}
          <Pressable
            onPress={handleSignIn}
            className="bg-[#5669FF] h-[58px] rounded-[15px] flex-row items-center justify-center relative shadow-lg shadow-[#5669FF]/30 active:opacity-90 mb-9"
          >
            <Text className="text-white text-[16px] font-bold tracking-widest text-center">
              SIGN IN
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
          <View className="gap-3.5 mb-8">
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

          {/* Footer: Don't have an account? Sign up */}
          <View className="flex-row justify-center items-center pb-6">
            <Text className="text-[15px] text-[#120D26]">
              Don’t have an account?{' '}
            </Text>
            <Pressable onPress={handleSignUp} hitSlop={10}>
              <Text className="text-[15px] text-[#5669FF] font-semibold">
                Sign up
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
