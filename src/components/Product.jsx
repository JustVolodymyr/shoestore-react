import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
  import styled from "styled-components";

const Container = styled.div`
  min-width: 300px;
  min-height: 400px;
  border: 1px solid #eee;
  overflow: hidden;
  padding: 10px;
  box-shadow: 2px 2px 12px rgba(47,47,47,0.40);
  margin: 10px;
  transition: 0.3s linear;
  &:hover {
    box-shadow: none;
  }
`;

const Image = styled.img`
  max-width: 300px;
  width: 100%;
  height: 100%;
  max-height: 300px;
  display: block;
  object-fit: cover;
`;

const Name = styled.a`
  text-decoration: none;
  color: #333;
  &:hover {
    color: crimson;
  }
`;

const Price = styled.span`
  display: block;
  color: crimson;
`;

const Content = styled.div`

`;

const Button = styled.button`
  border: none;
  outline: none;
  background: #333;
  color: white;
  width: 100%;
  height: 40px;
  display: block;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 15px 0;
`;



const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <div>
        <Content>
          <Name>{item.name}</Name>
          <Price>{item.price}$</Price>
          <Button>Add to card</Button>
        </Content>
      </div>
    </Container>
  );
};

export default Product;