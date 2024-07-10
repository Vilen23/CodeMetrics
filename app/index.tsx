import { StyleSheet, View, Text, Animated, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect, useRef } from "react";
import Homebar from "@/components/Homebar";
SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [fontsLoaded, error] = useFonts({
    "JetBrainsMono-Bold": require("../assets/fonts/JetBrainsMono-Bold.ttf"),
    SourceSerif: require("../assets/fonts/SourceSerif.ttf"),
  });
  const colorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }

    Animated.loop(
      Animated.timing(colorAnim, {
        toValue: 1,
        duration: 8000,
        useNativeDriver: false,
      })
    ).start();
  }, [fontsLoaded, error, colorAnim]);

  if (!fontsLoaded && !error) {
    return null;
  }
  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ["#ffda79", "#ffabe7", "#d2bcf3", "#edf3d8", "#ffda79"],
  });

  return (
    <View>
      <Homebar />
      <View style={styles.container}>
        <Text style={styles.subheading}>
          Welcome to the platform where you can manage all your coding profiles.
        </Text>
        <Animated.View style={[styles.title_view, { backgroundColor }]}>
          <Text style={styles.title}> {`cout<<Metrics;`}</Text>
        </Animated.View>
        <View style={{ marginTop: 60 }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "SourceSerif",
              fontSize: 19,
            }}
          >
            Manage all your coding profiles in one place inside your pocket.
          </Text>
          <View style={styles.icon}>
            <Image
              source={require("../assets/images/leetcode(1).png")}
              style={styles.image}
            />
            <Image
              source={require("../assets/images/atcoder.png")}
              style={styles.image}
            />
            <Image
              source={require("../assets/images/code-forces(1).png")}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingTop: 45,
    alignItems: "center",
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontFamily: "JetBrainsMono-Bold",
    borderRadius: 10,
  },
  subheading: {
    fontSize: 17,
    fontFamily: "SourceSerif",
    // fontWeight:"bold",
    textAlign: "center",
    color: "#333333",
  },
  title_view: {
    marginTop: 30,
    paddingHorizontal: 5,
    borderRadius: 30,
  },
  image: {
    height: 40,
    width: 40,
  },
  icon: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 10,
  },
});
