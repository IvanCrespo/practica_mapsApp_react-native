import {PropsWithChildren, useEffect} from 'react'
import {AppState} from 'react-native'
import {usePermissionsStore} from '../store/permissions/usePermissionStore'
import {NavigationProp, useNavigation} from '@react-navigation/native'
import {RootStackParams} from '../navigation/StackNavigator'

export const PermissionsChecker = ({children}: PropsWithChildren) => {
    const {locationStatus, checkLocationPermission} = usePermissionsStore()
    const navigation = useNavigation<NavigationProp<RootStackParams>>()

    useEffect(() => {
        if (locationStatus === 'granted') {
            //navigation.navigate('MapScreen')
            navigation.reset({
                routes: [{name: 'MapScreen'}],
            })
        } else if (locationStatus !== 'undetermined') {
            //navigation.navigate('PermissionsScreen')
            navigation.reset({
                routes: [{name: 'PermissionsScreen'}],
            })
        }
    }, [locationStatus])

    useEffect(() => {
        checkLocationPermission()
    }, [])

    useEffect(() => {
        const subscription = AppState.addEventListener(
            'change',
            nextAppState => {
                if (nextAppState === 'active') {
                    checkLocationPermission()
                }
            },
        )

        return () => {
            subscription.remove()
        }
    }, [])

    return <>{children}</>
}
