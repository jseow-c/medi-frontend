import React, { useState } from "react";

export const StoreContext = React.createContext(null);

export default ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [room, setRoom] = useState("");
  const [roomId, setRoomId] = useState("");
  const [name, setName] = useState("");
  const [step, setStep] = useState(0);
  const [medicine, setMedicine] = useState([]);
  const [payment, setPayment] = useState(0);
  const [status, setStatus] = useState(false);
  const [timing, setTiming] = useState([]);
  const [message, setMessage] = useState([]);

  const store = {
    loadingStore: [loading, setLoading],
    dataStore: [data, setData],
    roomStore: [room, setRoom],
    roomIdStore: [roomId, setRoomId],
    nameStore: [name, setName],
    stepStore: [step, setStep],
    medicineStore: [medicine, setMedicine],
    paymentStore: [payment, setPayment],
    statusStore: [status, setStatus],
    timingStore: [timing, setTiming],
    messageStore: [message, setMessage]
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
