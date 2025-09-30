"use client"
import Container from '@/app/Layout/Container';
import Flex from '@/app/Layout/Flex';
import { usePathname } from 'next/navigation';
import React from 'react'
import Logo from './Logo';
import Link from 'next/link';
import { BiCart, BiHeart, BiUser } from 'react-icons/bi';

const Header = () => {
    const pathname = usePathname();
  interface Nav {
    name: string;
    link: string;
  }

  const navItems: Nav[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Sign Up",
      link: "/registration",
    },
  ];
  return (
    
    <div className="font-body mt-[47px] pb-[23px] border-b border-black/30">
      <Container>
        <Flex>
          <Logo />
          <Flex className="justify-center gap-x-[48px]">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className={`${
                  pathname === item.link
                    ? "border-b-2 border-black"
                    : "hover:border-b-2 hover:border-black"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </Flex>
          <Flex className="justify-end gap-x-5">
            <input
              type="text"
              className="bg-[#F5F5F5] px-5 py-3 pr-[70px] rounded-s"
              placeholder="What are you looking for?"
            />
            <span className="p-[10px] cursor-pointer hover:bg-primary rounded-full transition-colors duration-150 hover:text-white">
              <BiHeart size={26} />
            </span>
            <span className="p-[10px] cursor-pointer hover:bg-primary rounded-full transition-colors duration-150 hover:text-white">
              <BiCart size={26} />
            </span>
            <Link
              href="/registration"
              className="p-[10px] cursor-pointer hover:bg-primary rounded-full transition-colors duration-150 hover:text-white"
            >
              <BiUser size={26} />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </div>
  )
}

export default Header