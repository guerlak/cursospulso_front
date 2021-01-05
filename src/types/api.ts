
export type ImageProps = {
    alternativeText: string;
    url: string;
}
export type SectionHeroProps = {
    Image: {
        url: string;
    }
    text: string;
}


export type SectionOneProps = {
    Texto: string;
    Imagem: {
        url: string;
        alternativeText: string
    }
}

export type HomePageProps = {
    SectionHero: SectionHeroProps[];
    SectionOne: SectionOneProps;
}