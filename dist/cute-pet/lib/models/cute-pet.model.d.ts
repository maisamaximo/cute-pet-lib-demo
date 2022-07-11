export interface CutePetModel {
    id: number;
    name: string;
    category: Category;
    photoUrls: string[];
    tags: Tag[];
    status: string;
}
export interface Category {
    id: number;
    name: string;
}
export interface Tag {
    id: number;
    name: string;
}
//# sourceMappingURL=cute-pet.model.d.ts.map