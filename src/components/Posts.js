import React from 'react'
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

const Posts = () => {
  return (
    <>
      <h1 className="text-center text-white style-h1">Posts</h1>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        style={{ backgroundColor: "#db346b", margin: "40px 80px" }}
        color="white"
      >
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            alt="Norway"
            radius={27}
            style={{
              width: "50%",
              margin: "auto",
              padding: "5px 0px",
            }}
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500} color="white">
            Norway Fjord Adventures
          </Text>
          <Badge color="dimmed" variant="light">
            Posted on Aug 9, 2023
          </Badge>
        </Group>

        <Text size="sm" color="white">
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Read More...
        </Button>
      </Card>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        style={{ backgroundColor: "#db346b", margin: "40px 80px" }}
        color="white"
      >
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            alt="Norway"
            radius={27}
            style={{
              width: "50%",
              margin: "auto",
              padding: "5px 0px",
            }}
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500} color="white">
            Norway Fjord Adventures
          </Text>
          <Badge color="dimmed" variant="light">
            Posted on Aug 9, 2023
          </Badge>
        </Group>

        <Text size="sm" color="white">
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Read More...
        </Button>
      </Card>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        style={{ backgroundColor: "#db346b", margin: "40px 80px" }}
        color="white"
      >
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            alt="Norway"
            radius={27}
            style={{
              width: "50%",
              margin: "auto",
              padding: "5px 0px",
            }}
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500} color="white">
            Norway Fjord Adventures
          </Text>
          <Badge color="dimmed" variant="light">
            Posted on Aug 9, 2023
          </Badge>
        </Group>

        <Text size="sm" color="white">
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Read More...
        </Button>
      </Card>
    </>
  );
}

export default Posts