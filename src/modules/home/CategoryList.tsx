import { Crown, Music, Trophy, Utensils } from 'lucide-react-native';
import { Pressable, ScrollView, Text, View } from 'react-native';

export interface CategoryListProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

const CATEGORIES = [
  { id: 'Sports', label: 'Sports', bg: 'bg-[#F0635A]', bgInactive: 'bg-[#F0635A]/80', icon: Trophy },
  { id: 'Music', label: 'Music', bg: 'bg-[#F59762]', bgInactive: 'bg-[#F59762]/80', icon: Music },
  { id: 'Food', label: 'Food', bg: 'bg-[#29D697]', bgInactive: 'bg-[#29D697]/80', icon: Utensils },
  { id: 'Art', label: 'Art', bg: 'bg-[#46CDFB]', bgInactive: 'bg-[#46CDFB]/80', icon: Crown },
];

export function CategoryList({ activeCategory, onSelectCategory }: CategoryListProps) {
  return (
    <View className="mt-4 mb-6">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isSelected = activeCategory === cat.id;
          return (
            <Pressable
              key={cat.id}
              onPress={() => onSelectCategory(cat.id)}
              className={`flex-row items-center px-4 py-2.5 rounded-full mr-3 active:opacity-85 ${
                isSelected ? cat.bg : cat.bgInactive
              }`}
            >
              <Icon size={17} color="#FFFFFF" />
              <Text className="text-white text-[14px] font-medium ml-2">{cat.label}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default CategoryList;
