import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Referral
 *
 */
export type ReferralModel = runtime.Types.Result.DefaultSelection<Prisma.$ReferralPayload>;
export type AggregateReferral = {
    _count: ReferralCountAggregateOutputType | null;
    _avg: ReferralAvgAggregateOutputType | null;
    _sum: ReferralSumAggregateOutputType | null;
    _min: ReferralMinAggregateOutputType | null;
    _max: ReferralMaxAggregateOutputType | null;
};
export type ReferralAvgAggregateOutputType = {
    promoterEarningsInr: number | null;
    studentDiscountInr: number | null;
};
export type ReferralSumAggregateOutputType = {
    promoterEarningsInr: number | null;
    studentDiscountInr: number | null;
};
export type ReferralMinAggregateOutputType = {
    id: string | null;
    promoterId: string | null;
    studentId: string | null;
    userProductId: string | null;
    promoterEarningsInr: number | null;
    studentDiscountInr: number | null;
    status: $Enums.ReferralStatus | null;
    createdAt: Date | null;
};
export type ReferralMaxAggregateOutputType = {
    id: string | null;
    promoterId: string | null;
    studentId: string | null;
    userProductId: string | null;
    promoterEarningsInr: number | null;
    studentDiscountInr: number | null;
    status: $Enums.ReferralStatus | null;
    createdAt: Date | null;
};
export type ReferralCountAggregateOutputType = {
    id: number;
    promoterId: number;
    studentId: number;
    userProductId: number;
    promoterEarningsInr: number;
    studentDiscountInr: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type ReferralAvgAggregateInputType = {
    promoterEarningsInr?: true;
    studentDiscountInr?: true;
};
export type ReferralSumAggregateInputType = {
    promoterEarningsInr?: true;
    studentDiscountInr?: true;
};
export type ReferralMinAggregateInputType = {
    id?: true;
    promoterId?: true;
    studentId?: true;
    userProductId?: true;
    promoterEarningsInr?: true;
    studentDiscountInr?: true;
    status?: true;
    createdAt?: true;
};
export type ReferralMaxAggregateInputType = {
    id?: true;
    promoterId?: true;
    studentId?: true;
    userProductId?: true;
    promoterEarningsInr?: true;
    studentDiscountInr?: true;
    status?: true;
    createdAt?: true;
};
export type ReferralCountAggregateInputType = {
    id?: true;
    promoterId?: true;
    studentId?: true;
    userProductId?: true;
    promoterEarningsInr?: true;
    studentDiscountInr?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type ReferralAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Referral to aggregate.
     */
    where?: Prisma.ReferralWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Referrals to fetch.
     */
    orderBy?: Prisma.ReferralOrderByWithRelationInput | Prisma.ReferralOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ReferralWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Referrals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Referrals
    **/
    _count?: true | ReferralCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ReferralAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ReferralSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ReferralMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ReferralMaxAggregateInputType;
};
export type GetReferralAggregateType<T extends ReferralAggregateArgs> = {
    [P in keyof T & keyof AggregateReferral]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReferral[P]> : Prisma.GetScalarType<T[P], AggregateReferral[P]>;
};
export type ReferralGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReferralWhereInput;
    orderBy?: Prisma.ReferralOrderByWithAggregationInput | Prisma.ReferralOrderByWithAggregationInput[];
    by: Prisma.ReferralScalarFieldEnum[] | Prisma.ReferralScalarFieldEnum;
    having?: Prisma.ReferralScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReferralCountAggregateInputType | true;
    _avg?: ReferralAvgAggregateInputType;
    _sum?: ReferralSumAggregateInputType;
    _min?: ReferralMinAggregateInputType;
    _max?: ReferralMaxAggregateInputType;
};
export type ReferralGroupByOutputType = {
    id: string;
    promoterId: string;
    studentId: string;
    userProductId: string;
    promoterEarningsInr: number;
    studentDiscountInr: number;
    status: $Enums.ReferralStatus;
    createdAt: Date;
    _count: ReferralCountAggregateOutputType | null;
    _avg: ReferralAvgAggregateOutputType | null;
    _sum: ReferralSumAggregateOutputType | null;
    _min: ReferralMinAggregateOutputType | null;
    _max: ReferralMaxAggregateOutputType | null;
};
export type GetReferralGroupByPayload<T extends ReferralGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReferralGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReferralGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReferralGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReferralGroupByOutputType[P]>;
}>>;
export type ReferralWhereInput = {
    AND?: Prisma.ReferralWhereInput | Prisma.ReferralWhereInput[];
    OR?: Prisma.ReferralWhereInput[];
    NOT?: Prisma.ReferralWhereInput | Prisma.ReferralWhereInput[];
    id?: Prisma.StringFilter<"Referral"> | string;
    promoterId?: Prisma.StringFilter<"Referral"> | string;
    studentId?: Prisma.StringFilter<"Referral"> | string;
    userProductId?: Prisma.StringFilter<"Referral"> | string;
    promoterEarningsInr?: Prisma.IntFilter<"Referral"> | number;
    studentDiscountInr?: Prisma.IntFilter<"Referral"> | number;
    status?: Prisma.EnumReferralStatusFilter<"Referral"> | $Enums.ReferralStatus;
    createdAt?: Prisma.DateTimeFilter<"Referral"> | Date | string;
    promoter?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    student?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    receipt?: Prisma.XOR<Prisma.UserProductScalarRelationFilter, Prisma.UserProductWhereInput>;
};
export type ReferralOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    promoterId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    userProductId?: Prisma.SortOrder;
    promoterEarningsInr?: Prisma.SortOrder;
    studentDiscountInr?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    promoter?: Prisma.UserOrderByWithRelationInput;
    student?: Prisma.UserOrderByWithRelationInput;
    receipt?: Prisma.UserProductOrderByWithRelationInput;
};
export type ReferralWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ReferralWhereInput | Prisma.ReferralWhereInput[];
    OR?: Prisma.ReferralWhereInput[];
    NOT?: Prisma.ReferralWhereInput | Prisma.ReferralWhereInput[];
    promoterId?: Prisma.StringFilter<"Referral"> | string;
    studentId?: Prisma.StringFilter<"Referral"> | string;
    userProductId?: Prisma.StringFilter<"Referral"> | string;
    promoterEarningsInr?: Prisma.IntFilter<"Referral"> | number;
    studentDiscountInr?: Prisma.IntFilter<"Referral"> | number;
    status?: Prisma.EnumReferralStatusFilter<"Referral"> | $Enums.ReferralStatus;
    createdAt?: Prisma.DateTimeFilter<"Referral"> | Date | string;
    promoter?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    student?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    receipt?: Prisma.XOR<Prisma.UserProductScalarRelationFilter, Prisma.UserProductWhereInput>;
}, "id">;
export type ReferralOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    promoterId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    userProductId?: Prisma.SortOrder;
    promoterEarningsInr?: Prisma.SortOrder;
    studentDiscountInr?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ReferralCountOrderByAggregateInput;
    _avg?: Prisma.ReferralAvgOrderByAggregateInput;
    _max?: Prisma.ReferralMaxOrderByAggregateInput;
    _min?: Prisma.ReferralMinOrderByAggregateInput;
    _sum?: Prisma.ReferralSumOrderByAggregateInput;
};
export type ReferralScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReferralScalarWhereWithAggregatesInput | Prisma.ReferralScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReferralScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReferralScalarWhereWithAggregatesInput | Prisma.ReferralScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Referral"> | string;
    promoterId?: Prisma.StringWithAggregatesFilter<"Referral"> | string;
    studentId?: Prisma.StringWithAggregatesFilter<"Referral"> | string;
    userProductId?: Prisma.StringWithAggregatesFilter<"Referral"> | string;
    promoterEarningsInr?: Prisma.IntWithAggregatesFilter<"Referral"> | number;
    studentDiscountInr?: Prisma.IntWithAggregatesFilter<"Referral"> | number;
    status?: Prisma.EnumReferralStatusWithAggregatesFilter<"Referral"> | $Enums.ReferralStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Referral"> | Date | string;
};
export type ReferralCreateInput = {
    id?: string;
    promoterEarningsInr: number;
    studentDiscountInr: number;
    status?: $Enums.ReferralStatus;
    createdAt?: Date | string;
    promoter: Prisma.UserCreateNestedOneWithoutReferralsMadeInput;
    student: Prisma.UserCreateNestedOneWithoutReferralsUsedInput;
    receipt: Prisma.UserProductCreateNestedOneWithoutReferralsInput;
};
export type ReferralUncheckedCreateInput = {
    id?: string;
    promoterId: string;
    studentId: string;
    userProductId: string;
    promoterEarningsInr: number;
    studentDiscountInr: number;
    status?: $Enums.ReferralStatus;
    createdAt?: Date | string;
};
export type ReferralUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    promoterEarningsInr?: Prisma.IntFieldUpdateOperationsInput | number;
    studentDiscountInr?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promoter?: Prisma.UserUpdateOneRequiredWithoutReferralsMadeNestedInput;
    student?: Prisma.UserUpdateOneRequiredWithoutReferralsUsedNestedInput;
    receipt?: Prisma.UserProductUpdateOneRequiredWithoutReferralsNestedInput;
};
export type ReferralUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    promoterId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    userProductId?: Prisma.StringFieldUpdateOperationsInput | string;
    promoterEarningsInr?: Prisma.IntFieldUpdateOperationsInput | number;
    studentDiscountInr?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReferralCreateManyInput = {
    id?: string;
    promoterId: string;
    studentId: string;
    userProductId: string;
    promoterEarningsInr: number;
    studentDiscountInr: number;
    status?: $Enums.ReferralStatus;
    createdAt?: Date | string;
};
export type ReferralUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    promoterEarningsInr?: Prisma.IntFieldUpdateOperationsInput | number;
    studentDiscountInr?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReferralUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    promoterId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    userProductId?: Prisma.StringFieldUpdateOperationsInput | string;
    promoterEarningsInr?: Prisma.IntFieldUpdateOperationsInput | number;
    studentDiscountInr?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReferralListRelationFilter = {
    every?: Prisma.ReferralWhereInput;
    some?: Prisma.ReferralWhereInput;
    none?: Prisma.ReferralWhereInput;
};
export type ReferralOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReferralCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    promoterId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    userProductId?: Prisma.SortOrder;
    promoterEarningsInr?: Prisma.SortOrder;
    studentDiscountInr?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReferralAvgOrderByAggregateInput = {
    promoterEarningsInr?: Prisma.SortOrder;
    studentDiscountInr?: Prisma.SortOrder;
};
export type ReferralMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    promoterId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    userProductId?: Prisma.SortOrder;
    promoterEarningsInr?: Prisma.SortOrder;
    studentDiscountInr?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReferralMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    promoterId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    userProductId?: Prisma.SortOrder;
    promoterEarningsInr?: Prisma.SortOrder;
    studentDiscountInr?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReferralSumOrderByAggregateInput = {
    promoterEarningsInr?: Prisma.SortOrder;
    studentDiscountInr?: Prisma.SortOrder;
};
export type ReferralCreateNestedManyWithoutPromoterInput = {
    create?: Prisma.XOR<Prisma.ReferralCreateWithoutPromoterInput, Prisma.ReferralUncheckedCreateWithoutPromoterInput> | Prisma.ReferralCreateWithoutPromoterInput[] | Prisma.ReferralUncheckedCreateWithoutPromoterInput[];
    connectOrCreate?: Prisma.ReferralCreateOrConnectWithoutPromoterInput | Prisma.ReferralCreateOrConnectWithoutPromoterInput[];
    createMany?: Prisma.ReferralCreateManyPromoterInputEnvelope;
    connect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
};
export type ReferralCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.ReferralCreateWithoutStudentInput, Prisma.ReferralUncheckedCreateWithoutStudentInput> | Prisma.ReferralCreateWithoutStudentInput[] | Prisma.ReferralUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.ReferralCreateOrConnectWithoutStudentInput | Prisma.ReferralCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.ReferralCreateManyStudentInputEnvelope;
    connect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
};
export type ReferralUncheckedCreateNestedManyWithoutPromoterInput = {
    create?: Prisma.XOR<Prisma.ReferralCreateWithoutPromoterInput, Prisma.ReferralUncheckedCreateWithoutPromoterInput> | Prisma.ReferralCreateWithoutPromoterInput[] | Prisma.ReferralUncheckedCreateWithoutPromoterInput[];
    connectOrCreate?: Prisma.ReferralCreateOrConnectWithoutPromoterInput | Prisma.ReferralCreateOrConnectWithoutPromoterInput[];
    createMany?: Prisma.ReferralCreateManyPromoterInputEnvelope;
    connect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
};
export type ReferralUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.ReferralCreateWithoutStudentInput, Prisma.ReferralUncheckedCreateWithoutStudentInput> | Prisma.ReferralCreateWithoutStudentInput[] | Prisma.ReferralUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.ReferralCreateOrConnectWithoutStudentInput | Prisma.ReferralCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.ReferralCreateManyStudentInputEnvelope;
    connect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
};
export type ReferralUpdateManyWithoutPromoterNestedInput = {
    create?: Prisma.XOR<Prisma.ReferralCreateWithoutPromoterInput, Prisma.ReferralUncheckedCreateWithoutPromoterInput> | Prisma.ReferralCreateWithoutPromoterInput[] | Prisma.ReferralUncheckedCreateWithoutPromoterInput[];
    connectOrCreate?: Prisma.ReferralCreateOrConnectWithoutPromoterInput | Prisma.ReferralCreateOrConnectWithoutPromoterInput[];
    upsert?: Prisma.ReferralUpsertWithWhereUniqueWithoutPromoterInput | Prisma.ReferralUpsertWithWhereUniqueWithoutPromoterInput[];
    createMany?: Prisma.ReferralCreateManyPromoterInputEnvelope;
    set?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    disconnect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    delete?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    connect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    update?: Prisma.ReferralUpdateWithWhereUniqueWithoutPromoterInput | Prisma.ReferralUpdateWithWhereUniqueWithoutPromoterInput[];
    updateMany?: Prisma.ReferralUpdateManyWithWhereWithoutPromoterInput | Prisma.ReferralUpdateManyWithWhereWithoutPromoterInput[];
    deleteMany?: Prisma.ReferralScalarWhereInput | Prisma.ReferralScalarWhereInput[];
};
export type ReferralUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.ReferralCreateWithoutStudentInput, Prisma.ReferralUncheckedCreateWithoutStudentInput> | Prisma.ReferralCreateWithoutStudentInput[] | Prisma.ReferralUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.ReferralCreateOrConnectWithoutStudentInput | Prisma.ReferralCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.ReferralUpsertWithWhereUniqueWithoutStudentInput | Prisma.ReferralUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.ReferralCreateManyStudentInputEnvelope;
    set?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    disconnect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    delete?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    connect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    update?: Prisma.ReferralUpdateWithWhereUniqueWithoutStudentInput | Prisma.ReferralUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.ReferralUpdateManyWithWhereWithoutStudentInput | Prisma.ReferralUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.ReferralScalarWhereInput | Prisma.ReferralScalarWhereInput[];
};
export type ReferralUncheckedUpdateManyWithoutPromoterNestedInput = {
    create?: Prisma.XOR<Prisma.ReferralCreateWithoutPromoterInput, Prisma.ReferralUncheckedCreateWithoutPromoterInput> | Prisma.ReferralCreateWithoutPromoterInput[] | Prisma.ReferralUncheckedCreateWithoutPromoterInput[];
    connectOrCreate?: Prisma.ReferralCreateOrConnectWithoutPromoterInput | Prisma.ReferralCreateOrConnectWithoutPromoterInput[];
    upsert?: Prisma.ReferralUpsertWithWhereUniqueWithoutPromoterInput | Prisma.ReferralUpsertWithWhereUniqueWithoutPromoterInput[];
    createMany?: Prisma.ReferralCreateManyPromoterInputEnvelope;
    set?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    disconnect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    delete?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    connect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    update?: Prisma.ReferralUpdateWithWhereUniqueWithoutPromoterInput | Prisma.ReferralUpdateWithWhereUniqueWithoutPromoterInput[];
    updateMany?: Prisma.ReferralUpdateManyWithWhereWithoutPromoterInput | Prisma.ReferralUpdateManyWithWhereWithoutPromoterInput[];
    deleteMany?: Prisma.ReferralScalarWhereInput | Prisma.ReferralScalarWhereInput[];
};
export type ReferralUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.ReferralCreateWithoutStudentInput, Prisma.ReferralUncheckedCreateWithoutStudentInput> | Prisma.ReferralCreateWithoutStudentInput[] | Prisma.ReferralUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.ReferralCreateOrConnectWithoutStudentInput | Prisma.ReferralCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.ReferralUpsertWithWhereUniqueWithoutStudentInput | Prisma.ReferralUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.ReferralCreateManyStudentInputEnvelope;
    set?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    disconnect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    delete?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    connect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    update?: Prisma.ReferralUpdateWithWhereUniqueWithoutStudentInput | Prisma.ReferralUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.ReferralUpdateManyWithWhereWithoutStudentInput | Prisma.ReferralUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.ReferralScalarWhereInput | Prisma.ReferralScalarWhereInput[];
};
export type ReferralCreateNestedManyWithoutReceiptInput = {
    create?: Prisma.XOR<Prisma.ReferralCreateWithoutReceiptInput, Prisma.ReferralUncheckedCreateWithoutReceiptInput> | Prisma.ReferralCreateWithoutReceiptInput[] | Prisma.ReferralUncheckedCreateWithoutReceiptInput[];
    connectOrCreate?: Prisma.ReferralCreateOrConnectWithoutReceiptInput | Prisma.ReferralCreateOrConnectWithoutReceiptInput[];
    createMany?: Prisma.ReferralCreateManyReceiptInputEnvelope;
    connect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
};
export type ReferralUncheckedCreateNestedManyWithoutReceiptInput = {
    create?: Prisma.XOR<Prisma.ReferralCreateWithoutReceiptInput, Prisma.ReferralUncheckedCreateWithoutReceiptInput> | Prisma.ReferralCreateWithoutReceiptInput[] | Prisma.ReferralUncheckedCreateWithoutReceiptInput[];
    connectOrCreate?: Prisma.ReferralCreateOrConnectWithoutReceiptInput | Prisma.ReferralCreateOrConnectWithoutReceiptInput[];
    createMany?: Prisma.ReferralCreateManyReceiptInputEnvelope;
    connect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
};
export type ReferralUpdateManyWithoutReceiptNestedInput = {
    create?: Prisma.XOR<Prisma.ReferralCreateWithoutReceiptInput, Prisma.ReferralUncheckedCreateWithoutReceiptInput> | Prisma.ReferralCreateWithoutReceiptInput[] | Prisma.ReferralUncheckedCreateWithoutReceiptInput[];
    connectOrCreate?: Prisma.ReferralCreateOrConnectWithoutReceiptInput | Prisma.ReferralCreateOrConnectWithoutReceiptInput[];
    upsert?: Prisma.ReferralUpsertWithWhereUniqueWithoutReceiptInput | Prisma.ReferralUpsertWithWhereUniqueWithoutReceiptInput[];
    createMany?: Prisma.ReferralCreateManyReceiptInputEnvelope;
    set?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    disconnect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    delete?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    connect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    update?: Prisma.ReferralUpdateWithWhereUniqueWithoutReceiptInput | Prisma.ReferralUpdateWithWhereUniqueWithoutReceiptInput[];
    updateMany?: Prisma.ReferralUpdateManyWithWhereWithoutReceiptInput | Prisma.ReferralUpdateManyWithWhereWithoutReceiptInput[];
    deleteMany?: Prisma.ReferralScalarWhereInput | Prisma.ReferralScalarWhereInput[];
};
export type ReferralUncheckedUpdateManyWithoutReceiptNestedInput = {
    create?: Prisma.XOR<Prisma.ReferralCreateWithoutReceiptInput, Prisma.ReferralUncheckedCreateWithoutReceiptInput> | Prisma.ReferralCreateWithoutReceiptInput[] | Prisma.ReferralUncheckedCreateWithoutReceiptInput[];
    connectOrCreate?: Prisma.ReferralCreateOrConnectWithoutReceiptInput | Prisma.ReferralCreateOrConnectWithoutReceiptInput[];
    upsert?: Prisma.ReferralUpsertWithWhereUniqueWithoutReceiptInput | Prisma.ReferralUpsertWithWhereUniqueWithoutReceiptInput[];
    createMany?: Prisma.ReferralCreateManyReceiptInputEnvelope;
    set?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    disconnect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    delete?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    connect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    update?: Prisma.ReferralUpdateWithWhereUniqueWithoutReceiptInput | Prisma.ReferralUpdateWithWhereUniqueWithoutReceiptInput[];
    updateMany?: Prisma.ReferralUpdateManyWithWhereWithoutReceiptInput | Prisma.ReferralUpdateManyWithWhereWithoutReceiptInput[];
    deleteMany?: Prisma.ReferralScalarWhereInput | Prisma.ReferralScalarWhereInput[];
};
export type EnumReferralStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReferralStatus;
};
export type ReferralCreateWithoutPromoterInput = {
    id?: string;
    promoterEarningsInr: number;
    studentDiscountInr: number;
    status?: $Enums.ReferralStatus;
    createdAt?: Date | string;
    student: Prisma.UserCreateNestedOneWithoutReferralsUsedInput;
    receipt: Prisma.UserProductCreateNestedOneWithoutReferralsInput;
};
export type ReferralUncheckedCreateWithoutPromoterInput = {
    id?: string;
    studentId: string;
    userProductId: string;
    promoterEarningsInr: number;
    studentDiscountInr: number;
    status?: $Enums.ReferralStatus;
    createdAt?: Date | string;
};
export type ReferralCreateOrConnectWithoutPromoterInput = {
    where: Prisma.ReferralWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReferralCreateWithoutPromoterInput, Prisma.ReferralUncheckedCreateWithoutPromoterInput>;
};
export type ReferralCreateManyPromoterInputEnvelope = {
    data: Prisma.ReferralCreateManyPromoterInput | Prisma.ReferralCreateManyPromoterInput[];
    skipDuplicates?: boolean;
};
export type ReferralCreateWithoutStudentInput = {
    id?: string;
    promoterEarningsInr: number;
    studentDiscountInr: number;
    status?: $Enums.ReferralStatus;
    createdAt?: Date | string;
    promoter: Prisma.UserCreateNestedOneWithoutReferralsMadeInput;
    receipt: Prisma.UserProductCreateNestedOneWithoutReferralsInput;
};
export type ReferralUncheckedCreateWithoutStudentInput = {
    id?: string;
    promoterId: string;
    userProductId: string;
    promoterEarningsInr: number;
    studentDiscountInr: number;
    status?: $Enums.ReferralStatus;
    createdAt?: Date | string;
};
export type ReferralCreateOrConnectWithoutStudentInput = {
    where: Prisma.ReferralWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReferralCreateWithoutStudentInput, Prisma.ReferralUncheckedCreateWithoutStudentInput>;
};
export type ReferralCreateManyStudentInputEnvelope = {
    data: Prisma.ReferralCreateManyStudentInput | Prisma.ReferralCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type ReferralUpsertWithWhereUniqueWithoutPromoterInput = {
    where: Prisma.ReferralWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReferralUpdateWithoutPromoterInput, Prisma.ReferralUncheckedUpdateWithoutPromoterInput>;
    create: Prisma.XOR<Prisma.ReferralCreateWithoutPromoterInput, Prisma.ReferralUncheckedCreateWithoutPromoterInput>;
};
export type ReferralUpdateWithWhereUniqueWithoutPromoterInput = {
    where: Prisma.ReferralWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReferralUpdateWithoutPromoterInput, Prisma.ReferralUncheckedUpdateWithoutPromoterInput>;
};
export type ReferralUpdateManyWithWhereWithoutPromoterInput = {
    where: Prisma.ReferralScalarWhereInput;
    data: Prisma.XOR<Prisma.ReferralUpdateManyMutationInput, Prisma.ReferralUncheckedUpdateManyWithoutPromoterInput>;
};
export type ReferralScalarWhereInput = {
    AND?: Prisma.ReferralScalarWhereInput | Prisma.ReferralScalarWhereInput[];
    OR?: Prisma.ReferralScalarWhereInput[];
    NOT?: Prisma.ReferralScalarWhereInput | Prisma.ReferralScalarWhereInput[];
    id?: Prisma.StringFilter<"Referral"> | string;
    promoterId?: Prisma.StringFilter<"Referral"> | string;
    studentId?: Prisma.StringFilter<"Referral"> | string;
    userProductId?: Prisma.StringFilter<"Referral"> | string;
    promoterEarningsInr?: Prisma.IntFilter<"Referral"> | number;
    studentDiscountInr?: Prisma.IntFilter<"Referral"> | number;
    status?: Prisma.EnumReferralStatusFilter<"Referral"> | $Enums.ReferralStatus;
    createdAt?: Prisma.DateTimeFilter<"Referral"> | Date | string;
};
export type ReferralUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.ReferralWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReferralUpdateWithoutStudentInput, Prisma.ReferralUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.ReferralCreateWithoutStudentInput, Prisma.ReferralUncheckedCreateWithoutStudentInput>;
};
export type ReferralUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.ReferralWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReferralUpdateWithoutStudentInput, Prisma.ReferralUncheckedUpdateWithoutStudentInput>;
};
export type ReferralUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.ReferralScalarWhereInput;
    data: Prisma.XOR<Prisma.ReferralUpdateManyMutationInput, Prisma.ReferralUncheckedUpdateManyWithoutStudentInput>;
};
export type ReferralCreateWithoutReceiptInput = {
    id?: string;
    promoterEarningsInr: number;
    studentDiscountInr: number;
    status?: $Enums.ReferralStatus;
    createdAt?: Date | string;
    promoter: Prisma.UserCreateNestedOneWithoutReferralsMadeInput;
    student: Prisma.UserCreateNestedOneWithoutReferralsUsedInput;
};
export type ReferralUncheckedCreateWithoutReceiptInput = {
    id?: string;
    promoterId: string;
    studentId: string;
    promoterEarningsInr: number;
    studentDiscountInr: number;
    status?: $Enums.ReferralStatus;
    createdAt?: Date | string;
};
export type ReferralCreateOrConnectWithoutReceiptInput = {
    where: Prisma.ReferralWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReferralCreateWithoutReceiptInput, Prisma.ReferralUncheckedCreateWithoutReceiptInput>;
};
export type ReferralCreateManyReceiptInputEnvelope = {
    data: Prisma.ReferralCreateManyReceiptInput | Prisma.ReferralCreateManyReceiptInput[];
    skipDuplicates?: boolean;
};
export type ReferralUpsertWithWhereUniqueWithoutReceiptInput = {
    where: Prisma.ReferralWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReferralUpdateWithoutReceiptInput, Prisma.ReferralUncheckedUpdateWithoutReceiptInput>;
    create: Prisma.XOR<Prisma.ReferralCreateWithoutReceiptInput, Prisma.ReferralUncheckedCreateWithoutReceiptInput>;
};
export type ReferralUpdateWithWhereUniqueWithoutReceiptInput = {
    where: Prisma.ReferralWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReferralUpdateWithoutReceiptInput, Prisma.ReferralUncheckedUpdateWithoutReceiptInput>;
};
export type ReferralUpdateManyWithWhereWithoutReceiptInput = {
    where: Prisma.ReferralScalarWhereInput;
    data: Prisma.XOR<Prisma.ReferralUpdateManyMutationInput, Prisma.ReferralUncheckedUpdateManyWithoutReceiptInput>;
};
export type ReferralCreateManyPromoterInput = {
    id?: string;
    studentId: string;
    userProductId: string;
    promoterEarningsInr: number;
    studentDiscountInr: number;
    status?: $Enums.ReferralStatus;
    createdAt?: Date | string;
};
export type ReferralCreateManyStudentInput = {
    id?: string;
    promoterId: string;
    userProductId: string;
    promoterEarningsInr: number;
    studentDiscountInr: number;
    status?: $Enums.ReferralStatus;
    createdAt?: Date | string;
};
export type ReferralUpdateWithoutPromoterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    promoterEarningsInr?: Prisma.IntFieldUpdateOperationsInput | number;
    studentDiscountInr?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.UserUpdateOneRequiredWithoutReferralsUsedNestedInput;
    receipt?: Prisma.UserProductUpdateOneRequiredWithoutReferralsNestedInput;
};
export type ReferralUncheckedUpdateWithoutPromoterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    userProductId?: Prisma.StringFieldUpdateOperationsInput | string;
    promoterEarningsInr?: Prisma.IntFieldUpdateOperationsInput | number;
    studentDiscountInr?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReferralUncheckedUpdateManyWithoutPromoterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    userProductId?: Prisma.StringFieldUpdateOperationsInput | string;
    promoterEarningsInr?: Prisma.IntFieldUpdateOperationsInput | number;
    studentDiscountInr?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReferralUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    promoterEarningsInr?: Prisma.IntFieldUpdateOperationsInput | number;
    studentDiscountInr?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promoter?: Prisma.UserUpdateOneRequiredWithoutReferralsMadeNestedInput;
    receipt?: Prisma.UserProductUpdateOneRequiredWithoutReferralsNestedInput;
};
export type ReferralUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    promoterId?: Prisma.StringFieldUpdateOperationsInput | string;
    userProductId?: Prisma.StringFieldUpdateOperationsInput | string;
    promoterEarningsInr?: Prisma.IntFieldUpdateOperationsInput | number;
    studentDiscountInr?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReferralUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    promoterId?: Prisma.StringFieldUpdateOperationsInput | string;
    userProductId?: Prisma.StringFieldUpdateOperationsInput | string;
    promoterEarningsInr?: Prisma.IntFieldUpdateOperationsInput | number;
    studentDiscountInr?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReferralCreateManyReceiptInput = {
    id?: string;
    promoterId: string;
    studentId: string;
    promoterEarningsInr: number;
    studentDiscountInr: number;
    status?: $Enums.ReferralStatus;
    createdAt?: Date | string;
};
export type ReferralUpdateWithoutReceiptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    promoterEarningsInr?: Prisma.IntFieldUpdateOperationsInput | number;
    studentDiscountInr?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promoter?: Prisma.UserUpdateOneRequiredWithoutReferralsMadeNestedInput;
    student?: Prisma.UserUpdateOneRequiredWithoutReferralsUsedNestedInput;
};
export type ReferralUncheckedUpdateWithoutReceiptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    promoterId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    promoterEarningsInr?: Prisma.IntFieldUpdateOperationsInput | number;
    studentDiscountInr?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReferralUncheckedUpdateManyWithoutReceiptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    promoterId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    promoterEarningsInr?: Prisma.IntFieldUpdateOperationsInput | number;
    studentDiscountInr?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReferralSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    promoterId?: boolean;
    studentId?: boolean;
    userProductId?: boolean;
    promoterEarningsInr?: boolean;
    studentDiscountInr?: boolean;
    status?: boolean;
    createdAt?: boolean;
    promoter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receipt?: boolean | Prisma.UserProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["referral"]>;
export type ReferralSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    promoterId?: boolean;
    studentId?: boolean;
    userProductId?: boolean;
    promoterEarningsInr?: boolean;
    studentDiscountInr?: boolean;
    status?: boolean;
    createdAt?: boolean;
    promoter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receipt?: boolean | Prisma.UserProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["referral"]>;
export type ReferralSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    promoterId?: boolean;
    studentId?: boolean;
    userProductId?: boolean;
    promoterEarningsInr?: boolean;
    studentDiscountInr?: boolean;
    status?: boolean;
    createdAt?: boolean;
    promoter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receipt?: boolean | Prisma.UserProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["referral"]>;
export type ReferralSelectScalar = {
    id?: boolean;
    promoterId?: boolean;
    studentId?: boolean;
    userProductId?: boolean;
    promoterEarningsInr?: boolean;
    studentDiscountInr?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type ReferralOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "promoterId" | "studentId" | "userProductId" | "promoterEarningsInr" | "studentDiscountInr" | "status" | "createdAt", ExtArgs["result"]["referral"]>;
export type ReferralInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    promoter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receipt?: boolean | Prisma.UserProductDefaultArgs<ExtArgs>;
};
export type ReferralIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    promoter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receipt?: boolean | Prisma.UserProductDefaultArgs<ExtArgs>;
};
export type ReferralIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    promoter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receipt?: boolean | Prisma.UserProductDefaultArgs<ExtArgs>;
};
export type $ReferralPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Referral";
    objects: {
        promoter: Prisma.$UserPayload<ExtArgs>;
        student: Prisma.$UserPayload<ExtArgs>;
        receipt: Prisma.$UserProductPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        promoterId: string;
        studentId: string;
        userProductId: string;
        promoterEarningsInr: number;
        studentDiscountInr: number;
        status: $Enums.ReferralStatus;
        createdAt: Date;
    }, ExtArgs["result"]["referral"]>;
    composites: {};
};
export type ReferralGetPayload<S extends boolean | null | undefined | ReferralDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReferralPayload, S>;
export type ReferralCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReferralFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReferralCountAggregateInputType | true;
};
export interface ReferralDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Referral'];
        meta: {
            name: 'Referral';
        };
    };
    /**
     * Find zero or one Referral that matches the filter.
     * @param {ReferralFindUniqueArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralFindUniqueArgs>(args: Prisma.SelectSubset<T, ReferralFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReferralClient<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Referral that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferralFindUniqueOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReferralFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReferralClient<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Referral that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralFindFirstArgs>(args?: Prisma.SelectSubset<T, ReferralFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReferralClient<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Referral that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReferralFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReferralClient<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Referrals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Referrals
     * const referrals = await prisma.referral.findMany()
     *
     * // Get first 10 Referrals
     * const referrals = await prisma.referral.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const referralWithIdOnly = await prisma.referral.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ReferralFindManyArgs>(args?: Prisma.SelectSubset<T, ReferralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Referral.
     * @param {ReferralCreateArgs} args - Arguments to create a Referral.
     * @example
     * // Create one Referral
     * const Referral = await prisma.referral.create({
     *   data: {
     *     // ... data to create a Referral
     *   }
     * })
     *
     */
    create<T extends ReferralCreateArgs>(args: Prisma.SelectSubset<T, ReferralCreateArgs<ExtArgs>>): Prisma.Prisma__ReferralClient<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Referrals.
     * @param {ReferralCreateManyArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ReferralCreateManyArgs>(args?: Prisma.SelectSubset<T, ReferralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Referrals and returns the data saved in the database.
     * @param {ReferralCreateManyAndReturnArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Referrals and only return the `id`
     * const referralWithIdOnly = await prisma.referral.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ReferralCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReferralCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Referral.
     * @param {ReferralDeleteArgs} args - Arguments to delete one Referral.
     * @example
     * // Delete one Referral
     * const Referral = await prisma.referral.delete({
     *   where: {
     *     // ... filter to delete one Referral
     *   }
     * })
     *
     */
    delete<T extends ReferralDeleteArgs>(args: Prisma.SelectSubset<T, ReferralDeleteArgs<ExtArgs>>): Prisma.Prisma__ReferralClient<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Referral.
     * @param {ReferralUpdateArgs} args - Arguments to update one Referral.
     * @example
     * // Update one Referral
     * const referral = await prisma.referral.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ReferralUpdateArgs>(args: Prisma.SelectSubset<T, ReferralUpdateArgs<ExtArgs>>): Prisma.Prisma__ReferralClient<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Referrals.
     * @param {ReferralDeleteManyArgs} args - Arguments to filter Referrals to delete.
     * @example
     * // Delete a few Referrals
     * const { count } = await prisma.referral.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ReferralDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReferralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Referrals
     * const referral = await prisma.referral.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ReferralUpdateManyArgs>(args: Prisma.SelectSubset<T, ReferralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Referrals and returns the data updated in the database.
     * @param {ReferralUpdateManyAndReturnArgs} args - Arguments to update many Referrals.
     * @example
     * // Update many Referrals
     * const referral = await prisma.referral.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Referrals and only return the `id`
     * const referralWithIdOnly = await prisma.referral.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ReferralUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReferralUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Referral.
     * @param {ReferralUpsertArgs} args - Arguments to update or create a Referral.
     * @example
     * // Update or create a Referral
     * const referral = await prisma.referral.upsert({
     *   create: {
     *     // ... data to create a Referral
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Referral we want to update
     *   }
     * })
     */
    upsert<T extends ReferralUpsertArgs>(args: Prisma.SelectSubset<T, ReferralUpsertArgs<ExtArgs>>): Prisma.Prisma__ReferralClient<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCountArgs} args - Arguments to filter Referrals to count.
     * @example
     * // Count the number of Referrals
     * const count = await prisma.referral.count({
     *   where: {
     *     // ... the filter for the Referrals we want to count
     *   }
     * })
    **/
    count<T extends ReferralCountArgs>(args?: Prisma.Subset<T, ReferralCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReferralCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReferralAggregateArgs>(args: Prisma.Subset<T, ReferralAggregateArgs>): Prisma.PrismaPromise<GetReferralAggregateType<T>>;
    /**
     * Group by Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends ReferralGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReferralGroupByArgs['orderBy'];
    } : {
        orderBy?: ReferralGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReferralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Referral model
     */
    readonly fields: ReferralFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Referral.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ReferralClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    promoter<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    student<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    receipt<T extends Prisma.UserProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserProductDefaultArgs<ExtArgs>>): Prisma.Prisma__UserProductClient<runtime.Types.Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Referral model
 */
export interface ReferralFieldRefs {
    readonly id: Prisma.FieldRef<"Referral", 'String'>;
    readonly promoterId: Prisma.FieldRef<"Referral", 'String'>;
    readonly studentId: Prisma.FieldRef<"Referral", 'String'>;
    readonly userProductId: Prisma.FieldRef<"Referral", 'String'>;
    readonly promoterEarningsInr: Prisma.FieldRef<"Referral", 'Int'>;
    readonly studentDiscountInr: Prisma.FieldRef<"Referral", 'Int'>;
    readonly status: Prisma.FieldRef<"Referral", 'ReferralStatus'>;
    readonly createdAt: Prisma.FieldRef<"Referral", 'DateTime'>;
}
/**
 * Referral findUnique
 */
export type ReferralFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Referral
     */
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    /**
     * Filter, which Referral to fetch.
     */
    where: Prisma.ReferralWhereUniqueInput;
};
/**
 * Referral findUniqueOrThrow
 */
export type ReferralFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Referral
     */
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    /**
     * Filter, which Referral to fetch.
     */
    where: Prisma.ReferralWhereUniqueInput;
};
/**
 * Referral findFirst
 */
export type ReferralFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Referral
     */
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    /**
     * Filter, which Referral to fetch.
     */
    where?: Prisma.ReferralWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Referrals to fetch.
     */
    orderBy?: Prisma.ReferralOrderByWithRelationInput | Prisma.ReferralOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Referrals.
     */
    cursor?: Prisma.ReferralWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Referrals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Referrals.
     */
    distinct?: Prisma.ReferralScalarFieldEnum | Prisma.ReferralScalarFieldEnum[];
};
/**
 * Referral findFirstOrThrow
 */
export type ReferralFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Referral
     */
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    /**
     * Filter, which Referral to fetch.
     */
    where?: Prisma.ReferralWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Referrals to fetch.
     */
    orderBy?: Prisma.ReferralOrderByWithRelationInput | Prisma.ReferralOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Referrals.
     */
    cursor?: Prisma.ReferralWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Referrals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Referrals.
     */
    distinct?: Prisma.ReferralScalarFieldEnum | Prisma.ReferralScalarFieldEnum[];
};
/**
 * Referral findMany
 */
export type ReferralFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Referral
     */
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    /**
     * Filter, which Referrals to fetch.
     */
    where?: Prisma.ReferralWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Referrals to fetch.
     */
    orderBy?: Prisma.ReferralOrderByWithRelationInput | Prisma.ReferralOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Referrals.
     */
    cursor?: Prisma.ReferralWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Referrals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Referrals.
     */
    distinct?: Prisma.ReferralScalarFieldEnum | Prisma.ReferralScalarFieldEnum[];
};
/**
 * Referral create
 */
export type ReferralCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Referral
     */
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    /**
     * The data needed to create a Referral.
     */
    data: Prisma.XOR<Prisma.ReferralCreateInput, Prisma.ReferralUncheckedCreateInput>;
};
/**
 * Referral createMany
 */
export type ReferralCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Referrals.
     */
    data: Prisma.ReferralCreateManyInput | Prisma.ReferralCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Referral createManyAndReturn
 */
export type ReferralCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: Prisma.ReferralSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Referral
     */
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    /**
     * The data used to create many Referrals.
     */
    data: Prisma.ReferralCreateManyInput | Prisma.ReferralCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReferralIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Referral update
 */
export type ReferralUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Referral
     */
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    /**
     * The data needed to update a Referral.
     */
    data: Prisma.XOR<Prisma.ReferralUpdateInput, Prisma.ReferralUncheckedUpdateInput>;
    /**
     * Choose, which Referral to update.
     */
    where: Prisma.ReferralWhereUniqueInput;
};
/**
 * Referral updateMany
 */
export type ReferralUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Referrals.
     */
    data: Prisma.XOR<Prisma.ReferralUpdateManyMutationInput, Prisma.ReferralUncheckedUpdateManyInput>;
    /**
     * Filter which Referrals to update
     */
    where?: Prisma.ReferralWhereInput;
    /**
     * Limit how many Referrals to update.
     */
    limit?: number;
};
/**
 * Referral updateManyAndReturn
 */
export type ReferralUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: Prisma.ReferralSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Referral
     */
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    /**
     * The data used to update Referrals.
     */
    data: Prisma.XOR<Prisma.ReferralUpdateManyMutationInput, Prisma.ReferralUncheckedUpdateManyInput>;
    /**
     * Filter which Referrals to update
     */
    where?: Prisma.ReferralWhereInput;
    /**
     * Limit how many Referrals to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReferralIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Referral upsert
 */
export type ReferralUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Referral
     */
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    /**
     * The filter to search for the Referral to update in case it exists.
     */
    where: Prisma.ReferralWhereUniqueInput;
    /**
     * In case the Referral found by the `where` argument doesn't exist, create a new Referral with this data.
     */
    create: Prisma.XOR<Prisma.ReferralCreateInput, Prisma.ReferralUncheckedCreateInput>;
    /**
     * In case the Referral was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ReferralUpdateInput, Prisma.ReferralUncheckedUpdateInput>;
};
/**
 * Referral delete
 */
export type ReferralDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Referral
     */
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    /**
     * Filter which Referral to delete.
     */
    where: Prisma.ReferralWhereUniqueInput;
};
/**
 * Referral deleteMany
 */
export type ReferralDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Referrals to delete
     */
    where?: Prisma.ReferralWhereInput;
    /**
     * Limit how many Referrals to delete.
     */
    limit?: number;
};
/**
 * Referral without action
 */
export type ReferralDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Referral
     */
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReferralInclude<ExtArgs> | null;
};
//# sourceMappingURL=Referral.d.ts.map