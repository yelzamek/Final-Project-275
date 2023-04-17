import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDrag } from "react-dnd";

export function CenterList(): JSX.Element {
    const [CenterList, setCenterList] = useState<[]>([]);

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        // "type" is required. It is used by the "accept" specification of drop targets.
        type: "BOX",
        // The collect function utilizes a "monitor" instance (see the Overview for what this is)
        // to pull important pieces of state from the DnD system.
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }));

    return (
        <div>
            <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1 }}>
                {/* The drag ref marks this node as being the "pick-up" node */}
                <div role="Handle" ref={drag} />
            </div>
            <Form.Group controlId="userEmotions">
                <Form.Label>Select your user</Form.Label>
                <Form.Select value={userType} onChange={updateUserType}>
                    <option value="superUser">superUser</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </Form.Select>
            </Form.Group>
        </div>
    );
}
