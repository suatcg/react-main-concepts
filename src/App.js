import React from "react";
import Tick from "./Components/Tick";
import Welcome from "./Components/Welcome";
import Comment from "./Components/Comment";
import Clock from "./Components/Clock";
import Form from "./Components/Form";
import Toggle from "./Components/Toggle";
import LoginControl from "./Components/Login/LoginControl";
import Mailbox from "./Components/Mailbox";
import Page from "./Components/Banner/Page";
import NumberList from "./Components/Lists/NumberList";
import Blog from "./Components/Blog/Blog";
import NameForm from "./Components/Form/NameForm";
import EssayForm from "./Components/Form/EssayForm";
import FlavorForm from "./Components/Form/FlavorForm";
import Reservation from "./Components/Form/Reservation";
import NameFormUnControlled from "./Components/UnControlled/NameFormUnControlled";
import Calculator from "./Components/StateUp/Calculator";

function App() {
  const comment = {
    date: new Date().toLocaleDateString(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  };

  const messages = ["React", "Re: React", "Re:Re: React"];

  const posts = [
    { id: 1, title: "Hello World", content: "Welcome to learning React!" },
    { id: 2, title: "Installation", content: "You can install React from npm." },
  ];

  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      <Tick />
      <Comment date={comment.date} text={comment.text} author={comment.author} />
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <Clock />
      <Form />
      <Toggle />
      <LoginControl />
      <Mailbox unreadMessages={messages} />
      <Page />
      <NumberList numbers={numbers} />
      <Blog posts={posts} />
      <NameForm />
      <EssayForm />
      <FlavorForm />
      <Reservation />
      <NameFormUnControlled />
      <Calculator />
    </div>
  );
}
export default App;
