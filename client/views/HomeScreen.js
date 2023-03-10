import { useEffect } from "react"
import { Pressable, View, AsyncStorage, ActivityIndicator } from "react-native"
import Icon from "react-native-vector-icons/Feather"
import Feed from "../components/Feed"

import useAxios from "../hooks/useAxios"

export default function HomeScreen({ navigation }) {
  const { data, loading, error } = useAxios("http://10.160.213.42:8080/api/v1/profile", "get")
  useEffect(() => {
    AsyncStorage.getItem("token").then((token) => {
      if (!token) {
        navigation.navigate("Login")
      }
    })
  }, [])
  return !loading ? (
    <View className="bg-black flex pb-4 pl-4 pr-4 flex-1">
      <Feed profileData={data} />

      <Pressable
        className="absolute p-2 right-8 bottom-12 rounded-full bg-black border border-white"
        onPress={() => {
          navigation.navigate("Create")
        }}>
        <Icon name="plus" size={48} color="#f8f8f8" />
      </Pressable>
    </View>
  ) : (
    <ActivityIndicator size="large" color="#f8f8f8" />
  )
}
