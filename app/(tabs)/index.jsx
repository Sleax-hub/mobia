import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Index() {
  return (
    <SafeAreaView className="bg-white flex-1">

      {/* header */}
      <View className="flex-row justify-between items-center px-4 py-4">
        <View>
            <Ionicons name="menu" size={28} color="black" />
        </View>
        <View>
          <Text className="font-bold text-2xl text-purple-800">MOBIA WORLD</Text>
        </View>
        <View>
          <Ionicons name="notifications-outline" size={28} color="black" />
        </View>
      </View>

      {/* ads preview */}
        <View className="px-4 mt-4">
          <Image source={require('../../assets/images/424.jpg')} className="w-full h-40 rounded-2xl " resizeMode="cover"/>
          
          <View className="bg-yellow-400 w-20 px-2 rounded-xl flex items-center justify-center">
            <Pressable>
              <Text>Shop Now</Text>
            </Pressable>
          </View>
        </View>


      <View className="flex-1 px-4 mt-10">
        <ScrollView className="bg-pink-50">

    </ScrollView>

      </View>
    


      
    </SafeAreaView>
  );
}
