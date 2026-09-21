import { Crown, Music, Trophy, Utensils } from 'lucide-react-native';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export interface CategoryListProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

const CATEGORIES = [
  { id: 'Sports', label: 'Sports', color: '#F0635A', icon: Trophy },
  { id: 'Music', label: 'Music', color: '#F59762', icon: Music },
  { id: 'Food', label: 'Food', color: '#29D697', icon: Utensils },
  { id: 'Art', label: 'Art', color: '#46CDFB', icon: Crown },
];

export function CategoryList({ activeCategory, onSelectCategory }: CategoryListProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isSelected = activeCategory === cat.id;
          return (
            <Pressable
              key={cat.id}
              onPress={() => onSelectCategory(cat.id)}
              style={[
                styles.categoryPill,
                { backgroundColor: isSelected ? cat.color : `${cat.color}CC` },
              ]}
            >
              <Icon size={17} color="#FFFFFF" />
              <Text style={styles.categoryText}>{cat.label}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 24,
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    marginRight: 12,
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },
});

export default CategoryList;

