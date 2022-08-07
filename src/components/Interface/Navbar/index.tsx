import { Logo } from "../../Icons/Logo";
import React from "react";
import { WalletConnect } from "@reusables/WalletConnect";
import { styled } from "@stitches/react";
import { ETHBalance } from "@components/Functions/";

// Component to Renderize
const HeaderContainer = styled("header", {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  background: "linear-gradient(to right, #f6f6f6, #fff)",
});

const NavBar = styled("nav", {
  height: "5rem",
  display: "flex",
  alignItems: "center",
});

const LinkAnchors = styled("a", {
  marginLeft: "5rem",

  "&:hover": {
    color: "#9600bc",
  },
  "&:active": {
    color: "#460456",
    fontWeight: "bold",
  },
  "&:active:after": {
    content: "",
    height: "3px",
    borderRadius: "3px 3px 0 0",
    width: "100%",
    position: "absolute",
    bottom: "1px",
    left: "0",
    background: "var(--yellow-500)",
  },
});

export function Navbar() {
  return (
    <HeaderContainer>
      <Logo />
      <NavBar>
        <LinkAnchors href="#">Explorer</LinkAnchors>
        <LinkAnchors href="#">Read me</LinkAnchors>
        <LinkAnchors href="#">About</LinkAnchors>
        <LinkAnchors href="#">Web3Club</LinkAnchors>
      </NavBar>
      <ETHBalance />

      <WalletConnect />
    </HeaderContainer>
  );
}
