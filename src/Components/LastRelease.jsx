import {Container, Row, Card, Button } from "react-bootstrap";
import scifiBook from "../data/books/scifi.json";

const LastRelease = () => {
  return (
    <Container>
      <Row>
            {scifiBook.map(book) => (
        <Card key={book.asin} style={{ width: "18rem" }}>
             <Card.Img variant="top" src={book.img} alt={book.title}/>
             <Card.Body>
               <Card.Title>{book.title}</Card.Title>
               <Card.Text>
                 {book.category}
               </Card.Text>
               <Button variant="primary">4FREE</Button>
             </Card.Body>   
        </Card>
            )}
      </Row>
    </Container>
  );
};
export default LastRelease;
