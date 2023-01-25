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
  
  class Allactivities extends Component {
  render() {
     return (
       <IonPage>
        <IonHeader>
          <IonToolbar>
          <IonButtons slot='start'>
              <IonMenuButton />
            </IonButtons>
            <IonTitle>All Activities</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <h1>All Activities Work!</h1>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
       </IonPage>
     );
  }
  }
  
  export default Allactivities;