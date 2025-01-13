import React from 'react';
import { View, StyleSheet } from 'react-native';
import VoiceTranscription from '../components/Survey/VoiceTranscription';
import LocationPicker from '../components/Survey/LocationPicker';

const SurveyScreen = () => {
  const handleTranscriptionComplete = (text: string) => {
    console.log('Transcription:', text);
  };

  const handleLocationSelect = (location: any) => {
    console.log('Selected location:', location);
  };

  return (
    <View style={styles.container}>
      <VoiceTranscription onTranscriptionComplete={handleTranscriptionComplete} />
      <LocationPicker onLocationSelect={handleLocationSelect} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default SurveyScreen; 