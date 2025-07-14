export interface Project {
    title: string;
    description: string;
    detailDescription: string;
    image: string;
    techStack: string[];
    gallery: Gallery[];
    developedFor: string;
}

export interface Gallery {
    src: string;
    type: 'image' | 'video';
}