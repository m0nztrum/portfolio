export type navItem = {
    name: string;
    link: string;
};

export type techIconType = {
    name: string;
    description: string;
    imageUrl: string;
    bgColor: string;
};

interface Tag {
    tagName: string;
    tagColor: string;
    icon: string;
}

export interface ProjectCardProps {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    codeLink: string;
    tags: Tag[];
}
