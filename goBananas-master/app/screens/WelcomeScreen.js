import React from "react";
import {
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import { Video } from "expo-av";

// const { width } = Dimensions.get("window");

function WelcomeScreen({ navigation }) {
  return (
    <View>
      <Video
        source={require("../assets/GoBananas2.mp4")}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.video}
      >
        <View style={styles.buttonSpace}>
          <TouchableOpacity onPress={() => navigation.navigate("Game")}>
            <Image
              style={styles.playButton}
              source={require("../assets/cute.gif")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.articleLink}>
          <Button
            title="Inspired by the Amazon Banana Stands!"
            onPress={() =>
              Linking.openURL(
                "https://www.aboutamazon.com/the-community-banana-stand"
              )
            }
          ></Button>
        </View>
      </Video>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonSpace: {
    top: 400,
    left: 100,
    zIndex: 2,
  },
  playButton: {
    width: 200,
    height: 150,
    borderRadius: 45,
  },
  video: {
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  articleLink: {
    zIndex: 2,
    position: "absolute",
    top: 700,
    left: 50,
    color: "pink",
  },
});

export default WelcomeScreen;
