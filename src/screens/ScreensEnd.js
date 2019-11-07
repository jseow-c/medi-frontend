import React, { useState, useEffect, useContext } from "react";
import { StoreContext } from "../context";
import UIMessage from "../components/UI/Message";

const ScreensEnd = () => {
  const [loading, setLoading] = useState(true);
  const {
    roomIdStore: [roomId, setRoomId],
    messageStore: [message]
  } = useContext(StoreContext);
  useEffect(() => {
    setRoomId("");
  }, [setRoomId]);
  useEffect(() => {
    if (!roomId) {
      setLoading(false);
    }
  }, [setLoading, roomId]);
  return (
    <div className="container-end">
      <div className="content">
        {!loading && (
          <>
            <h1>Conversation Backup</h1>
            {message.reverse().map(msg => (
              <UIMessage key={msg.id} message={msg} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ScreensEnd;
