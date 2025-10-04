export interface ArticleModel {
    id: number;
    title: string;
    description: string;
    totalPages: number;
    publicationDate: Date;
}

export interface ArticleRequestModel {
    title: string;
    description: string;
    totalPages: number;
    publicationDate: Date;
}