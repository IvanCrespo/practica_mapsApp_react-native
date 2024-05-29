import {View, Text, Pressable} from 'react-native'
import React from 'react'
import {globalStyles} from '../../../config/theme/styles'
import { usePermissionsStore } from '../../store/permissions/usePermissionStore'
import { requestLocationPermission } from '../../../actions/permissions/location';

export const PermissionsScreen = () => {

  const {locationStatus, requestLocationPermission} =usePermissionsStore();

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Habilitar ubicación</Text>
            <Pressable style={globalStyles.btnPrimary} onPress={requestLocationPermission}>
                <Text style={{color: 'white'}}>Habilitar Localización</Text>
            </Pressable>
            <Text>Estado actual: {locationStatus}</Text>
        </View>
    )
}
