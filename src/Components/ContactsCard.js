import React from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Image } from "semantic-ui-react";
import { deleteItem, getItem } from "../JS/Actions/action";

const ContactCard = ({ el }) => {
    const dispatch = useDispatch();
    return (
        <Card>
            <Card.Content>
                <Image
                    floated="right"
                    size="mini"
                    src="https://react.semantic-ui.com/images/avatar/large/molly.png"
                />
                <Card.Header>{el.name}</Card.Header>
                <Card.Meta>{el.cin}</Card.Meta>
                <Card.Description>
                    <strong>{el.number}</strong>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className="ui two buttons">
                    <Button
                        basic
                        color="green"
                        onClick={() => {
                            dispatch(getItem(el.id));
                        }}
                    >
                        Edit
                    </Button>
                    <Button
                        basic
                        color="red"
                        onClick={() => dispatch(deleteItem(el.id))}
                    >
                        Delete
                    </Button>
                </div>
            </Card.Content>
        </Card>
    );
};

export default ContactCard;
