import React from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

const Posts = () => {
  return (
    <>
      <Card
        padding="lg"
        style={{
          background: "#ECF9E1",
          padding: "25px 20px",
          borderRadius:'0px',
        }}
        color="white"
      >
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            alt="Norway"
            style={{
              width: "52%",
              margin: "auto",
              padding: "5px 0px",
            }}
          />
        </Card.Section>

        <div style={{margin:'20px 60px'}}>
          <Group position="apart" mt="md" mb="xs">
            <Text weight={500} color="black">
              Norway Fjord Adventures
            </Text>
            <Badge color="dimmed" variant="dark">
              Posted on Aug 9, 2023
            </Badge>
          </Group>

          <Text size="sm" color="black">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="green" mt="md" radius="md">
            Read More...
          </Button>
        </div>
      </Card>

      <Card
        padding="lg"
        style={{
          background: "#ECF9E1",
        }}
        color="white"
      >
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            alt="Norway"
            style={{
              width: "52%",
              margin: "auto",
              padding: "5px 0px",
            }}
          />
        </Card.Section>

        <div style={{margin:'20px 60px'}}>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500} color="black">
            Norway Fjord Adventures
          </Text>
          <Badge color="dimmed" variant="dark">
            Posted on Aug 9, 2023
          </Badge>
        </Group>

        <Text size="sm" color="black">
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button color="green" mt="md" radius="md">
          Read More...
        </Button>
        </div>
      </Card>

      <Card
        padding="lg"
        style={{
          background: "#ECF9E1",
        }}
        color="white"
      >
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            alt="Norway"
            style={{
              width: "52%",
              margin: "auto",
              padding: "5px 0px",
            }}
          />
        </Card.Section>

        <div style={{margin:'20px 60px'}}>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500} color="black">
            Norway Fjord Adventures
          </Text>
          <Badge color="dimmed" variant="dark">
            Posted on Aug 9, 2023
          </Badge>
        </Group>

        <Text size="sm" color="black">
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button color="green" mt="md" radius="md">
          Read More...
        </Button>
        </div>
      </Card>
    </>
  );
};

export default Posts;
