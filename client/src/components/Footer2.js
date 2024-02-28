import React from "react";
import { Footer,Label, TextInput } from 'flowbite-react'; // Import Footer from flowbite-react
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function Footer2() {
  return (
    <Footer  className="w-full bg-blue-900 text-white"> {/* Add background and text color */}
      <div className="w-full mx-auto py-12 px-2"> {/* Add padding to the container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:flex md:flex-wrap md:justify-between"> {/* Adjust grid layout */}
          <div className="mb-2 md:w-auto">
            <Footer.Brand
              href="/"
              src="logo.svg"
              alt="Chrisco logo"
              name="Chrsico Central Church"
            />
          </div>
          <div className="mb-8 md:w-auto">
            <div>
              <Footer.Title title="Quick Links" /> 
              <Footer.LinkGroup className="block"> 
                <Footer.Link href="/">Home</Footer.Link>
                <Footer.Link href="/about-us">About Us</Footer.Link>
                <Footer.Link href="/departments">Our Departments</Footer.Link>
                <Footer.Link href="/blogs">Blogs</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="mb-8 md:w-auto">
          <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="email3 " className = "block" value="Subscribe To Our Newsletter" />
        <Label htmlFor="email3" value="Your email" />
      </div>
      <TextInput
        id="email"
        type="email"
        placeholder="name@gmail.com"
        required
        helperText={
          <>
            We’ll never share your details. Read our
            <a href="/" className="ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500">
              Privacy Policy
            </a>
            .
          </>
        }
      />
    </div>
          </div>
          
          <div className="mb-8 md:w-auto px-4">
            <div>
              <Footer.Title title="Contact Us" /> 
              <Footer.LinkGroup className="block"> 
                <Footer.Link href="tel:+2547 111 111 212">+2547 111 111 212</Footer.Link>
                <Footer.Link href="">Kibera Dr Woodley Estate</Footer.Link>
                <Footer.Link href="mailto:contactus@gmail.com">contactus@gmail.com</Footer.Link>
                {/* <Footer.Link href="#">Terms &amp; Conditions</Footer.Link> */}
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="mb-8 md:w-auto px-4">
            <div>
              
            <img src="/Images/give.webp" alt="give details"width="300" height="200" ></img>
              
            </div>
          </div>
        </div>
        <Footer.Divider className="my-8" /> {/* Add margin to the divider */}
        <div className="flex justify-between items-center"> {/* Adjust alignment */}
          <Footer.Copyright href="#" by="Chrisco™" year={2024} />
          <div className="flex space-x-4"> {/* Adjust spacing */}
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Footer2;
