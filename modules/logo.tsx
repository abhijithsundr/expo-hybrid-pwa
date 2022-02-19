import { View, Image, Text } from 'react-native';

export function LogoTitle() {
    return (
        <View style={{ flexDirection: "row", alignItems: 'center' }}>
            <Image
                style={{ width: 50, height: 50 }}
                source={require('../assets/cube.jpg')}
            />
            <Text
                style={{
                    color: 'rgb(255, 255, 255)',
                    fontSize: 16,
                    fontWeight: '700',
                    fontFamily: 'comic-sans'
                }}>
                Brand
            </Text>
        </View>

    );
}