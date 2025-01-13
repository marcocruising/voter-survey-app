declare module '@react-native-voice/voice' {
  export interface SpeechResultsEvent {
    value: string[];
  }

  export interface VoiceModule {
    start: (locale?: string) => Promise<void>;
    stop: () => Promise<void>;
    destroy: () => Promise<void>;
    removeAllListeners: () => void;
    onSpeechResults: (e: SpeechResultsEvent) => void;
  }

  const Voice: VoiceModule;
  export default Voice;
} 