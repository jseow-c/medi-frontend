import React from "react";

function createMarkup(htmlString) {
  return { __html: htmlString };
}

function formatText(normalText) {
  return normalText.split("\n").map((item, key) => {
    return (
      <span key={key}>
        {item}
        <br />
      </span>
    );
  });
}

const UIMessage = ({ message }) => {
  const time = message.created
    .split(".")[0]
    .split("T")
    .join(" ");
  const content = Object.keys(message).includes("html") ? (
    <div
      className="message-body"
      dangerouslySetInnerHTML={createMarkup(message.html)}
    />
  ) : (
    <div className="message-body">{formatText(message.text)}</div>
  );
  return (
    <article className="message is-dark w-100">
      <div className="message-header">
        <p style={{ marginBottom: 0 }}>@{message.personEmail}</p>
        <p className="is-pulled-right">created at {time}</p>
      </div>
      {content}
    </article>
  );
};

export default UIMessage;
