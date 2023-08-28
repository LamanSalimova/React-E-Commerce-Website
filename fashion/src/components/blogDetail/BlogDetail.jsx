import React from "react";
import { Link, useParams } from "react-router-dom";
import img1 from "../../assets/images/blogs/blog1.png";
import img2 from "../../assets/images/blogs/blog2.png";
import img3 from "../../assets/images/blogs/blog3.png";
import img4 from "../../assets/images/blogs/blog4.png";
import { Box, Container, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { AiOutlineComment } from "react-icons/ai";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import braces from "../../assets/images/icons/braces.png";
import checkIcon from "../../assets/images/icons/check.png";
import Tags from "./Tags";
import RelatedPosts from "./RelatedPosts";

export default function BlogDetail() {
  const blogsData = [
    {
      id: 1,
      imgUrl: img1,
      category: "Fashion",
      date: "August 24, 2020",
      comments: "No comments",
      title: "Bag Trends for Summer 2023",
      content:
        "Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit viverra amet,malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod...",
    },
    {
      id: 2,
      imgUrl: img2,
      category: "Celebrity style",
      date: "August 5, 2020",
      comments: "No comments",
      title: "Wardrobe Essentials Everyone Should Own Today",
      content:
        "Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit. Tellus sed morbi massa quis sed. Faucibus tincidunt magna enim ultricies fringilla at rhoncus, hac...",
    },
    {
      id: 3,
      imgUrl: img3,
      category: "Lifestyle",
      date: "July 16, 2020",
      comments: "No comments",
      title: "Top 10 of This Season’s Hottest Sneakers",
      content:
        "Sollicitudin et nec congue magna quis commodo quis luctus risus. Dolor, dignissim semper faucibus quisque massa ut enim. Turpis viverra mattis semper pellentesque facilisis. Ut id eget sagittis lectus...",
    },
    {
      id: 4,
      imgUrl: img4,
      category: "Fashion",
      date: "August 2, 2020",
      comments: "No comments",
      title: "Modern Accessories 2020: Why Simple Isn't Easy",
      content:
        "Tellus sed morbi massa quis sed. Faucibus tincidunt magna enim ultricies fringilla at rhoncus, hac. Sollicitudin et nec congue magna quis commodo quis luctus risus. Dolor, dignissim semper faucibus quisque massa ut enim...",
    },
  ];
  const { id } = useParams();
  const blogId = parseInt(id, 10);

  const blog = blogsData.find((blog) => blog.id === blogId);

  if (!blog) {
    return <div>Blog not found.</div>;
  }
  return (
    <>
      <Container maxW="1140px">
        <Stack mt="40px">
          <Text
            as="h2"
            fontSize={{ base: "28px", md: "42px", xl: "46px" }}
            lineHeight={{ base: "40px", md: "60px", xl: "60px" }}
            fontWeight="900"
            color="var(--darkBgColor)"
            w={{ base: "full", md: "80%", xl: "80%" }}
          >
            {blog.title}
          </Text>
          <Flex
            justify={{
              base: "start",
              md: "space-between",
              xl: "space-between",
            }}
            flexDirection={{ base: "column", md: "row", xl: "row" }}
            display={{ base: "none", md: "flex", xl: "flex" }}
          >
            <Flex gap="12px" align="center" color="var(--lightTextColor3)">
              <Text as="span" fontWeight="700" color="var(--primary)">
                {blog.category}
              </Text>
              <Text
                as="span"
                borderX="1px solid var(--lightTextColor3)"
                px="6px"
              >
                {blog.date}
              </Text>
              <Flex gap="10px" align="center">
                <Text as="span">{blog.comments}</Text>
                <AiOutlineComment />
              </Flex>
            </Flex>

            <Flex
              gap="10px"
              mt="10px"
              color="var(--light)"
              pb="22px"
              justify="center"
            >
              <Flex
                justify="center"
                align="center"
                as="span"
                p="6px"
                borderRadius="4px"
                bg="var(--lightBgColor2)"
              >
                <Link to="#">
                  <BiLogoFacebook color="var(--lightTextColor3)" />
                </Link>
              </Flex>
              <Flex
                justify="center"
                align="center"
                as="span"
                p="6px"
                borderRadius="4px"
                bg="var(--lightBgColor2)"
              >
                <Link to="#">
                  <BiLogoInstagram color="var(--lightTextColor3)" />
                </Link>
              </Flex>
              <Flex
                justify="center"
                align="center"
                as="span"
                p="6px"
                borderRadius="4px"
                bg="var(--lightBgColor2)"
              >
                <Link to="#">
                  <AiOutlineTwitter color="var(--lightTextColor3)" />
                </Link>
              </Flex>
              <Flex
                justify="center"
                align="center"
                as="span"
                p="6px"
                borderRadius="4px"
                bg="var(--lightBgColor2)"
              >
                <Link to="#">
                  <FaLinkedinIn color="var(--lightTextColor3)" />
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Box>
            <Image
              src={blog.imgUrl}
              alt={blog.title}
              w="full"
              minH={{ base: "230px", md: "360px", xl: "360px" }}
            />
          </Box>

          <Text
            color="var(--darkBgColor)"
            fontSize="20px"
            lineHeight="30px"
            fontWeight="700"
          >
            {blog.content}
          </Text>
          <Text color="var(--darkTextColor2)" my={4}>
            At facilisi sapien posuere eget nunc senectus proin nullam. Tortor
            senectus in et sagittis, vitae diam cras dignissim. Varius
            adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare
            pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in
            massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra
            risus vel. Amet, morbi sed pharetra, elit eget mi potenti.
            Condimentum orci interdum feugiat lectus libero duis. Nisl massa,
            elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan
            et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam
            tincidunt semper pellentesque purus morbi sed. Ut aliquet velit
            pharetra, nisi nunc, non.
          </Text>
          <Flex gap="18px" my="28px">
            <Box>
              <Image src={braces} />
            </Box>
            <Text
              color="var(--darkBgColor)"
              fontSize="20px"
              lineHeight="30px"
              fontWeight="700"
            >
              Justo, amet lectus quam viverra mus lobortis fermentum amet, eu.
              Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare
              turpis quis non. Congue tortor in tot euismod vulputate etiam
              eros. Vel accumsan at elit neque, ipsum.
            </Text>
          </Flex>

          <Box color="var(--darkTextColor2)">
            <Text my="22px">
              Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut
              erat mattis. Vitae mus blandit in neque amet non fringilla
              blandit:
            </Text>
            <ul>
              <li>
                <Flex gap="12px" align="center" my={1}>
                  <Box>
                    <Image src={checkIcon} />
                  </Box>
                  <Text>
                    A fermentum in morbi pretium aliquam adipiscing donec
                    tempus.
                  </Text>
                </Flex>
              </li>
              <li>
                <Flex gap="12px" align="center" my={1}>
                  <Box>
                    <Image src={checkIcon} />
                  </Box>
                  <Text>Vulputate placerat amet pulvinar lorem nisl.</Text>
                </Flex>
              </li>
              <li>
                <Flex gap="12px" align="center" my={1}>
                  <Box>
                    <Image src={checkIcon} />
                  </Box>
                  <Text>
                    Consequat feugiat habitant gravida quisque elit bibendum id
                    adipiscing sed.
                  </Text>
                </Flex>
              </li>
              <li>
                <Flex gap="12px" align="center" my={1}>
                  <Box>
                    <Image src={checkIcon} />
                  </Box>
                  <Text>
                    Etiam duis lobortis in fames ultrices commodo nibh.
                  </Text>
                </Flex>
              </li>
            </ul>
            <Text my="20px">
              Enim, vel massa odio diam. Blandit massa gravida feugiat elementum
              id nec sed leo. Nisi in ornare lectus eget. Urna, risus,
              consectetur volutpat lorem purus. Velit aliquet nibh vitae
              maecenas. Consectetur neque ut aliquam eros, purus enim dignissim
              aenean vitae. Ultrices fames augue mattis tortor est justo,
              pharetra nibh risus. Facilisi at porttitor volutpat natoque proin
              amet, nulla. Vivamus ut lobortis sagittis curabitur tellus
              convallis eget netus vitae.
            </Text>
          </Box>

          <Tags />
        </Stack>
      </Container>
      <RelatedPosts blogsData={blogsData} />
    </>
  );
}
