import React from 'react'
import { Link } from 'react-router-dom'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../constants/data'

const Footer = () => {
  return (
    <footer className="max-padd-conatiner mb-4">
      <div className="max-padd-container bg-primary rounded-tr-3xl pt-12 xl:pt-20">
        <h3>Explore real state opportunities with us ?
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
          <hr />
          {/* container */}
          <div>
            <div>
              <Link to={"/"}>
                <span className="font-[900] text-[24px]">Casa
                  <span className="font-[600] medium-20">Central</span>
                </span>
              </Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat
              </p>
              <div className="flexBetween pl-6 h-[3.3rem] bg-white w-full max-w-[366px] rounded-full ring-1 ring-slate-500/5">
                <input type="email" palceholder="Enter your email" className="bg-transparent border-none outline-none" />
                <button className="btn-secondary rounded-full relative right-[0.33rem]">Subscribe</button>
              </div>
            </div>
            <div>
              {FOOTER_LINKS.map((col) => (
                <FooterColumn key={col.title} title={col.title}>
                  <ul>
                    {col.links.map((link) => (
                      <Link to={"/"} key={link}>
                        {link}
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              ))}
            </div>
            <div>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link to={"/"} key={link.label}>
                    <p>{link.label}</p>:<p>{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div>
              <FooterColumn title={SOCIALS.title}>
                <ul>
                  {SOCIALS.links.map((link) => (
                    <Link to={"/"} key={link.id}>
                      {link.icon}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </h3>
      </div>
      {/* copyright */}
      <p><span>2024 CasaCentral</span>All rights reserved</p>
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