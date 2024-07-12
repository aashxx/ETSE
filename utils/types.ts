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

export interface OpenGraphImage {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }
  
export interface OpenGraph {
    title: string;
    description: string;
    url: string;
    images: OpenGraphImage[];
}

export interface Twitter {
    card: 'summary' | 'summary_large_image' | 'app' | 'player';
    title: string;
    description: string;
    image: string;
}

export interface Metadata {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    openGraph: OpenGraph;
    twitter: Twitter;
}
