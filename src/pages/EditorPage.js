import React, { useState } from "react";
import Client from "../components/Client";
import Editor from "../components/Editor";

const EditorPage = () => {
  const [clients, setClients] = useState([
    { socketId: 1, username: "sabi" },
    { socketId: 2, username: "shah" },
    { socketId: 3, username: "nag a" },
    { socketId: 4, username: "aliya" },
  ]);
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className="logoImage" alt="logo" src="/code-sync.png" />
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
        <button className="btn copyBtn">Copy Room ID</button>
        <button className="btn leaveBtn">Leave</button>
      </div>

      <div className="editorwrap">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
