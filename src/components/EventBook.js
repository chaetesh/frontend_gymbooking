import React, { useState } from "react";
import { Card, Image, Text, Badge, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { Container, Paper, TextInput, Button, Select } from "@mantine/core";
import { Calendar } from "@mantine/dates";

const EventBook = () => {
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
    const timeOptions = [
    { label: "9 AM - 10 AM", value: "9 AM" },
    { label: "10 AM - 11 AM", value: "10 AM" },
    { label: "11 AM - 12 PM", value: "11 AM" },
    { label: "2 PM - 3 PM", value: "2 PM" },
    { label: "3 PM - 4 PM", value: "3 PM" },
    { label: "4 PM - 5 PM", value: "4 PM" },
    { label: "5 PM - 6 PM", value: "5 PM" },
    { label: "6 PM - 7 PM", value: "6 PM" },
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
        class=""
        style={{ backgroundColor: "#ECF9E1", padding: "20px 80px" }}
      >
        <h1>Event Booking</h1>
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
                  src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Norway"
                />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={600}>Ace Productions - Broken Images</Text>
                <Badge color="pink" variant="light">
                  On 24th Aug, 2023
                </Badge>
              </Group>

              <Text size="sm">
                Raëll Padamsee’s ACE Productions presents Broken Images - Two
                sisters—one an intellectually brilliant paraplegic, the other a
                plodding writer--- live under the same roof, dependent on each
                other, but inhabiting different emotional as well as linguistic
                worlds, English and Hindi. The arrangement is fraught not only
                because the sisters are involved with the same man, but because
                as they respond to life together, and separately, they
                continually modify the image they have of each other and the
                world around them.
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
                      <p className="mantine-1fzet7j mt-3">Pick a Date</p>
                      <Calendar
                        label="Pick date"
                        placeholder="Pick date"
                        value={eventDate}
                        onChange={seteventDate}
                      />
                      <Select
                        className="mt-3"
                        data={timeOptions}
                        label="Select Time Slot"
                        required
                        value={selectedValue}
                        onChange={handleSelectChange}
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
                  src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Norway"
                />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={600}>West Side Story</Text>
                <Badge color="pink" variant="light">
                  On 27th Aug, 2023
                </Badge>
              </Group>

              <Text size="sm">
                Be transported to New York of the 1950s as the 2-time Tony Award
                winning Broadway musical brings the city's most iconic locations
                to life in the coming-of-age drama. Trouble is brewing on the
                Upper East Side. Members of the New York street gang the “Jets”
                patrol their dusty territory, defiantly snapping their fingers,
                always on the lookout for their rivals, the Puerto Rican
                “Sharks”. Fiery Latinas dance to sultry Mambo rhythms in the
                summer heat, dreaming of a better life. In the midst of it all:
                a great love fighting to overcome the obstacles and prejudices
                that stand in its way.
              </Text>

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
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                  alt="Norway"
                />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={600}>MotoGP Bharat 2023</Text>
                <Badge color="pink" variant="light">
                  On 24th Aug, 2023
                </Badge>
              </Group>

              <Text size="sm">
                Be transported to New York of the 1950s as the 2-time Tony Award
                winning Broadway musical brings the city's most iconic locations
                to life in the coming-of-age drama. Trouble is brewing on the
                Upper East Side. Members of the New York street gang the “Jets”
                patrol their dusty territory, defiantly snapping their fingers,
                always on the lookout for their rivals, the Puerto Rican
                “Sharks”. Fiery Latinas dance to sultry Mambo rhythms in the
                summer heat, dreaming of a better life. In the midst of it all:
                a great love fighting to overcome the obstacles and prejudices
                that stand in its way.
              </Text>

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
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Norway"
                />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={600}>Toiletpaper: Run As Slow As You Can</Text>
                <Badge color="pink" variant="light">
                  On 24th Aug, 2023
                </Badge>
              </Group>

              <Text size="sm">
                Be transported into a quirky and hyperreal universe at the
                iconic creative studio and image-based magazine's largest
                exhibition ever. The creative studio and image-based magazine's
                largest exhibition ever, Run As Slow As You Can is an expansive
                presentation of their surreal and oversaturated universe. Step
                into the magical world of hyperrealist, absurdist installations
                and images with this extraordinary exhibition by TOILETPAPER.
                The creative studio and image-based magazine are led by
                pathbreaking Italian contemporary artist Maurizio Cattelan and
                photographer Pierpaolo Ferrari.
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

export default EventBook;
