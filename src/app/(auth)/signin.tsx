import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { ArrowRight, Eye, EyeOff, Lock, Mail } from 'lucide-react-native';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
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
          {/* Logo Section */}
          <View className="items-center mt-20 mb-8" style={styles.logoSection}>
            <Image
              source={require('@/assets/images/logo_small.webp')}
              style={styles.logoIcon}
              contentFit="contain"
            />
            <Text
              className="text-[35px] font-bold text-[#120D26] tracking-tight mt-1"
              style={styles.logoText}
            >
              EventHub
            </Text>
          </View>

          {/* Heading */}
          <Text
            className="text-[24px] font-bold text-[#120D26] mb-5"
            style={styles.heading}
          >
            Sign in
          </Text>

          {/* Email Input */}
          <View
            className="flex-row items-center border border-[#E4DFDF] rounded-xl px-4 h-14 bg-white mb-5"
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

          {/* Password Input */}
          <View
            className="flex-row items-center border border-[#E4DFDF] rounded-xl px-4 h-14 bg-white mb-4"
            style={styles.inputContainer}
          >
            <Lock size={22} color="#807A7A" />
            <TextInput
              className="flex-1 ml-3 text-[15px] text-[#120D26]"
              style={styles.textInput}
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
          <View
            className="flex-row items-center justify-between mb-8"
            style={styles.optionsRow}
          >
            <View className="flex-row items-center">
              <Switch
                value={rememberMe}
                onValueChange={setRememberMe}
                trackColor={{ false: '#D1D5DB', true: '#5669FF' }}
                thumbColor="#FFFFFF"
                style={Platform.OS === 'ios' ? { transform: [{ scale: 0.8 }] } : undefined}
              />
              <Text
                className="text-[14px] text-[#120D26] ml-2 font-medium"
                style={styles.rememberMeText}
              >
                Remember Me
              </Text>
            </View>
            <Pressable onPress={handleForgotPassword} hitSlop={10}>
              <Text
                className="text-[14px] text-[#120D26] font-medium"
                style={styles.forgotPasswordText}
              >
                Forgot Password?
              </Text>
            </Pressable>
          </View>

          {/* SIGN IN Button */}
          <Pressable
            onPress={handleSignIn}
            className="bg-[#5669FF] h-14 rounded-2xl flex-row items-center justify-center relative shadow-lg active:opacity-90 mb-9"
            style={styles.primaryButton}
          >
            <Text
              className="text-white text-[16px] font-bold tracking-widest text-center"
              style={styles.primaryButtonText}
            >
              SIGN IN
            </Text>
            <View
              className="absolute right-3.5 w-8 h-8 rounded-full bg-[#3D56F0] items-center justify-center"
              style={styles.arrowCircle}
            >
              <ArrowRight size={18} color="#FFFFFF" />
            </View>
          </Pressable>

          {/* OR Divider */}
          <Text
            className="text-center text-[#9D9898] text-[16px] font-medium mb-5"
            style={styles.orText}
          >
            OR
          </Text>

          {/* Social Logins */}
          <View className="gap-4 mb-8" style={styles.socialButtonsContainer}>
            {/* Google */}
            <Pressable
              className="flex-row items-center justify-center h-14 bg-white rounded-xl shadow-sm border border-[#F0ECEC] active:opacity-80"
              style={styles.socialButton}
            >
              <Image
                source={require('@/assets/images/google.webp')}
                style={styles.socialIcon}
                contentFit="contain"
              />
              <Text
                className="text-[#120D26] text-[15px] font-medium ml-3"
                style={styles.socialButtonText}
              >
                Login with Google
              </Text>
            </Pressable>

            {/* Facebook */}
            <Pressable
              className="flex-row items-center justify-center h-14 bg-white rounded-xl shadow-sm border border-[#F0ECEC] active:opacity-80"
              style={styles.socialButton}
            >
              <Image
                source={require('@/assets/images/facebook.webp')}
                style={styles.socialIcon}
                contentFit="contain"
              />
              <Text
                className="text-[#120D26] text-[15px] font-medium ml-3"
                style={styles.socialButtonText}
              >
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 28,
    flexGrow: 1,
  },
  logoSection: {
    alignItems: 'center',
  },
  logoIcon: {
    width: 58,
    height: 58,
  },
  logoText: {
    fontSize: 34,
    fontWeight: '700',
    color: '#37364A',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#120D26',
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
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rememberMeText: {
    fontSize: 14,
    color: '#120D26',
  },
  forgotPasswordText: {
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
  orText: {
    color: '#9D9898',
    fontSize: 16,
    fontWeight: '600',
  },
  socialButtonsContainer: {
    gap: 14,
  },
  socialButton: {
    height: 56,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderColor: '#F0ECEC',
    borderWidth: 1,
    shadowColor: '#D3D1D8',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 2,
  },
  socialIcon: {
    width: 25,
    height: 25,
  },
  socialButtonText: {
    fontSize: 14,
    color: '#120D26',
    fontWeight: '500',
  },
});

