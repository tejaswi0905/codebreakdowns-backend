export declare const checkUserOwnsProductDb: (userId: string, productId: string) => Promise<boolean>;
export declare const getProductPriceDb: (productId: string) => Promise<{
    priceInr: number;
} | null>;
export declare const grantProductAccessDb: (userId: string, productId: string, transactionId: string) => Promise<{
    id: string;
    userId: string;
    createdAt: Date;
    productId: string;
    transactionId: string;
    validUntil: Date | null;
}>;
//# sourceMappingURL=payments.dbService.d.ts.map