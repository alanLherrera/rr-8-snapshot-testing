import React from "react";
import Card from "react-bootstrap/Card";
import Jake from "./jake.jpeg";

function GitHubCard() {
  return (
    <div className="card">
      <Card style={{ width: "18rem" }}>
        {/* Use your GitHub info instead, but Mickey Mouse is used as an example */}
        <Card.Img variant="top" src={Jake} />
        {/* Source: https://en.wikipedia.org/wiki/Mickey_Mouse */}
        <Card.Body>
          <Card.Title>Jake The Dog</Card.Title>
          <Card.Text>
            whats up! yall its jake the dog from adventure time how yall doin
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GitHubCard;
