export declare const getActiveProductsDb: () => Promise<({
    courses: ({
        course: {
            id: string;
            title: string;
            imageUrl: string | null;
        };
    } & {
        courseId: string;
        productId: string;
    })[];
} & {
    id: string;
    isActive: boolean;
    title: string;
    imageUrl: string | null;
    description: string | null;
    priceInr: number;
    compareAtPriceInr: number | null;
})[]>;
export declare const createProductDb: (data: any) => Promise<{
    id: string;
    isActive: boolean;
    title: string;
    imageUrl: string | null;
    description: string | null;
    priceInr: number;
    compareAtPriceInr: number | null;
}>;
export declare const updateProductDb: (productId: string, data: any) => Promise<{
    id: string;
    isActive: boolean;
    title: string;
    imageUrl: string | null;
    description: string | null;
    priceInr: number;
    compareAtPriceInr: number | null;
}>;
export declare const linkCourseToProductDb: (productId: string, courseId: string) => Promise<{
    courseId: string;
    productId: string;
}>;
//# sourceMappingURL=products.dbService.d.ts.map