import { Link } from "react-router-dom";
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

function PostDetailsPage() {
  return (
    <>
      <Container>
        <Card withBorder padding="lg" radius="md">
          <Card.Section mb="sm">
            <Image
              src="https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              alt="Top 50 underrated plants for house decoration"
              height={180}
            />
          </Card.Section>

          <Badge w="fit-content" variant="light">
            decorations
          </Badge>

          <Text fw={700} mt="xs">
            Top 50 underrated plants for house decoration
          </Text>

          <Group mt="lg">
            <Avatar
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
              radius="sm"
            />
            <div>
              <Text fw={500}>Elsa Gardenowl</Text>
              <Text fz="xs" c="dimmed">
                posted 34 minutes ago
              </Text>
            </div>
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
  // do something with this
  return null;
};

export default PostDetailsPage;
