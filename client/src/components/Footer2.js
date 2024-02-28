import React from "react";
import { Button, Footer,Label, TextInput } from 'flowbite-react'; // Import Footer from flowbite-react
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function Footer2() {
  return (
    <div >
    <Footer  className="w-full bg-blue-900 text-white p-4"> {/* Add background and text color */}
      <div className="w-full mx-auto py-12 px-2"> {/* Add padding to the container */}
        <div className="grid grid-cols-1 text-white md:grid-cols-3 gap-8 md:flex md:flex-wrap md:justify-between"> {/* Adjust grid layout */}
          <div className="mb-2 md:w-auto">
          <Footer.Title className="text-white" title="Chrisco Central Church" /> 

          </div>
          <div className="mb-8 md:w-auto">
            <div>
              <Footer.Title className="text-white" title="Quick Links" /> 
              <Footer.LinkGroup className="block text-white"> 
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
        <Label htmlFor="email3 " className = "block text-white" value="Subscribe To Our Newsletter" />
        <Label htmlFor="email3" className="text-white" value="Your email" />
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
      <Button className="bg-blue-500 hover:text-red-500 hover:bg-blue-600">Submit</Button>
    </div>
          </div>
          
          <div className="mb-8 md:w-auto px-4 ">
            <div>
              <Footer.Title className="text-white" title="Contact Us" /> 
              <Footer.LinkGroup className="block text-white"> 
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
          <Footer.Copyright href="/" className="text-white" by="Chrisco™" year={2024} />
          <div className="flex space-x-4"> {/* Adjust spacing */}
            <Footer.Icon href="#" className="text-white" icon={BsFacebook} />
            <Footer.Icon href="#" className="text-white" icon={BsInstagram} />
            <Footer.Icon href="#" className="text-white"icon={BsTwitter} />
            <Footer.Icon href="#" className="text-white"icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
    </div>
  );
}

export default Footer2;
