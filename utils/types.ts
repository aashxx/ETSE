import { Dispatch, ReactNode, SetStateAction } from "react";

export interface LayoutProps {
    children: ReactNode;
}

export interface NavbarProps {
    openNav?: boolean;
    setOpenNav: Dispatch<SetStateAction<boolean>>;
}

export interface ServiceTypes {
    img: string,
    title: string,
    description: string
}

export interface EquipCardProps {
    img: string,
    title: string,
}