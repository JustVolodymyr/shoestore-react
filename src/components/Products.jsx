import styled from "styled-components";
import { popularProducts } from '../data';
import Product from "./Product";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;


    margin: auto;
    align-items: center;
    box-sizing: border-box;
    padding: 0 20px;
    max-width: 1440px;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;