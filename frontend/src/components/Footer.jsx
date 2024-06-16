import React from 'react'
import { Link } from 'react-router-dom'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../constants/data'

const Footer = () => {
  return (
    <footer className="max-padd-conatiner mb-4">
      <div className="max-padd-container bg-primary rounded-tr-3xl pt-12 xl:pt-20 pb-8">
        <h3 className="h3">Explore real state opportunities with us ?  </h3>
          <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
          <hr className="my-8 bg-slate-900/30 h-[2px]"/>
          {/* container */}
          <div className="flex justify-between flex-wrap gap-x-2 gap-y-8">
            
            <div className="max-w-sm">
              <Link to={"/"} className="flex items-center gap-x-2">
                <span className="font-[900] text-[24px]">Casa
                  <span className="font-[600] medium-20">Central</span>
                </span>
              </Link>
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat
              </p>
              <div className="flexBetween pl-6 h-[3.3rem] bg-white w-full max-w-[366px] rounded-full ring-1 ring-slate-500/5">
                <input type="email" palceholder="Enter your email" className="bg-transparent border-none outline-none" />
                <button className="btn-secondary rounded-full relative right-[0.33rem]">Subscribe</button>
              </div>
            </div>

            <div className="flex justify-between flex-wrap gap-8">
              {FOOTER_LINKS.map((col) => (
                <FooterColumn key={col.title} title={col.title}>
                  <ul className="flex flex-col gap-4 regular-14 text-gray-20">
                    {col.links.map((link) => (
                      <Link to={"/"} key={link}>
                        {link}
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              ))}
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link 
                    to={"/"} 
                    key={link.label}
                    className="flex gap-4 md:flex-row lg:flex-row"  
                  >
                    <p>{link.label}</p>:<p>{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex">
              <FooterColumn title={SOCIALS.title}>
                <ul className="flex gap-4">
                  {SOCIALS.links.map((link) => (
                    <Link 
                      to={"/"} 
                      key={link.id}
                      className="text-xl"
                    >
                      {link.icon}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>     
      </div>
      {/* copyright */}
      <p className="text-white bg-tertiary medium-14 py-2 px-8 rounded-b-3xl flexBetween">
        <span>2024 CasaCentral</span>All rights reserved
      </p>
    </footer>
  )
}

export default Footer

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}