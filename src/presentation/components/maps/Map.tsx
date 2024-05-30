import {Platform, StyleSheet} from 'react-native'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import { Location } from '../../../infrastructure/interfaces/location'

interface Props {
    showsUserLocation?: boolean
    initialLocation: Location
}

export const Map = ({showsUserLocation = true, initialLocation}: Props) => {
    return (
        <>
            <MapView
                showsUserLocation={showsUserLocation}
                provider={Platform.OS === 'ios' ? undefined : PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{flex: 1}}
                region={{
                    latitude: initialLocation.latitude,
                    longitude: initialLocation.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}>
                {/* <Marker coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324
                    }} title='Este es el titulo del marcador' description='Este es el cuerpo del marcador' image={require('../../../assets/custom-marker.png')}/> */}
            </MapView>
        </>
    )
}