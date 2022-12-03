export const addMessage = (
    author,
    content,
    sentAt,
    messageId,
) => {
    const messages = document.querySelector('#messages');

    if(messages) {
        const createdAtDateString = createdAt.toDate().toLocaleString();

        const message = `
        <message id="${messageId}">
        <div>
          <header>
            <h5>${author}</h5>
            <span> ${sentAt} </span>
          </header>
          <p>${content}</p>
        </div>
      </message>
        `;
        messages.innerHTML += message;
    };
};