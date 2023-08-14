import { useState } from "react";
import people from "./data";
// import React Icons
import {
  FaQuoteRight,
  FaChevronCircleLeft,
  FaChevronCircleRight,
} from "react-icons/fa";

const App = () => {
  // state
  const [index, setIndex] = useState(0);

  // console.log(Index);

  const { image, name, job, text } = people[index];

  // event handling

  // const increaseHandler = () => {
  //   setIndex(index === 3 ? 0 : index + 1);
  // };
  // const decreaseHandler = () => {
  //   setIndex(index === 0 ? 3 : index - 1);
  // };

  // 補充 (使用到 people.length)
  const increaseHandler = () => {
    // 使用 mod
    // 4 % 4 又會變成 0 (index 只會在 0, 1, 2, 3 循環)
    setIndex((index + 1) % people.length);
  };
  const decreaseHandler = () => {
    // 也是使用 mod 但要稍微變化
    // 4 % 4 又會變成 0 (index 只會在 3, 2, 1, 0 循環)
    setIndex((index - 1 + people.length) % people.length);
  };

  const randomHandler = () => {
    let randomNumber;
    // do while loop
    do {
      randomNumber = Math.floor(Math.random() * people.length);
    } while (randomNumber === index);
    // console.log(randomNumber);
    setIndex(randomNumber);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <h3 className="author">{name}</h3>
        <h4 className="job">{job}</h4>
        <p className="info">{text}</p>

        <div className="btn-container">
          <button type="button" className="prev-btn" onClick={decreaseHandler}>
            <FaChevronCircleLeft />
          </button>
          <button type="button" className="next-btn" onClick={increaseHandler}>
            <FaChevronCircleRight />
          </button>
        </div>

        <button
          type="button"
          className="btn btn-hipster"
          onClick={randomHandler}
        >
          surprise me
        </button>
      </article>
    </main>
  );
};

export default App;
