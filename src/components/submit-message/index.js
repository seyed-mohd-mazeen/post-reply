import { useState } from "react";
import { format } from "date-fns";
import "./style.css";
import Avatar from "../../assets/avatar.png";
import Avatar2 from "../../assets/avatar2.png";
function Submit() {
  const date1 = format(new Date(), "do MMM yyyy hh:mm a");
  const [selectedMessageIndex, setSelectedMessageIndex] = useState(null);

  const [list, setList] = useState([
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      username: "Mazeen",
      timestamp1: date1,
      reply: [],
    },
  ]);

  const [newMessage, setNewMessage] = useState({
    message: "",
    username: "",
    timestamp1: date1,
    reply: [],
    replyMessage: "",
    replyName: "",
  });

  function addMessage() {
    if (newMessage.message === "") {
      alert("Enter Message");
    } else if (newMessage.username === "") {
      alert("Enter Username");
    } else {
      setList([
        ...list,
        {
          message: newMessage.message,
          username: newMessage.username,
          timestamp1: date1,
          reply: [],
        },
      ]);
      console.log(...list);
    }
  }

  function addReply() {
    if (newMessage.replyMessage === "") {
      alert("Enter Reply");
    } else if (newMessage.replyName === "") {
      alert("Enter Username");
    } else {
      // step 1: get the selected index
      // step 2: get the selected item from list using selected index
      // step 3: add reply content to the selected item
      // step 4: splice list - remove old item and add the modified selected item
      const modify_list = [...list];
      const selectedMessage = modify_list[selectedMessageIndex];
      console.log(selectedMessage);
      selectedMessage.reply.push({
        ...newMessage,
      });
      console.log(modify_list);
      setList(modify_list);
    }
  }

  return (
    <div className="main-container">
      <input
        className="mb-10 message-field"
        type="text"
        placeholder="Message"
        onChange={(e) =>
          setNewMessage({ ...newMessage, message: e.target.value })
        }
        value={newMessage.message}
      />
      <div className="row">
        <div className="cell-1 mr-10">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) =>
              setNewMessage({ ...newMessage, username: e.target.value })
            }
            value={newMessage.username}
          />
        </div>
        <div className="cell-1">
          <button onClick={() => addMessage()}>Post</button>
        </div>
      </div>
      <div className="submit-content">
        {list.map((item, messageIndex) => (
          <div className="submit-card" key={messageIndex}>
            <div className="row mb-10">
              <div className="cell-70 t-left">
                <img src={Avatar} alt="Avatar" height="40" />
              </div>
              <div className="cell-1 t-left">
                <p className="user">{item.username}</p>
                <p className="user">Designation</p>
              </div>
              <div className="cell-1 t-right">
                <p className="date">{item.timestamp1}</p>
              </div>
            </div>
            <div className="row t-left">
              <p className="message-box">{item.message}</p>
            </div>
            {item.reply.map((replies, replyIndex) => (
              <>
                <div className="row mb-10 mt-10" key={replyIndex}>
                  <div className="cell t-left mlr-10">
                    <img src={Avatar2} alt="Avatar" height="40" />
                  </div>
                  <div className="cell-1 t-left">
                    <p className="user">{replies.replyName}</p>
                    <p className="user">Designation</p>
                  </div>
                  <div className="cell-1 t-right">
                    <p className=" date">{replies.timestamp1}</p>
                  </div>
                </div>
                <div className="row t-left">
                  <p className="message-box">{replies.replyMessage}</p>
                </div>
              </>
            ))}

            <div className="row">
              <button
                className="replybtn"
                onClick={() => setSelectedMessageIndex(messageIndex)}
              >
                <i className="fa-solid fa-reply"></i>Reply
              </button>
            </div>
            {selectedMessageIndex === messageIndex && (
              <div className="row">
                <div className="cell-1 mr-10">
                  <input
                    type="text"
                    placeholder="Reply"
                    onChange={(e) =>
                      setNewMessage({
                        ...newMessage,
                        replyMessage: e.target.value,
                      })
                    }
                    value={newMessage.replyMessage}
                  />
                </div>
                <div className="cell-1 mr-10">
                  <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) =>
                      setNewMessage({
                        ...newMessage,
                        replyName: e.target.value,
                      })
                    }
                    value={newMessage.replyName}
                  />
                </div>
                <div className="cell-1">
                  <button onClick={addReply}>Post Reply</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Submit;
