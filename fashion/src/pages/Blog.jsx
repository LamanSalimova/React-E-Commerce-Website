import { Box, Container, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { BsChevronRight } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { ROUTES } from "../utils/routes";
import img1 from "../assets/images/blogs/blog1.png";
import img2 from "../assets/images/blogs/blog2.png";
import img3 from "../assets/images/blogs/blog3.png";
import img4 from "../assets/images/blogs/blog4.png";
import BlogItem from "../components/BlogItem";
import Posts from "../components/Posts";
export default function Blog() {
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
  return (
    <>
      <Box bg="var(--lightBgColor)" py="10px">
        <Container maxW="1140px">
          <Flex gap="10px" color="var(--darkTextColor2)" align="center">
            <Link to={ROUTES.HOME}>
              <GrHomeRounded />
            </Link>
            <BsChevronRight />
            <Text color="var(--lightTextColor5)">Fashion blog</Text>
          </Flex>
        </Container>
      </Box>
      <Container maxW="1140px">
        <Flex justify="space-between" align="center" my="22px">
          <Text
            as="h2"
            fontSize="46px"
            lineHeight="60px"
            fontWeight="900"
            color="var(--darkBgColor)"
          >
            Fashion blog
          </Text>
          <Flex
            p="10px"
            border="1px solid var(--lightBorderColor2)"
            justify="space-between"
            align="center"
            minW="340px"
          >
            <input
              type="text"
              placeholder="Search the blog..."
              className="searchInput"
            />
            <Text as="span" _hover={{ cursor: "pointer" }}>
              <BiSearch />
            </Text>
          </Flex>
        </Flex>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "3fr 1fr",
            lg: "5fr 2fr",
          }}
          py="40px"
          gap={{ base: "20px", md: "30px", lg: "60px" }}
        >
          <Stack gap="60px">
            {blogsData.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </Stack>
          <Stack>
            <Text
              as="h4"
              fontSize="24px"
              lineHeight="32px"
              fontWeight="700"
              color="var(--darkBgColor)"
            >
              Featured Posts
            </Text>
            <Posts />
          </Stack>
        </Grid>
      </Container>
    </>
  );
}
