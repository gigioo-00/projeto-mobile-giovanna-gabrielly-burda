import { StyleSheet, Image, Platform, Button } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#004aad', dark: '#004aad' }}
      headerImage={
        <IconSymbol name={'number'} color={''}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">O que deseja realizar?₊⊹</ThemedText>
      </ThemedView>
      
      <Collapsible title="CARTÃO DE CRÉDITO">

       <ThemedText>
       FATURA ATUAL : ****
      </ThemedText>
    
      <ThemedText>
      LIMITE DISPONÍVEL :  ****
      </ThemedText>
      

      </Collapsible>


      <Collapsible title="ASSINATURAS">
        <ThemedText>
        <ThemedText type="defaultSemiBold">Suas assinaturas:</ThemedText>{' '}
       </ThemedText>

      <Collapsible title="recarregar celular">
       <Button color={'#004aad'} 
                onPress={() => {console.log('You tapped the button!');}}
                title="ver"/>
      </Collapsible>

      <Collapsible title="Transporte">
       <Button color={'#004aad'} 
                onPress={() => {console.log('You tapped the button!');}}
                title="ver"/>
      </Collapsible>

      <Collapsible title="Straming">
       <Button color={'#004aad'} 
                onPress={() => {console.log('You tapped the button!');}}
                title="ver"/>
      </Collapsible>

      </Collapsible>
      <Collapsible title="METAS">

        <ThemedText>
        VIAGENS: R$ 500,00
        </ThemedText>
        <ThemedText>
        RESERVA: R$ 700,00
        </ThemedText>
        <ThemedText>
        COMPRAS: R$ 200,00
        </ThemedText>
        <ThemedText></ThemedText>

        <Button color={'#004aad'} 
                onPress={() => {console.log('You tapped the button!');}}
                title="DEPOSITAR / RETIRAR"/>
      </Collapsible>

      <Collapsible title="TRANSAÇÕES">
        
         <ThemedText type="defaultSemiBold">Suas transações:</ThemedText> 
         <ThemedText></ThemedText>
         <ThemedText>20/04/2025 - 12:00</ThemedText>
         <Collapsible title="vizualizar">
         <ThemedText>Pagamento de R$ 9,00 em Lanchonete XXX no cartão de débito.</ThemedText>
         </Collapsible>
         <ThemedText></ThemedText>
         <ThemedText>21/04/2025 - 13:00</ThemedText>
         <Collapsible title="vizualizar">
         <ThemedText>Pagamento de R$ 30,00 para User2 no PIX.</ThemedText>
         </Collapsible>
         <ThemedText></ThemedText>
         <ThemedText>22/04/2025 - 20:00</ThemedText>
         <Collapsible title="vizualizar">
         <ThemedText>Pagamento de R$ 100,00 em Restaurante XXX no cartão de débito.</ThemedText>
         </Collapsible>
         <ThemedText></ThemedText>
         <Button color={'#004aad'} 
                onPress={() => {console.log('You tapped the button!');}}
                title="ver mais"/>
             
      </Collapsible>

      

      <Button color={'#336ab4'} 
                onPress={() => {console.log('You tapped the button!');}}
                title="AGÊNCIA DA CONTA                                   >"/>


      <Button color={'#336ab4'} 
                onPress={() => {console.log('You tapped the button!');}}
                title="SUPORTE                                                       >"/>

         
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
