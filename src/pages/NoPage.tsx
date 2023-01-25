import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent
  } from '@ionic/react';
  import React, { Component } from 'react';
  
  class NoPage extends Component {
  render() {
     return (
       <IonContent>
         <IonCard>
         <IonCardHeader>
         <IonCardTitle>Welcome to NoPage Page</IonCardTitle>
         </IonCardHeader>
        </IonCard>
       </IonContent>
     );
  }
  }
  
  export default NoPage;