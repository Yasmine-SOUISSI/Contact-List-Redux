import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "semantic-ui-react";

import { addItem } from "../JS/Actions/action";
const AddContact = () => {
    const [name, setName] = useState("");
    const [cin, setCin] = useState("");
    const [number, setNumber] = useState("");

    const dispatch = useDispatch();

    const handleContact = (e) => {
        e.preventDefault();
        const contact = {
            id: Math.random(),
            name,
            cin,
            number,
        };
        dispatch(addItem(contact));
    };

    return (
        <Form>
            <Form.Field>
                <label> Name</label>
                <input
                    value={name}
                    placeholder=" Name"
                    name="name"
                    type="text"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
            </Form.Field>
            <Form.Field>
                <label>Phone</label>
                <input
                    value={number}
                    placeholder="number"
                    name="number"
                    type="number"
                    onChange={(e) => {
                        setNumber(e.target.value);
                    }}
                />
            </Form.Field>
            <Form.Field>
                <label>CIN</label>
                <input
                    value={cin}
                    placeholder="cin"
                    name="cin"
                    type="number"
                    onChange={(e) => {
                        setCin(e.target.value);
                    }}
                />
            </Form.Field>

            <Button type="submit" onClick={handleContact}>
                Save
            </Button>
        </Form>
    );
};

export default AddContact;
