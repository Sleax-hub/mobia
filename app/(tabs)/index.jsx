import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
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
          <Text className="font-bold text-2xl text-primary">MOBIA WORLD</Text>
        </View>
        <View>
          <Ionicons name="notifications-outline" size={28} color="black" />
        </View>
      </View>

      {/* ads preview */}
        <View className="px-4 mt-2">
          <Image source={require('../../assets/images/9811920.jpg')} className="w-full h-52 rounded-2xl " resizeMode="cover"/>
          
          <View className="bg-fuchsia-500 w-26 h-10 px-2 rounded-2xl flex items-center justify-center absolute bottom-4 right-12">
            <Pressable>
              <Text className="font-bold tracking-tight text-white">Shop Now</Text>
            </Pressable>
          </View>
        </View>

        {/* search bar */}
        <View className="px-4 mt-4 flex-col w-full">
          <View>
            <TextInput placeholder="Find items here...." className="border rounded-xl border-gray-300 placeholder:text-gray-400 h-14 focus:border-secondary "/>
          </View>
          <View className="absolute top-1 right-5 bg-primary rounded-full p-2">
            <Ionicons name="search-sharp" size={28} color="white" />
          </View>
        </View>

        {/* categories */}

        <View className="px-4 mt-4">
          <Text className="text-2xl font-bold text-primary">Categories</Text>
        </View>



      <View className="flex-1 px-4 mt-10">
        <ScrollView className="bg-pink-50">

    </ScrollView>

      </View>
    


      
    </SafeAreaView>
  );
}
