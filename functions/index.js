// const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {onValueCreated} = require("firebase-functions/v2/database");
const {logger} = require("firebase-functions");
const {ref} = require("firebase/database");
admin.initializeApp();

exports.sendNotificationOnContactSubmission = onValueCreated(
    "/Contacts/{contactId}",
    async (snapshot) => {
      const contactData = snapshot.data.val();
      logger.log(contactData);

      try {
        const userId = contactData.userid;

        if (!userId) {
          console.log("No userId found in the contact data.");
          return;
        }
        const userRef = ref(`/User/${userId}/fcmToken`);
        const fcmTokenSnapshot = await userRef.once("value");
        const fcmToken = fcmTokenSnapshot.val();

        if (fcmToken) {
          const message = {
            token: fcmToken,
            notification: {
              title: "New Contact Submission",
              body: `You received a new contact from ${contactData.name}.`,
            },
          };

          // Send the notification
          await admin.messaging().send(message);
          console.log(`Notification sent to user: ${userId}`);
        } else {
          console.log(`No FCM token found for user: ${userId}`);
        }
      } catch (error) {
        console.error(`Error sending notification: ${error.message}`);
      }
    },
);
