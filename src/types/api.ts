
export type ImageProps = {
    alternativeText: string;
    url: string;
}

export type SectionOneProps = {
    Texto: string;
    Imagem: {
        url: string;
        alternativeText: string
    }
}

export type HomePageProps = {
    SectionOne: SectionOneProps;
}