import React, { useState, useEffect } from 'react';
import { View, Button, Platform } from 'react-native';
import Voice, { SpeechResultsEvent } from '@react-native-voice/voice';

interface VoiceTranscriptionProps {
  onTranscriptionComplete?: (text: string) => void;
}

const VoiceTranscription: React.FC<VoiceTranscriptionProps> = ({ onTranscriptionComplete }) => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>('');

  useEffect(() => {
    Voice.onSpeechResults = (e: SpeechResultsEvent) => {
      const transcriptText = e.value[0];
      setTranscript(transcriptText);
      onTranscriptionComplete?.(transcriptText);
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, [onTranscriptionComplete]);

  const startRecording = async () => {
    try {
      await Voice.start('en-US');
      setIsRecording(true);
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = async () => {
    try {
      await Voice.stop();
      setIsRecording(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Button 
        title={isRecording ? "Stop Recording" : "Start Recording"}
        onPress={isRecording ? stopRecording : startRecording}
      />
    </View>
  );
};

export default VoiceTranscription; 