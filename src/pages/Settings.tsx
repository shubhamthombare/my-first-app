import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonContent
    } from '@ionic/react';
    import React, { Component } from 'react';
    
    class Settings extends Component {
    render() {
       return (
         <IonContent>
           <IonCard>
           <IonCardHeader>
           <IonCardTitle>Welcome to Settings Page</IonCardTitle>
           </IonCardHeader>
          </IonCard>
         </IonContent>
       );
    }
    }
    
    export default Settings;