import { Navbar } from 'flowbite-react';
import Link from 'next/link';

export default function ENavbar() {
  return (
     <Navbar fluid border>
      <Navbar.Brand href="">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar> 
  )
}
