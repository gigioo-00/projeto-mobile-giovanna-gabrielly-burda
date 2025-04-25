import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#004aad', dark: '#004aad' }}
      headerImage={
        <Image
          source={require('@/assets/images/LOGO.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Boa Tarde, User!</ThemedText>
        </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Saldo: R$1.000,00</ThemedText>
      </ThemedView>

      <Button color={'#336ab4'} 
        onPress={() => {console.log('You tapped the button!');}}
        title="ACESSAR EXTRATO                                   >"/>

      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          o que você deseja fazer?
        </ThemedText>
      </ThemedView>

      <Button color={'#004aad'} 
        onPress={() => {console.log('You tapped the button!');}}
        title="⤿TRANSFERIR VIA PIX"/>

<Button color={'#004aad'} 
        onPress={() => {console.log('You tapped the button!');}}
        title="⤿PAGAR"/>

<Button color={'#004aad'} 
        onPress={() => {console.log('You tapped the button!');}}
        title="⤿TRANSFERIR"/>

<Button color={'#004aad'} 
        onPress={() => {console.log('You tapped the button!');}}
        title="⤿DEPOSITAR"/>

<ThemedView></ThemedView>

<ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">                SEUS CARTÕES</ThemedText>
      </ThemedView>
      
      <Collapsible title="cartão virtual ₊⊹">
        <ThemedText>
          compre online com o seu saldo gigipix!!
        </ThemedText>

        <ThemedText></ThemedText>

        <ThemedText>
        <Button color={'#004aad'} 
        onPress={() => {console.log('You tapped the button!');}}
        title="acessar"/>
        </ThemedText>

      </Collapsible>

      <Collapsible title="cartão físico ₊⊹">
        <ThemedText>
          compre na hora com o seu saldo gigipix!!
        </ThemedText>

        <ThemedText></ThemedText>

        <ThemedText>
        <Button color={'#004aad'} 
        onPress={() => {console.log('You tapped the button!');}}
        title="acessar"/>
        </ThemedText>

      </Collapsible>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 220,
    width: 390,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
