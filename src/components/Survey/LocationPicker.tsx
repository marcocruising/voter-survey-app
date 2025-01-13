import React, { useState } from 'react';
import MapView, { Marker, Region, MapEvent } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';

interface Location {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface LocationPickerProps {
  onLocationSelect?: (location: Location) => void;
}

const LocationPicker: React.FC<LocationPickerProps> = ({ onLocationSelect }) => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const handleMapPress = (e: MapEvent) => {
    const newLocation = {
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    setSelectedLocation(newLocation);
    onLocationSelect?.(newLocation);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        onPress={handleMapPress}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {selectedLocation && (
          <Marker
            coordinate={{
              latitude: selectedLocation.latitude,
              longitude: selectedLocation.longitude,
            }}
            title="Issue Location"
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default LocationPicker; 