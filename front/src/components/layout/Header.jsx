import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { MdOutlineDarkMode } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import thems from "../../flowbit/thems";

export default function Header() {
  const location = useLocation();
  const showHeader = ["/", "/projects", "/about"].includes(location.pathname);
  if (!showHeader) {
    return null;
  }
  const isAuth = true;

  return (
    <div className=" dark:bg-darkBg">
      <Navbar
        fluid
        rounded
        className="container border-b-[1px]"
        theme={thems.navTheme}
      >
        <Navbar.Brand href="/">
          <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Dz Blogs
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {isAuth && (
            <div className="relative me-4 after:absolute after:-end-2 after:w-[0.5px] after:top-1/2 after:-translate-y-1/2 after:h-8  after:bg-textSecondaryWhite">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">
                    name@flowbite.com
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
            </div>
          )}

          <div className="flex justify-center items-center me-3">
            <Button className="" color="gray" size="sm">
              <MdOutlineDarkMode size={22} />
            </Button>
          </div>
          {!isAuth && (
            <Link to="/sign-in">
              <Button
                pill
                size="md"
                className="hidden md:flex"
                color="black"
                theme={thems.btnTheme}
              >
                Login
              </Button>
            </Link>
          )}

          <Navbar.Toggle />
        </div>

        <Navbar.Collapse className="">
          <Navbar.Link
            active={location.pathname == "/" ? true : false}
            as={"div"}
          >
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link
            active={location.pathname == "/projects" ? true : false}
            as={"div"}
          >
            <Link to="/projects">Projects</Link>
          </Navbar.Link>
          <Navbar.Link
            active={location.pathname == "/about" ? true : false}
            as={"div"}
          >
            <Link to="/about">About</Link>
          </Navbar.Link>
          <div>
            <Button
              pill
              className="md:hidden mt-3 w-full"
              color="black"
              theme={thems.btnTheme}
            >
              Login
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
