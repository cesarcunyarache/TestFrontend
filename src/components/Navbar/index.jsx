"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Tabs from "./Tabs";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { useGetVerifyQuery } from "../../redux/services/userApi";
import DropdownRend from "./Dropdown";
import { useDispatch } from "react-redux";
import { update } from "../../redux/features/reservaSlice";
import {
  useGetLogoutQuery,
  usePostLogoutMutation,
  useGetProfileQuery,
} from "../../redux/services/userApi";
import Load from "../../components/Load";

export default function NavBar() {
  const router = useRouter();

  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { data, isLoading, isError, error } = useGetVerifyQuery();




  const { data: profile, isLoading: isLoadingProfile } = useGetProfileQuery();



  useEffect(() => {
    if (!isLoadingProfile) {
      if (profile) {
        const { apellidos, nombres, id } = profile?.data;
        console.log(profile);
        dispatch(update({ apellidos, nombres, id }));
      }
    }
  }, [isLoadingProfile]);
  const [postLogout] = usePostLogoutMutation();

  const handeLogout = async () => {
    const response = await postLogout();
    console.log(response);
    window.location.href = "/";
  };

  const menuItems = ["Inicio", "Sobre nosotros", "Experiencias", "Acerca de"];

  // ...
  const [selectedNavItem, setSelectedNavItem] = React.useState(menuItems[0]);

  const handleNavItemSelect = (item) => {
    if (isLoading) {
      <Load />
    }
    router.push("/")
    setSelectedNavItem(item);
  };



  return (
    <Navbar
      className="border-b-1"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden flex-grow-0" justify="start">
        <NavbarMenuToggle
          className="justify-center"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarBrand>
        <ScrollLink
          to="/Inicio"
          smooth={true}
          duration={500}
          offset={-100}
          className={`hover:cursor-pointer ${selectedNavItem === "Inicio" ? "" : ""}`}
          onClick={() => handleNavItemSelect("Inicio")}
        >
          <div className="flex flex-row items-center">
            <div
              className="hover:cursor-pointer"
              onClick={() => router.push("/")}
            >
              <AcmeLogo />
            </div>
            <div>
              <p
                className="font-bold text-inherit hover:cursor-pointer my-auto"
                onClick={() => router.push("/")}
              >
                Bravazo
              </p>
            </div>
          </div>
        </ScrollLink>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={selectedNavItem === "Inicio"}>
          <ScrollLink
            to="Inicio"
            smooth={true}
            duration={500}
            offset={-100}
            className={`hover:cursor-pointer ${selectedNavItem === "Inicio" ? "border-b-2 border-red-600" : ""}`}
            onClick={() => handleNavItemSelect("Inicio")}
          >
            Inicio
          </ScrollLink>
        </NavbarItem>

        <NavbarItem isActive={selectedNavItem === "Sobre-nosotros"}>
          <ScrollLink
            to="Sobre-nosotros"
            smooth={true}
            duration={500}
            offset={-70} // Ajusta este valor según sea necesario
            className={`hover:cursor-pointer ${selectedNavItem === "Sobre-nosotros" ? "border-b-2 border-red-600" : ""}`}
            onClick={() => handleNavItemSelect("Sobre-nosotros")}
          >
            Sobre nosotros
          </ScrollLink>
        </NavbarItem>

        <NavbarItem isActive={selectedNavItem === "Experiencias"}>
          <ScrollLink
            to="Experiencias"
            smooth={true}
            duration={500}
            offset={-60}
            className={`hover:cursor-pointer ${selectedNavItem === "Experiencias" ? "border-b-2 border-red-600" : ""}`}
            onClick={() => handleNavItemSelect("Experiencias")}
          >
            Experiencias
          </ScrollLink>
        </NavbarItem>

        <NavbarItem isActive={selectedNavItem === "Acerca-de"}>
          <ScrollLink
            to="Acerca-de"
            smooth={true}
            duration={500}
            offset={-70}
            className={`hover:cursor-pointer ${selectedNavItem === "Acerca-de" ? "border-b-2 border-red-600" : ""}`}
            onClick={() => handleNavItemSelect("Acerca-de")}
          >
            Acerca de
          </ScrollLink>
        </NavbarItem>

      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform p-1"
              color="default"
              name={profile?.data?.nombres}
              size="sm"
            /* src="user.svg" */
            />
          </DropdownTrigger>

          {!isLoading && profile !== undefined && data?.status === "ok" ? (
            <DropdownMenu
              aria-label="Profile"
              variant="flat"
              onAction={(key) => router.push(key)}
            >
              <DropdownItem key="/datos-personales" className="h-14 gap-2">
                <p className="font-semibold">Sesion iniciada como</p>
                <p className="font-semibold">{profile?.data?.correo}</p>
              </DropdownItem>
              <DropdownItem key="/datos-personales">Mis datos</DropdownItem>
              <DropdownItem key="/reservar">Reservar</DropdownItem>
              <DropdownItem key="/puntos">Puntos</DropdownItem>
              <DropdownItem
                key="#"
                textValue="Logout"
                onClick={handeLogout}
                color="danger"
              >
                Cerrar Sesión
              </DropdownItem>
            </DropdownMenu>
          ) : (
            <DropdownMenu
              aria-label="Profile Auth"
              variant="flat"
              onAction={(key) => router.push(key)}
            >
              <DropdownItem key="/login">Iniciar Sesión</DropdownItem>
              <DropdownItem key="/registro">Regístrate</DropdownItem>
            </DropdownMenu>
          )}
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
