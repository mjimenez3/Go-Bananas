// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Platform,
//   Image,
//   Button,
//   CameraRoll,
// } from "react-native";
// import { Camera } from "expo-camera";
// import * as Permissions from "expo-permissions";
// import {
//   FontAwesome,
//   Ionicons,
//   MaterialCommunityIcons,
// } from "@expo/vector-icons";
// import * as ImagePicker from "expo-image-picker";
// import * as MediaLibrary from "expo-media-library";
// import { StickerPicker } from "react-native-stickers";
// import { takeSnapshotAsync } from "react-native-view-shot";

// export default class CameraScreen extends React.Component {
//   state = {
//     hasPermission: null,
//     cameraType: Camera.Constants.Type.back,
//     quote: this.props.route.params.quote,
//   };

//   async componentDidMount() {
//     this.getPermissionAsync();
//   }

//   getPermissionAsync = async () => {
//     // Camera roll Permission
//     if (Platform.OS === "ios") {
//       const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//       if (status !== "granted") {
//         alert("Sorry, we need camera roll permissions to make this work!");
//       }
//     }
//     // Camera Permission
//     const { status } = await Permissions.askAsync(Permissions.CAMERA);
//     this.setState({ hasPermission: status === "granted" });
//   };

//   handleCameraType = () => {
//     const { cameraType } = this.state;

//     this.setState({
//       cameraType:
//         cameraType === Camera.Constants.Type.back
//           ? Camera.Constants.Type.front
//           : Camera.Constants.Type.back,
//     });
//   };

//   takePicture = async () => {
//     if (this.camera) {
//       const { uri } = await this.camera.takePictureAsync();
//       console.log("uri", uri);
//       const asset = await MediaLibrary.saveToLibraryAsync(uri);
//       console.log("asset", asset);
//     }
//   };

//   pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//     });
//   };

//   render() {
//     const { hasPermission } = this.state;

//     if (hasPermission === null) {
//       return <View />;
//     } else if (hasPermission === false) {
//       return <Text>No access to camera</Text>;
//     } else {
//       return (
//         <View style={{ flex: 1 }}>
//           <Camera
//             style={{ flex: 1 }}
//             type={this.state.cameraType}
//             ref={(ref) => {
//               this.camera = ref;
//             }}
//           >
//             <View
//               style={{
//                 flex: 1,
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//                 margin: 30,
//               }}
//             >
//               <View style={styles.paragraph}>
//                 {/* This button is just to demonstrate how Amanda found the quote in this.props-DELETE LATER
//                 <Button
//                   title="Get Props"
//                   onPress={() => console.log(this.props.route.params.quote)}
//                 ></Button> */}
//                 <Text>
//                   {` "`}
//                   {this.state.quote}
//                   {`" `}
//                 </Text>
//               </View>
//               <View>
//                 <Image
//                   source={require("../assets/bananaBubble2.png")}
//                   style={styles.frame}
//                 />
//               </View>

//               {/* <StickerPicker
//                 visible={this.state.pickerVisible}
//                 topContainer={
//                   <View
//                     style={{
//                       paddingTop: 60,
//                       paddingBottom: 40,
//                       textAlign: "center",
//                       alignItem: "center",
//                       justifyContent: "center",
//                     }}
//                   ></View>
//                 }
//                 completedEditing={(imageUri, width, height) =>
//                   this.setState({
//                     pickerVisible: false,
//                     finalImage: { imageUri, width, height },
//                   })
//                 }
//                 includeDefaultStickers={true}
//                 imageStyle={null}
//                 previewImageSize={50}
//                 stickerSize={100}
//                 imageSource={
//                   "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
//                 }
//                 stickers={require("../assets/bananaBubble.png")}
//               /> */}
//               <TouchableOpacity
//                 style={{
//                   alignSelf: "flex-end",
//                   alignItems: "center",
//                   backgroundColor: "transparent",
//                 }}
//                 onPress={() => this.pickImage()}
//               >
//                 <Ionicons
//                   name="ios-photos"
//                   style={{ color: "#fff", fontSize: 40 }}
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={{
//                   alignSelf: "flex-end",
//                   alignItems: "center",
//                   backgroundColor: "transparent",
//                 }}
//                 onPress={() => this.takePicture()}
//               >
//                 <FontAwesome
//                   name="camera"
//                   style={{ color: "#fff", fontSize: 40 }}
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={{
//                   alignSelf: "flex-end",
//                   alignItems: "center",
//                   backgroundColor: "transparent",
//                 }}
//                 onPress={() => this.handleCameraType()}
//               >
//                 <MaterialCommunityIcons
//                   name="camera-switch"
//                   style={{ color: "#fff", fontSize: 40 }}
//                 />
//               </TouchableOpacity>
//               {/*<Image
//                 source={require("../assets/bananaBubble.png")}
//                 style={styles.frame}
//               />*/}
//             </View>
//           </Camera>
//         </View>
//       );
//     }
//   }
// }
// const styles = StyleSheet.create({
//   frame: {
//     width: 100,
//     height: 100,
//     justifyContent: "flex-end",
//     position: "absolute",
//     bottom: 65,
//     left: 250,
//   },
//   paragraph: {
//     justifyContent: "flex-end",
//     textAlign: "center",
//     flexWrap: "wrap",
//     padding: 10,
//     position: "absolute",
//     right: 20,
//     bottom: 100,
//     right: 100,
//     opacity: 0.6,
//     backgroundColor: "white",
//     borderRadius: 10,
//   },
// });
