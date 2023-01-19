// import { Fragment } from "react";
import Book from "./Components/Book";
import "./App.css";
const firstBook = {
  author: "Gary D. Smidt",
  title: "The Wednesday Wars: A Newbery Honor Award Winner",
  img: "https://m.media-amazon.com/images/I/51OCohihRNL._SX334_BO1,204,203,200_.jpg",
};
const secondBook = {
  author: "Alex Michaelides",
  title: "The Silent Patient",
  img: "https://m.media-amazon.com/images/I/41j1-YNROeL._SX324_BO1,204,203,200_.jpg",
};
function App() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

export default App;
