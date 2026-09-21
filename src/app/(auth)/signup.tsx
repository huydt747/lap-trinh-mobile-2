import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { ArrowLeft, ArrowRight, Eye, EyeOff, Lock, Mail, User } from 'lucide-react-native';
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
    // UI Only -> navigate to verification
    router.push('/verification');
  };

  const handleSignIn = () => {
    router.push('/signin');
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
          <View className="pt-2 pb-4">
            <Pressable onPress={handleBack} hitSlop={15} style={styles.backButton}>
              <ArrowLeft size={24} color="#120D26" />
            </Pressable>
          </View>

          {/* Heading */}
          <Text
            className="text-[24px] font-bold text-[#120D26] mb-6"
            style={styles.heading}
          >
            Sign up
          </Text>

          {/* Full Name Input */}
          <View
            className="flex-row items-center border border-[#E4DFDF] rounded-xl px-4 h-14 bg-white mb-5"
            style={styles.inputContainer}
          >
            <User size={22} color="#807A7A" />
            <TextInput
              className="flex-1 ml-3 text-[15px] text-[#120D26]"
              style={styles.textInput}
              placeholder="Full name"
              placeholderTextColor="#747688"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

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
            className="flex-row items-center border border-[#E4DFDF] rounded-xl px-4 h-14 bg-white mb-5"
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

          {/* Confirm Password Input */}
          <View
            className="flex-row items-center border border-[#E4DFDF] rounded-xl px-4 h-14 bg-white mb-8"
            style={styles.inputContainer}
          >
            <Lock size={22} color="#807A7A" />
            <TextInput
              className="flex-1 ml-3 text-[15px] text-[#120D26]"
              style={styles.textInput}
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
            className="bg-[#5669FF] h-14 rounded-2xl flex-row items-center justify-center relative shadow-lg active:opacity-90 mb-7"
            style={styles.primaryButton}
          >
            <Text
              className="text-white text-[16px] font-bold tracking-widest text-center"
              style={styles.primaryButtonText}
            >
              SIGN UP
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
          <View className="gap-4 mb-7" style={styles.socialButtonsContainer}>
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

