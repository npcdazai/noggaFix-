import { VStack, Image, Text } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import home from "../../assets/icons/home.png";
import event from "../../assets/icons/events.png";
import donation from "../../assets/icons/donation.png";
import members from "../../assets/icons/members.png";

const tabs = [
  {
    id: 1,
    img: home,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    img: donation,
    title: "About",
    path: "/about",
  },
  {
    id: 3,
    img: event,
    title: "Event",
    path: "/event",
  },
  {
    id: 4,
    img: members,
    title: "Members",
    path: "/members",
  },
  {
    id: 5,
    img: donation,
    title: "Cow Offering",
    path: "/cow-offering",
  },
];

const NavigationMobile = () => {
  const location = useLocation();

  return (
    <VStack bgColor="#fff" spacing={4} p={4} align="stretch">
      {tabs.map((item, index) => (
        <NavLink
          key={item.id || index} // Ensure unique key by using index as a fallback
          to={item.path}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <VStack
            bgColor={location.pathname === item.path ? "#FCE8CC" : "transparent"}
            _hover={{ bgColor: "#FCE8CC", transform: "scale(1.05)" }}
            borderRadius="20px"
            p={2}
            align="center"
            transition="background-color 0.3s ease, transform 0.2s ease"
            transform={location.pathname === item.path ? "scale(1.05)" : "scale(1)"}
          >
            <Image
              src={item.img}
              alt={item.title}
              boxSize="24px"
              filter={location.pathname === item.path ? "none" : "grayscale(100%)"}
              _hover={{ filter: "none" }}
              transition="filter 0.3s ease"
            />
            <Text
              fontSize="medium"
              fontWeight="600"
              color={location.pathname === item.path ? "#FF9400" : "#000"}
              _hover={{ color: "#FF9400" }}
              transition="color 0.3s ease"
            >
              {item.title}
            </Text>
          </VStack>
        </NavLink>
      ))}
    </VStack>
  );
};

export default NavigationMobile;
