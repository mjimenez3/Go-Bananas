import React from "react";
import {
  StyleSheet,
  Button,
  ImageBackground,
  Share,
  Text,
  View,
} from "react-native";
import quoteData from "../quoteData";
import bananas from "../assets/GreenBananas.png";

class QuoteScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      quoteInfo: quoteData[Math.floor(Math.random() * quoteData.length)],
    };
  }

  getQuote = () => {
    let quoteInfo = quoteData[Math.floor(Math.random() * quoteData.length)];
    this.setState({
      quoteInfo: quoteInfo,
    });
  };

  onShare = async () => {
    try {
      const result = await Share.share({
        message: `"${this.state.quoteInfo.quote}" -${this.state.quoteInfo.author}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("1");
        } else {
          console.log("2");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("3");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <ImageBackground source={bananas} style={styles.backgroundImg}>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <View style={styles.textBlock}>
              <Text style={styles.quoteText}>
                "{this.state.quoteInfo.quote}"
              </Text>
              <Text style={styles.authorName}>
                -{this.state.quoteInfo.author}
              </Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <View style={styles.shareFill}>
              <Button
                onPress={this.onShare}
                title="Share"
                color="black"
              ></Button>
            </View>

            <View style={styles.buttonFill}>
              <Button
                onPress={this.getQuote}
                title="New Quote"
                color="black"
              ></Button>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImg: {
    width: "100%",
    height: "100%",
  },

  content: {
    flex: 1,
    padding: 20,
  },

  textContainer: {
    paddingTop: 50,
    flex: 1,
    justifyContent: "flex-end",
  },

  textBlock: {
    padding: 20,
    backgroundColor: "white",
    opacity: 0.9,
  },

  quoteText: {
    fontFamily: "HelveticaNeue-Thin",
    fontSize: 20,
  },

  authorName: {
    fontFamily: "HelveticaNeue-Medium",
    padding: 10,
    textAlign: "right",
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
  },

  buttonFill: {
    backgroundColor: "#cfe571",
    width: "50%",
    margin: 10,
    borderRadius: 10,
  },

  shareFill: {
    backgroundColor: "orange",
    width: "50%",
    margin: 10,
    borderRadius: 10,
  },
});

export default QuoteScreen;
