import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { Button, Container } from "@mantine/core";
import {
  Card,
  Image,
  Group,
  Text,
  Avatar,
  Badge,
} from '@mantine/core';

import { useLoaderData } from "react-router-dom";

function PostDetailsPage() {
  const post = useLoaderData();

  return (
    <>
      <Container>
        <Card withBorder padding="lg" radius="md">
          <Card.Section mb="sm">
            <Image
              src={post.image}
              alt={post.title}
              height={200}
              width={150}
            />
          </Card.Section>

          <Badge w="fit-content" variant="light">
          {post.category}
          </Badge>

          <Text fw={700} mt="xs">
          {post.content}
          </Text>

          <Group mt="lg">
            <Text fw={500}>Elsa Gardenowl</Text>
          </Group>
        </Card>

        <Button>
          <Link to="/posts">Back to Posts</Link>
        </Button>
      </Container>
    </>
  );
}

export const postDetailsLoader = async ({ params }) => {
  const res = await axios.get(`${DOMAIN}/api/posts/${params.id}`);
  console.log("I ran!");
  return res.data;
};

export default PostDetailsPage;
