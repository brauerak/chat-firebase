import { getDocs } from "firebase/firestore"
import { addMessage } from "./addmessage";


export const renderMessages = (messagesCollection) => {
    getDocs(messagesCollection).then((result) => {
        result.docs.forEach((doc) => {
            const message = doc.data();
            const messageId = doc.id;

            addMessage(
                message.author,
                message.content,
                message.sentAt,
                messageId,
            );
        });
    });
};