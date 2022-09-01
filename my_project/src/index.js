import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
// import faker from 'faker';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const el = document.getElementById('root')
// const root = ReactDOM.createRoot(el);

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h3>Warning!</h3>
        <p>Would you Like to End the Game?</p>
      </ApprovalCard>
      < ApprovalCard>
        <CommentDetails
          author="David"
          timeAgo="Today at 6:00PM"
          readerView="Insighful Content"
          buttonValue="Reject Supply"
          avatar="https://cdn.pixabay.com/photo/2022/07/25/15/39/mum-7344070_960_720.jpg"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          author="Bolu"
          timeAgo="Yesterday at 1:00AM"
          buttonValue="Proceed"
          readerView="Very Educative Blog"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          author="Raiy"
          timeAgo="Today at 1:40PM"
          buttonValue="Opt-In"
          readerView="Nice Blog Post!!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
