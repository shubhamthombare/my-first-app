import {
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
  } from '@ionic/react';
  import React, { Component } from 'react';
// import Header from '../components/Header';
  
  class Addactivity extends Component {
  render() {
     return (
       <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Add Activity</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <h1>Add Activity Work!</h1>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
       </IonPage>
     );
  }
  }
  
  export default Addactivity;