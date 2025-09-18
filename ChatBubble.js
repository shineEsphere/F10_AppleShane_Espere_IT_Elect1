import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ChatBubble({ text, isMe, timestamp }) {
  return (
    <View
      style={[
        styles.bubbleContainer,
        isMe ? styles.myBubbleContainer : styles.theirBubbleContainer
      ]}
    >
      <View
        style={[
          styles.bubble,
          isMe ? styles.myBubble : styles.theirBubble
        ]}
      >
        <Text style={isMe ? styles.myText : styles.theirText}>{text}</Text>
        <Text
          style={[
            styles.timestamp,
            isMe ? styles.myTimestamp : styles.theirTimestamp
          ]}
        >
          {timestamp}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bubbleContainer: {
    marginBottom: 16,
    flexDirection: "row"
  },
  myBubbleContainer: {
    justifyContent: "flex-end"
  },
  theirBubbleContainer: {
    justifyContent: "flex-start"
  },
  bubble: {
    maxWidth: "80%",
    padding: 12,
    borderRadius: 18
  },
  myBubble: {
    backgroundColor: "#0078fe",
    borderBottomRightRadius: 4
  },
  theirBubble: {
    backgroundColor: "#e5e5ea",
    borderBottomLeftRadius: 4
  },
  myText: {
    color: "white",
    fontSize: 16
  },
  theirText: {
    color: "black",
    fontSize: 16
  },
  timestamp: {
    fontSize: 10,
    marginTop: 4,
    opacity: 0.7
  },
  myTimestamp: {
    color: "#e0e0e0",
    textAlign: "right"
  },
  theirTimestamp: {
    color: "#666",
    textAlign: "left"
  }
});