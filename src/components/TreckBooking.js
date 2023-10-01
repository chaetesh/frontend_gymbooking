import React, { useState } from "react";
import { Card, Image, Text, Badge, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { Container, Paper, TextInput, Button, Select } from "@mantine/core";
import { Calendar } from "@mantine/dates";

const TreckBooking = () => {
  const [opened, { open, close }] = useDisclosure(false);
  // Create state variables to store user input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [eventDate, seteventDate] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const options = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
  ];
  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle form submission logic here, for example, sending data to an API.
    // For this example, we'll just log the user input.
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Mobile Number:", mobileNumber);
    console.log("Number of Attendees:", selectedValue);
  };

  return (
    <>
      <div
        class="book-sm"
        style={{ backgroundColor: "#ECF9E1", padding: "20px 80px" }}
      >
        <h1>Trecking Booking</h1>
        <div class="row">
          <div class="col-md-4 mt-3">
            <Card
              shadow="sm"
              padding="lg"
              withBorder
              style={{ backgroundColor: "#ECF9E1" }}
            >
              <Card.Section>
                <Image
                  src="https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2Fc7e7a137-be09-47dc-94f1-ffe502fcf081_Har%2BKi%2BDun_HKD_Ruinsara%2BTal%2B-%2BSubhrajyoti%2BDas%2B-%2BValley%2Bof%2BGods.jpg%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C111%2C1600%2C775%26w%3D1600%26h%3D775&w=1920&q=75"
                  alt="Norway"
                  height="40vh"
                />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={600}>Har Ki Dun</Text>
                <Badge color="pink" variant="light">
                  On 24th Aug, 2023
                </Badge>
              </Group>

              <Text size="sm">
                Har Ki Dun is a trek that needs no introduction. Trekkers have
                always trod upon these trails to witness the beautiful
                Swargarohini massif from Har Ki Dun. Yet we wanted to veer
                slightly off the beaten path. We wanted to show trekkers a side
                of the Har-Ki-Dun trek they rarely see. So we chose a route
                different from the regular trail, which includes terrific scenic
                beauty on the new route while retaining the ancient charm of the
                old route, at the heart of which still lies a journey towards
                the beautiful Swargarohini peaks. Allow us to take you through
                the new route, where some sections are among the best-kept
                secrets of this region. Take, for example, the enchanting woods
                of Boslow.
              </Text>

              <Modal
                opened={opened}
                onClose={close}
                title="Enter Your Details to Book"
              >
                {/* Modal content */}
                <Container size="xs">
                  <Paper padding="md">
                    <form onSubmit={handleSubmit}>
                      <TextInput
                        label="Name"
                        placeholder="Enter your name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <TextInput
                        className="mt-3"
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <TextInput
                        className="mt-3"
                        label="Mobile Number"
                        placeholder="Enter your mobile number"
                        required
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                      />
                      <Select
                        className="mt-3"
                        data={options}
                        label="Number of Attendees"
                        required
                        value={selectedValue}
                        onChange={handleSelectChange}
                      />
                      <p className="mantine-1fzet7j mt-3">Select Date</p>
                      <Calendar
                        label="Pick date"
                        placeholder="Pick date"
                        value={eventDate}
                        onChange={seteventDate}
                      />
                      <Button
                        style={{ margin: "20px 0px" }}
                        type="submit"
                        variant="filled"
                        color="blue"
                        onClick={handleSubmit}
                      >
                        Register
                      </Button>
                    </form>
                  </Paper>
                </Container>
              </Modal>

              <Group position="center" className="mt-3">
                <Button onClick={open}>Book Event</Button>
              </Group>
            </Card>
          </div>

          <div class="col-md-4 mt-3">
            <Card
              shadow="sm"
              padding="lg"
              withBorder
              style={{ backgroundColor: "#ECF9E1" }}
            >
              <Card.Section>
                <Image
                  src="https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2Fdfb9f0d7-d287-4e30-adcc-af041ffc946b_Goechala-Ashwini-Could-Go-Either-Way.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75"
                  alt="Norway"
                  height="40vh"
                />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={600}>Goechala Trek</Text>
                <Badge color="pink" variant="light">
                  On 24th Aug, 2023
                </Badge>
              </Group>

              <Text size="sm">
                The biggest reason to do the Goechala trek is the grand views of
                the big mountains you see. You don’t just see one summit — the
                Kanchenjunga — but 14 other big summits. That’s a lot for any
                trek — especially as close to the eyes as on the Goechala trek.
                It is no wonder that trekkers consider Goechala to be the
                closest to the big mountain treks of Nepal. Before we dive into
                the details about the Goechala trek, here is a little backdrop
                of why Goechala is well-known among trekkers all over the world:
                While the trail to Goechala is old, it wasn’t always so famous.
                The change that occurred during the Nepalese Civil War lasted
                from 1996 to 2006.
              </Text>

              <Group position="center" className="mt-3">
                <Button onClick={open}>Book Event</Button>
              </Group>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default TreckBooking;
