import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
  IonDatetime,
  IonSelectOption,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonPopover
} from "@ionic/react";
import "./About.scss";
import { calendar, pin, more } from "ionicons/icons";
import AboutPopover from "../components/AboutPopover";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [popoverEvent, setPopoverEvent] = useState();

  const presentPopover = (e: React.MouseEvent) => {
    setPopoverEvent(e.nativeEvent);
    setShowPopover(true);
  };
  const conferenceDate = "2047-05-17";

  return (
    <IonPage id="about-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>About</IonTitle>
          <IonButtons slot="end">
            <IonButton icon-only onClick={presentPopover}>
              <IonIcon slot="icon-only" icon={more}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="about-header">
          <img src="assets/img/fetch-logo.jpg" alt="Fetch logo" />
        </div>
        <div className="about-info">
          {/* <h4 className="ion-padding-start">Fetch!</h4> */}
          <h2 className="ion-padding-start">
            Welcome to{" "}
            <b style={{ color: "Green" }}>
              <i>Fetch!</i>
            </b>
          </h2>

          {/* <IonList lines="none">
            <IonItem>
              <IonIcon icon={calendar} slot="start"></IonIcon>
              <IonLabel position="stacked">Date</IonLabel>
              <IonDatetime
                displayFormat="MMM DD, YYYY"
                max="2056"
                value={conferenceDate}
              ></IonDatetime>
            </IonItem>

            <IonItem>
              <IonIcon icon={pin} slot="start"></IonIcon>
              <IonLabel position="stacked">Location</IonLabel>
              <IonSelect>
                <IonSelectOption value="madison" selected>
                  Madison, WI
                </IonSelectOption>
                <IonSelectOption value="austin">Austin, TX</IonSelectOption>
                <IonSelectOption value="chicago">Chicago, IL</IonSelectOption>
                <IonSelectOption value="seattle">Seattle, WA</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList> */}

          <p className="ion-padding-start ion-padding-end">
            <b>Fetch!</b> is a mobile application for managing storm water
            quality in your local community.
          </p>
          <p className="ion-padding-start ion-padding-end">
            {/* <ul style={{ listStyleType: "none" }}> */}
            <ol>
              <li>
                Take a{" "}
                <i>
                  <b style={{ color: "Blue" }}>
                    {" "}
                    Clean Water commitment Pledge!
                  </b>
                </i>{" "}
              </li>
              <li>
                Report incidents that affects{" "}
                <i style={{ color: "Blue" }}>Stormwater quality</i> in your
                area.
              </li>
              <li>
                Test Stormwater and report quality metrics for use by your Local
                Government.
              </li>
              <li>Participate in Stormwater labeling projects.</li>
              <li>Learn fun facts about Stormwater management and quality.</li>
            </ol>
          </p>
          <p className="ion-padding-start ion-padding-end">
            Developed by <b style={{ color: "Blue" }}>Arnav Meduri Nanduri</b>
            {", "}
            <b style={{ color: "Blue" }}>Abhinav Meduri Nanduri</b>
            {", "}
            <b style={{ color: "Blue" }}>Siddharth Maruvada</b>
            {", and "}
            <b style={{ color: "Blue" }}>Kartik Nanduri</b>
            {" from "}
            <b>
              <a href="https://www.wcpss.net/carnagems">
                Carnage Magnet Middle School, Raleigh.
              </a>
            </b>
          </p>
          <p className="ion-padding-start ion-padding-end">
            We would like to thank{" "}
            <b style={{ color: "Blue" }}>
              <a href="http://www.openstream.com/">OpenStream Inc. </a>
            </b>{" "}
            for their guidance in developing and hosting the application. Also
            would like to thank{" "}
            <b style={{ color: "Blue" }}>
              <a href="https://www.townofcary.org/services-publications/water-sewer/stormwater-management/">
                The Town of Cary
              </a>
            </b>{" "}
            and{" "}
            <b style={{ color: "Blue" }}>
              <a href="https://www.apexnc.org/263/Stormwater-Utility-Engineering">
                The Town of Apex
              </a>
            </b>{" "}
            for their valuable input in developing application use cases.
          </p>
        </div>
      </IonContent>
      <IonPopover
        isOpen={showPopover}
        event={popoverEvent}
        onDidDismiss={() => setShowPopover(false)}
      >
        <AboutPopover dismiss={() => setShowPopover(false)} />
      </IonPopover>
    </IonPage>
  );
};

export default React.memo(About);
