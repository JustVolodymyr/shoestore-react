import { FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { Badge,  } from '@material-ui/core';

const Container = styled.div`
   // height: 60px;
`;
const Wrapper = styled.div`
    height: 70px;
    margin: auto;
    overflow: hidden;
    text-align: left;
    white-space: nowrap;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 24px;
    max-width: 1440px;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
    padding: 5px;
    border-right: ${props=> props.direction === "first" && "1px solid #777e90"};
`;
const SearchContainer = styled.span`
    border: 0.5px solid lightgray;
    border-radius: 4px;
    display: flex;
    align-items: center;
    margin-left: 25px;      
    padding: 5px;
    overflow: hidden;
`;

const Input = styled.input`
    width: 100%;
    border:  none;
    outline: none;
`;
const SearchButton = styled.div`

    
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>QpShop</Logo>
                    <MenuItem>Чоловікам</MenuItem>
                    <MenuItem>Жінкам</MenuItem>
                </Left>
                <Center>
                    <SearchContainer>
                        <Search style={{color:"gray", fontSize:16}}/>
                        <Input/>
                    </SearchContainer>
                </Center> 
                 <Right>
                    <Language direction="first">UA</Language>
                    <Language>EN</Language>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sing in</MenuItem>
                    <MenuItem>
                        <FavoriteBorderOutlined/>
                    </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
