import Book from "./Book";
import "./BookList.css";

const BookList = (props) => {
  const books = [
    {
      author: "Gary D. Smidt",
      title: "The Wednesday Wars: A Newbery Honor Award Winner",
      img: "https://m.media-amazon.com/images/I/51OCohihRNL._SX334_BO1,204,203,200_.jpg",
    },
    {
      author: "Alex Michaelides",
      title: "The Silent Patient",
      img: "https://m.media-amazon.com/images/I/41j1-YNROeL._SX324_BO1,204,203,200_.jpg",
    },
    {
      author: "Harper Lee",
      title: "To Kill a Mockingbird",
      img: "https://m.media-amazon.com/images/I/51IXWZzlgSL._SX330_BO1,204,203,200_.jpg",
    },
  ];
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book book={book} />;
      })}
    </section>
  );
};

export default BookList;
