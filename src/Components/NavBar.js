import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
function NavBar() {
    return (
        <Menu size="large">
            <Container>
                <Menu.Item as="a" active>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item as="a">
                    {" "}
                    <Link to="/list">Contact List</Link>
                </Menu.Item>
                <Menu.Item as="a">
                    {" "}
                    <Link to="/add">Add Contact</Link>
                </Menu.Item>
            </Container>
        </Menu>
    );
}

export default NavBar;
