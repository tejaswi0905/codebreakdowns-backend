import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model InterviewPass
 *
 */
export type InterviewPassModel = runtime.Types.Result.DefaultSelection<Prisma.$InterviewPassPayload>;
export type AggregateInterviewPass = {
    _count: InterviewPassCountAggregateOutputType | null;
    _avg: InterviewPassAvgAggregateOutputType | null;
    _sum: InterviewPassSumAggregateOutputType | null;
    _min: InterviewPassMinAggregateOutputType | null;
    _max: InterviewPassMaxAggregateOutputType | null;
};
export type InterviewPassAvgAggregateOutputType = {
    totalCredits: number | null;
    usedCredits: number | null;
};
export type InterviewPassSumAggregateOutputType = {
    totalCredits: number | null;
    usedCredits: number | null;
};
export type InterviewPassMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    totalCredits: number | null;
    usedCredits: number | null;
    validUntil: Date | null;
    transactionId: string | null;
    status: $Enums.PassStatus | null;
};
export type InterviewPassMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    totalCredits: number | null;
    usedCredits: number | null;
    validUntil: Date | null;
    transactionId: string | null;
    status: $Enums.PassStatus | null;
};
export type InterviewPassCountAggregateOutputType = {
    id: number;
    userId: number;
    totalCredits: number;
    usedCredits: number;
    validUntil: number;
    transactionId: number;
    status: number;
    _all: number;
};
export type InterviewPassAvgAggregateInputType = {
    totalCredits?: true;
    usedCredits?: true;
};
export type InterviewPassSumAggregateInputType = {
    totalCredits?: true;
    usedCredits?: true;
};
export type InterviewPassMinAggregateInputType = {
    id?: true;
    userId?: true;
    totalCredits?: true;
    usedCredits?: true;
    validUntil?: true;
    transactionId?: true;
    status?: true;
};
export type InterviewPassMaxAggregateInputType = {
    id?: true;
    userId?: true;
    totalCredits?: true;
    usedCredits?: true;
    validUntil?: true;
    transactionId?: true;
    status?: true;
};
export type InterviewPassCountAggregateInputType = {
    id?: true;
    userId?: true;
    totalCredits?: true;
    usedCredits?: true;
    validUntil?: true;
    transactionId?: true;
    status?: true;
    _all?: true;
};
export type InterviewPassAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewPass to aggregate.
     */
    where?: Prisma.InterviewPassWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InterviewPasses to fetch.
     */
    orderBy?: Prisma.InterviewPassOrderByWithRelationInput | Prisma.InterviewPassOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.InterviewPassWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InterviewPasses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InterviewPasses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned InterviewPasses
    **/
    _count?: true | InterviewPassCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: InterviewPassAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: InterviewPassSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: InterviewPassMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: InterviewPassMaxAggregateInputType;
};
export type GetInterviewPassAggregateType<T extends InterviewPassAggregateArgs> = {
    [P in keyof T & keyof AggregateInterviewPass]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInterviewPass[P]> : Prisma.GetScalarType<T[P], AggregateInterviewPass[P]>;
};
export type InterviewPassGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewPassWhereInput;
    orderBy?: Prisma.InterviewPassOrderByWithAggregationInput | Prisma.InterviewPassOrderByWithAggregationInput[];
    by: Prisma.InterviewPassScalarFieldEnum[] | Prisma.InterviewPassScalarFieldEnum;
    having?: Prisma.InterviewPassScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InterviewPassCountAggregateInputType | true;
    _avg?: InterviewPassAvgAggregateInputType;
    _sum?: InterviewPassSumAggregateInputType;
    _min?: InterviewPassMinAggregateInputType;
    _max?: InterviewPassMaxAggregateInputType;
};
export type InterviewPassGroupByOutputType = {
    id: string;
    userId: string;
    totalCredits: number;
    usedCredits: number;
    validUntil: Date;
    transactionId: string;
    status: $Enums.PassStatus;
    _count: InterviewPassCountAggregateOutputType | null;
    _avg: InterviewPassAvgAggregateOutputType | null;
    _sum: InterviewPassSumAggregateOutputType | null;
    _min: InterviewPassMinAggregateOutputType | null;
    _max: InterviewPassMaxAggregateOutputType | null;
};
export type GetInterviewPassGroupByPayload<T extends InterviewPassGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InterviewPassGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InterviewPassGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InterviewPassGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InterviewPassGroupByOutputType[P]>;
}>>;
export type InterviewPassWhereInput = {
    AND?: Prisma.InterviewPassWhereInput | Prisma.InterviewPassWhereInput[];
    OR?: Prisma.InterviewPassWhereInput[];
    NOT?: Prisma.InterviewPassWhereInput | Prisma.InterviewPassWhereInput[];
    id?: Prisma.StringFilter<"InterviewPass"> | string;
    userId?: Prisma.StringFilter<"InterviewPass"> | string;
    totalCredits?: Prisma.IntFilter<"InterviewPass"> | number;
    usedCredits?: Prisma.IntFilter<"InterviewPass"> | number;
    validUntil?: Prisma.DateTimeFilter<"InterviewPass"> | Date | string;
    transactionId?: Prisma.StringFilter<"InterviewPass"> | string;
    status?: Prisma.EnumPassStatusFilter<"InterviewPass"> | $Enums.PassStatus;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    bookings?: Prisma.InterviewBookingListRelationFilter;
};
export type InterviewPassOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    totalCredits?: Prisma.SortOrder;
    usedCredits?: Prisma.SortOrder;
    validUntil?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    bookings?: Prisma.InterviewBookingOrderByRelationAggregateInput;
};
export type InterviewPassWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InterviewPassWhereInput | Prisma.InterviewPassWhereInput[];
    OR?: Prisma.InterviewPassWhereInput[];
    NOT?: Prisma.InterviewPassWhereInput | Prisma.InterviewPassWhereInput[];
    userId?: Prisma.StringFilter<"InterviewPass"> | string;
    totalCredits?: Prisma.IntFilter<"InterviewPass"> | number;
    usedCredits?: Prisma.IntFilter<"InterviewPass"> | number;
    validUntil?: Prisma.DateTimeFilter<"InterviewPass"> | Date | string;
    transactionId?: Prisma.StringFilter<"InterviewPass"> | string;
    status?: Prisma.EnumPassStatusFilter<"InterviewPass"> | $Enums.PassStatus;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    bookings?: Prisma.InterviewBookingListRelationFilter;
}, "id">;
export type InterviewPassOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    totalCredits?: Prisma.SortOrder;
    usedCredits?: Prisma.SortOrder;
    validUntil?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.InterviewPassCountOrderByAggregateInput;
    _avg?: Prisma.InterviewPassAvgOrderByAggregateInput;
    _max?: Prisma.InterviewPassMaxOrderByAggregateInput;
    _min?: Prisma.InterviewPassMinOrderByAggregateInput;
    _sum?: Prisma.InterviewPassSumOrderByAggregateInput;
};
export type InterviewPassScalarWhereWithAggregatesInput = {
    AND?: Prisma.InterviewPassScalarWhereWithAggregatesInput | Prisma.InterviewPassScalarWhereWithAggregatesInput[];
    OR?: Prisma.InterviewPassScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InterviewPassScalarWhereWithAggregatesInput | Prisma.InterviewPassScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"InterviewPass"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"InterviewPass"> | string;
    totalCredits?: Prisma.IntWithAggregatesFilter<"InterviewPass"> | number;
    usedCredits?: Prisma.IntWithAggregatesFilter<"InterviewPass"> | number;
    validUntil?: Prisma.DateTimeWithAggregatesFilter<"InterviewPass"> | Date | string;
    transactionId?: Prisma.StringWithAggregatesFilter<"InterviewPass"> | string;
    status?: Prisma.EnumPassStatusWithAggregatesFilter<"InterviewPass"> | $Enums.PassStatus;
};
export type InterviewPassCreateInput = {
    id?: string;
    totalCredits?: number;
    usedCredits?: number;
    validUntil: Date | string;
    transactionId: string;
    status?: $Enums.PassStatus;
    user: Prisma.UserCreateNestedOneWithoutInterviewPassesInput;
    bookings?: Prisma.InterviewBookingCreateNestedManyWithoutPassInput;
};
export type InterviewPassUncheckedCreateInput = {
    id?: string;
    userId: string;
    totalCredits?: number;
    usedCredits?: number;
    validUntil: Date | string;
    transactionId: string;
    status?: $Enums.PassStatus;
    bookings?: Prisma.InterviewBookingUncheckedCreateNestedManyWithoutPassInput;
};
export type InterviewPassUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    usedCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    validUntil?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPassStatusFieldUpdateOperationsInput | $Enums.PassStatus;
    user?: Prisma.UserUpdateOneRequiredWithoutInterviewPassesNestedInput;
    bookings?: Prisma.InterviewBookingUpdateManyWithoutPassNestedInput;
};
export type InterviewPassUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    usedCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    validUntil?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPassStatusFieldUpdateOperationsInput | $Enums.PassStatus;
    bookings?: Prisma.InterviewBookingUncheckedUpdateManyWithoutPassNestedInput;
};
export type InterviewPassCreateManyInput = {
    id?: string;
    userId: string;
    totalCredits?: number;
    usedCredits?: number;
    validUntil: Date | string;
    transactionId: string;
    status?: $Enums.PassStatus;
};
export type InterviewPassUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    usedCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    validUntil?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPassStatusFieldUpdateOperationsInput | $Enums.PassStatus;
};
export type InterviewPassUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    usedCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    validUntil?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPassStatusFieldUpdateOperationsInput | $Enums.PassStatus;
};
export type InterviewPassListRelationFilter = {
    every?: Prisma.InterviewPassWhereInput;
    some?: Prisma.InterviewPassWhereInput;
    none?: Prisma.InterviewPassWhereInput;
};
export type InterviewPassOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InterviewPassCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    totalCredits?: Prisma.SortOrder;
    usedCredits?: Prisma.SortOrder;
    validUntil?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type InterviewPassAvgOrderByAggregateInput = {
    totalCredits?: Prisma.SortOrder;
    usedCredits?: Prisma.SortOrder;
};
export type InterviewPassMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    totalCredits?: Prisma.SortOrder;
    usedCredits?: Prisma.SortOrder;
    validUntil?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type InterviewPassMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    totalCredits?: Prisma.SortOrder;
    usedCredits?: Prisma.SortOrder;
    validUntil?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type InterviewPassSumOrderByAggregateInput = {
    totalCredits?: Prisma.SortOrder;
    usedCredits?: Prisma.SortOrder;
};
export type InterviewPassNullableScalarRelationFilter = {
    is?: Prisma.InterviewPassWhereInput | null;
    isNot?: Prisma.InterviewPassWhereInput | null;
};
export type InterviewPassCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.InterviewPassCreateWithoutUserInput, Prisma.InterviewPassUncheckedCreateWithoutUserInput> | Prisma.InterviewPassCreateWithoutUserInput[] | Prisma.InterviewPassUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.InterviewPassCreateOrConnectWithoutUserInput | Prisma.InterviewPassCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.InterviewPassCreateManyUserInputEnvelope;
    connect?: Prisma.InterviewPassWhereUniqueInput | Prisma.InterviewPassWhereUniqueInput[];
};
export type InterviewPassUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.InterviewPassCreateWithoutUserInput, Prisma.InterviewPassUncheckedCreateWithoutUserInput> | Prisma.InterviewPassCreateWithoutUserInput[] | Prisma.InterviewPassUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.InterviewPassCreateOrConnectWithoutUserInput | Prisma.InterviewPassCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.InterviewPassCreateManyUserInputEnvelope;
    connect?: Prisma.InterviewPassWhereUniqueInput | Prisma.InterviewPassWhereUniqueInput[];
};
export type InterviewPassUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewPassCreateWithoutUserInput, Prisma.InterviewPassUncheckedCreateWithoutUserInput> | Prisma.InterviewPassCreateWithoutUserInput[] | Prisma.InterviewPassUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.InterviewPassCreateOrConnectWithoutUserInput | Prisma.InterviewPassCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.InterviewPassUpsertWithWhereUniqueWithoutUserInput | Prisma.InterviewPassUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.InterviewPassCreateManyUserInputEnvelope;
    set?: Prisma.InterviewPassWhereUniqueInput | Prisma.InterviewPassWhereUniqueInput[];
    disconnect?: Prisma.InterviewPassWhereUniqueInput | Prisma.InterviewPassWhereUniqueInput[];
    delete?: Prisma.InterviewPassWhereUniqueInput | Prisma.InterviewPassWhereUniqueInput[];
    connect?: Prisma.InterviewPassWhereUniqueInput | Prisma.InterviewPassWhereUniqueInput[];
    update?: Prisma.InterviewPassUpdateWithWhereUniqueWithoutUserInput | Prisma.InterviewPassUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.InterviewPassUpdateManyWithWhereWithoutUserInput | Prisma.InterviewPassUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.InterviewPassScalarWhereInput | Prisma.InterviewPassScalarWhereInput[];
};
export type InterviewPassUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewPassCreateWithoutUserInput, Prisma.InterviewPassUncheckedCreateWithoutUserInput> | Prisma.InterviewPassCreateWithoutUserInput[] | Prisma.InterviewPassUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.InterviewPassCreateOrConnectWithoutUserInput | Prisma.InterviewPassCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.InterviewPassUpsertWithWhereUniqueWithoutUserInput | Prisma.InterviewPassUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.InterviewPassCreateManyUserInputEnvelope;
    set?: Prisma.InterviewPassWhereUniqueInput | Prisma.InterviewPassWhereUniqueInput[];
    disconnect?: Prisma.InterviewPassWhereUniqueInput | Prisma.InterviewPassWhereUniqueInput[];
    delete?: Prisma.InterviewPassWhereUniqueInput | Prisma.InterviewPassWhereUniqueInput[];
    connect?: Prisma.InterviewPassWhereUniqueInput | Prisma.InterviewPassWhereUniqueInput[];
    update?: Prisma.InterviewPassUpdateWithWhereUniqueWithoutUserInput | Prisma.InterviewPassUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.InterviewPassUpdateManyWithWhereWithoutUserInput | Prisma.InterviewPassUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.InterviewPassScalarWhereInput | Prisma.InterviewPassScalarWhereInput[];
};
export type EnumPassStatusFieldUpdateOperationsInput = {
    set?: $Enums.PassStatus;
};
export type InterviewPassCreateNestedOneWithoutBookingsInput = {
    create?: Prisma.XOR<Prisma.InterviewPassCreateWithoutBookingsInput, Prisma.InterviewPassUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.InterviewPassCreateOrConnectWithoutBookingsInput;
    connect?: Prisma.InterviewPassWhereUniqueInput;
};
export type InterviewPassUpdateOneWithoutBookingsNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewPassCreateWithoutBookingsInput, Prisma.InterviewPassUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.InterviewPassCreateOrConnectWithoutBookingsInput;
    upsert?: Prisma.InterviewPassUpsertWithoutBookingsInput;
    disconnect?: Prisma.InterviewPassWhereInput | boolean;
    delete?: Prisma.InterviewPassWhereInput | boolean;
    connect?: Prisma.InterviewPassWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InterviewPassUpdateToOneWithWhereWithoutBookingsInput, Prisma.InterviewPassUpdateWithoutBookingsInput>, Prisma.InterviewPassUncheckedUpdateWithoutBookingsInput>;
};
export type InterviewPassCreateWithoutUserInput = {
    id?: string;
    totalCredits?: number;
    usedCredits?: number;
    validUntil: Date | string;
    transactionId: string;
    status?: $Enums.PassStatus;
    bookings?: Prisma.InterviewBookingCreateNestedManyWithoutPassInput;
};
export type InterviewPassUncheckedCreateWithoutUserInput = {
    id?: string;
    totalCredits?: number;
    usedCredits?: number;
    validUntil: Date | string;
    transactionId: string;
    status?: $Enums.PassStatus;
    bookings?: Prisma.InterviewBookingUncheckedCreateNestedManyWithoutPassInput;
};
export type InterviewPassCreateOrConnectWithoutUserInput = {
    where: Prisma.InterviewPassWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewPassCreateWithoutUserInput, Prisma.InterviewPassUncheckedCreateWithoutUserInput>;
};
export type InterviewPassCreateManyUserInputEnvelope = {
    data: Prisma.InterviewPassCreateManyUserInput | Prisma.InterviewPassCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type InterviewPassUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.InterviewPassWhereUniqueInput;
    update: Prisma.XOR<Prisma.InterviewPassUpdateWithoutUserInput, Prisma.InterviewPassUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.InterviewPassCreateWithoutUserInput, Prisma.InterviewPassUncheckedCreateWithoutUserInput>;
};
export type InterviewPassUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.InterviewPassWhereUniqueInput;
    data: Prisma.XOR<Prisma.InterviewPassUpdateWithoutUserInput, Prisma.InterviewPassUncheckedUpdateWithoutUserInput>;
};
export type InterviewPassUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.InterviewPassScalarWhereInput;
    data: Prisma.XOR<Prisma.InterviewPassUpdateManyMutationInput, Prisma.InterviewPassUncheckedUpdateManyWithoutUserInput>;
};
export type InterviewPassScalarWhereInput = {
    AND?: Prisma.InterviewPassScalarWhereInput | Prisma.InterviewPassScalarWhereInput[];
    OR?: Prisma.InterviewPassScalarWhereInput[];
    NOT?: Prisma.InterviewPassScalarWhereInput | Prisma.InterviewPassScalarWhereInput[];
    id?: Prisma.StringFilter<"InterviewPass"> | string;
    userId?: Prisma.StringFilter<"InterviewPass"> | string;
    totalCredits?: Prisma.IntFilter<"InterviewPass"> | number;
    usedCredits?: Prisma.IntFilter<"InterviewPass"> | number;
    validUntil?: Prisma.DateTimeFilter<"InterviewPass"> | Date | string;
    transactionId?: Prisma.StringFilter<"InterviewPass"> | string;
    status?: Prisma.EnumPassStatusFilter<"InterviewPass"> | $Enums.PassStatus;
};
export type InterviewPassCreateWithoutBookingsInput = {
    id?: string;
    totalCredits?: number;
    usedCredits?: number;
    validUntil: Date | string;
    transactionId: string;
    status?: $Enums.PassStatus;
    user: Prisma.UserCreateNestedOneWithoutInterviewPassesInput;
};
export type InterviewPassUncheckedCreateWithoutBookingsInput = {
    id?: string;
    userId: string;
    totalCredits?: number;
    usedCredits?: number;
    validUntil: Date | string;
    transactionId: string;
    status?: $Enums.PassStatus;
};
export type InterviewPassCreateOrConnectWithoutBookingsInput = {
    where: Prisma.InterviewPassWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewPassCreateWithoutBookingsInput, Prisma.InterviewPassUncheckedCreateWithoutBookingsInput>;
};
export type InterviewPassUpsertWithoutBookingsInput = {
    update: Prisma.XOR<Prisma.InterviewPassUpdateWithoutBookingsInput, Prisma.InterviewPassUncheckedUpdateWithoutBookingsInput>;
    create: Prisma.XOR<Prisma.InterviewPassCreateWithoutBookingsInput, Prisma.InterviewPassUncheckedCreateWithoutBookingsInput>;
    where?: Prisma.InterviewPassWhereInput;
};
export type InterviewPassUpdateToOneWithWhereWithoutBookingsInput = {
    where?: Prisma.InterviewPassWhereInput;
    data: Prisma.XOR<Prisma.InterviewPassUpdateWithoutBookingsInput, Prisma.InterviewPassUncheckedUpdateWithoutBookingsInput>;
};
export type InterviewPassUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    usedCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    validUntil?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPassStatusFieldUpdateOperationsInput | $Enums.PassStatus;
    user?: Prisma.UserUpdateOneRequiredWithoutInterviewPassesNestedInput;
};
export type InterviewPassUncheckedUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    usedCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    validUntil?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPassStatusFieldUpdateOperationsInput | $Enums.PassStatus;
};
export type InterviewPassCreateManyUserInput = {
    id?: string;
    totalCredits?: number;
    usedCredits?: number;
    validUntil: Date | string;
    transactionId: string;
    status?: $Enums.PassStatus;
};
export type InterviewPassUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    usedCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    validUntil?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPassStatusFieldUpdateOperationsInput | $Enums.PassStatus;
    bookings?: Prisma.InterviewBookingUpdateManyWithoutPassNestedInput;
};
export type InterviewPassUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    usedCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    validUntil?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPassStatusFieldUpdateOperationsInput | $Enums.PassStatus;
    bookings?: Prisma.InterviewBookingUncheckedUpdateManyWithoutPassNestedInput;
};
export type InterviewPassUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    usedCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    validUntil?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPassStatusFieldUpdateOperationsInput | $Enums.PassStatus;
};
/**
 * Count Type InterviewPassCountOutputType
 */
export type InterviewPassCountOutputType = {
    bookings: number;
};
export type InterviewPassCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | InterviewPassCountOutputTypeCountBookingsArgs;
};
/**
 * InterviewPassCountOutputType without action
 */
export type InterviewPassCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPassCountOutputType
     */
    select?: Prisma.InterviewPassCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * InterviewPassCountOutputType without action
 */
export type InterviewPassCountOutputTypeCountBookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewBookingWhereInput;
};
export type InterviewPassSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    totalCredits?: boolean;
    usedCredits?: boolean;
    validUntil?: boolean;
    transactionId?: boolean;
    status?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    bookings?: boolean | Prisma.InterviewPass$bookingsArgs<ExtArgs>;
    _count?: boolean | Prisma.InterviewPassCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interviewPass"]>;
export type InterviewPassSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    totalCredits?: boolean;
    usedCredits?: boolean;
    validUntil?: boolean;
    transactionId?: boolean;
    status?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interviewPass"]>;
export type InterviewPassSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    totalCredits?: boolean;
    usedCredits?: boolean;
    validUntil?: boolean;
    transactionId?: boolean;
    status?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interviewPass"]>;
export type InterviewPassSelectScalar = {
    id?: boolean;
    userId?: boolean;
    totalCredits?: boolean;
    usedCredits?: boolean;
    validUntil?: boolean;
    transactionId?: boolean;
    status?: boolean;
};
export type InterviewPassOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "totalCredits" | "usedCredits" | "validUntil" | "transactionId" | "status", ExtArgs["result"]["interviewPass"]>;
export type InterviewPassInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    bookings?: boolean | Prisma.InterviewPass$bookingsArgs<ExtArgs>;
    _count?: boolean | Prisma.InterviewPassCountOutputTypeDefaultArgs<ExtArgs>;
};
export type InterviewPassIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type InterviewPassIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $InterviewPassPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InterviewPass";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        bookings: Prisma.$InterviewBookingPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        totalCredits: number;
        usedCredits: number;
        validUntil: Date;
        transactionId: string;
        status: $Enums.PassStatus;
    }, ExtArgs["result"]["interviewPass"]>;
    composites: {};
};
export type InterviewPassGetPayload<S extends boolean | null | undefined | InterviewPassDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InterviewPassPayload, S>;
export type InterviewPassCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InterviewPassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InterviewPassCountAggregateInputType | true;
};
export interface InterviewPassDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InterviewPass'];
        meta: {
            name: 'InterviewPass';
        };
    };
    /**
     * Find zero or one InterviewPass that matches the filter.
     * @param {InterviewPassFindUniqueArgs} args - Arguments to find a InterviewPass
     * @example
     * // Get one InterviewPass
     * const interviewPass = await prisma.interviewPass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewPassFindUniqueArgs>(args: Prisma.SelectSubset<T, InterviewPassFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InterviewPassClient<runtime.Types.Result.GetResult<Prisma.$InterviewPassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one InterviewPass that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterviewPassFindUniqueOrThrowArgs} args - Arguments to find a InterviewPass
     * @example
     * // Get one InterviewPass
     * const interviewPass = await prisma.interviewPass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewPassFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InterviewPassFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterviewPassClient<runtime.Types.Result.GetResult<Prisma.$InterviewPassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first InterviewPass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPassFindFirstArgs} args - Arguments to find a InterviewPass
     * @example
     * // Get one InterviewPass
     * const interviewPass = await prisma.interviewPass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewPassFindFirstArgs>(args?: Prisma.SelectSubset<T, InterviewPassFindFirstArgs<ExtArgs>>): Prisma.Prisma__InterviewPassClient<runtime.Types.Result.GetResult<Prisma.$InterviewPassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first InterviewPass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPassFindFirstOrThrowArgs} args - Arguments to find a InterviewPass
     * @example
     * // Get one InterviewPass
     * const interviewPass = await prisma.interviewPass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewPassFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InterviewPassFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterviewPassClient<runtime.Types.Result.GetResult<Prisma.$InterviewPassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more InterviewPasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterviewPasses
     * const interviewPasses = await prisma.interviewPass.findMany()
     *
     * // Get first 10 InterviewPasses
     * const interviewPasses = await prisma.interviewPass.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const interviewPassWithIdOnly = await prisma.interviewPass.findMany({ select: { id: true } })
     *
     */
    findMany<T extends InterviewPassFindManyArgs>(args?: Prisma.SelectSubset<T, InterviewPassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a InterviewPass.
     * @param {InterviewPassCreateArgs} args - Arguments to create a InterviewPass.
     * @example
     * // Create one InterviewPass
     * const InterviewPass = await prisma.interviewPass.create({
     *   data: {
     *     // ... data to create a InterviewPass
     *   }
     * })
     *
     */
    create<T extends InterviewPassCreateArgs>(args: Prisma.SelectSubset<T, InterviewPassCreateArgs<ExtArgs>>): Prisma.Prisma__InterviewPassClient<runtime.Types.Result.GetResult<Prisma.$InterviewPassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many InterviewPasses.
     * @param {InterviewPassCreateManyArgs} args - Arguments to create many InterviewPasses.
     * @example
     * // Create many InterviewPasses
     * const interviewPass = await prisma.interviewPass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends InterviewPassCreateManyArgs>(args?: Prisma.SelectSubset<T, InterviewPassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many InterviewPasses and returns the data saved in the database.
     * @param {InterviewPassCreateManyAndReturnArgs} args - Arguments to create many InterviewPasses.
     * @example
     * // Create many InterviewPasses
     * const interviewPass = await prisma.interviewPass.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many InterviewPasses and only return the `id`
     * const interviewPassWithIdOnly = await prisma.interviewPass.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends InterviewPassCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InterviewPassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a InterviewPass.
     * @param {InterviewPassDeleteArgs} args - Arguments to delete one InterviewPass.
     * @example
     * // Delete one InterviewPass
     * const InterviewPass = await prisma.interviewPass.delete({
     *   where: {
     *     // ... filter to delete one InterviewPass
     *   }
     * })
     *
     */
    delete<T extends InterviewPassDeleteArgs>(args: Prisma.SelectSubset<T, InterviewPassDeleteArgs<ExtArgs>>): Prisma.Prisma__InterviewPassClient<runtime.Types.Result.GetResult<Prisma.$InterviewPassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one InterviewPass.
     * @param {InterviewPassUpdateArgs} args - Arguments to update one InterviewPass.
     * @example
     * // Update one InterviewPass
     * const interviewPass = await prisma.interviewPass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends InterviewPassUpdateArgs>(args: Prisma.SelectSubset<T, InterviewPassUpdateArgs<ExtArgs>>): Prisma.Prisma__InterviewPassClient<runtime.Types.Result.GetResult<Prisma.$InterviewPassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more InterviewPasses.
     * @param {InterviewPassDeleteManyArgs} args - Arguments to filter InterviewPasses to delete.
     * @example
     * // Delete a few InterviewPasses
     * const { count } = await prisma.interviewPass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends InterviewPassDeleteManyArgs>(args?: Prisma.SelectSubset<T, InterviewPassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more InterviewPasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterviewPasses
     * const interviewPass = await prisma.interviewPass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends InterviewPassUpdateManyArgs>(args: Prisma.SelectSubset<T, InterviewPassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more InterviewPasses and returns the data updated in the database.
     * @param {InterviewPassUpdateManyAndReturnArgs} args - Arguments to update many InterviewPasses.
     * @example
     * // Update many InterviewPasses
     * const interviewPass = await prisma.interviewPass.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more InterviewPasses and only return the `id`
     * const interviewPassWithIdOnly = await prisma.interviewPass.updateManyAndReturn({
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
    updateManyAndReturn<T extends InterviewPassUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InterviewPassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one InterviewPass.
     * @param {InterviewPassUpsertArgs} args - Arguments to update or create a InterviewPass.
     * @example
     * // Update or create a InterviewPass
     * const interviewPass = await prisma.interviewPass.upsert({
     *   create: {
     *     // ... data to create a InterviewPass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterviewPass we want to update
     *   }
     * })
     */
    upsert<T extends InterviewPassUpsertArgs>(args: Prisma.SelectSubset<T, InterviewPassUpsertArgs<ExtArgs>>): Prisma.Prisma__InterviewPassClient<runtime.Types.Result.GetResult<Prisma.$InterviewPassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of InterviewPasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPassCountArgs} args - Arguments to filter InterviewPasses to count.
     * @example
     * // Count the number of InterviewPasses
     * const count = await prisma.interviewPass.count({
     *   where: {
     *     // ... the filter for the InterviewPasses we want to count
     *   }
     * })
    **/
    count<T extends InterviewPassCountArgs>(args?: Prisma.Subset<T, InterviewPassCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InterviewPassCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a InterviewPass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterviewPassAggregateArgs>(args: Prisma.Subset<T, InterviewPassAggregateArgs>): Prisma.PrismaPromise<GetInterviewPassAggregateType<T>>;
    /**
     * Group by InterviewPass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPassGroupByArgs} args - Group by arguments.
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
    groupBy<T extends InterviewPassGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InterviewPassGroupByArgs['orderBy'];
    } : {
        orderBy?: InterviewPassGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InterviewPassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewPassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the InterviewPass model
     */
    readonly fields: InterviewPassFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for InterviewPass.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__InterviewPassClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    bookings<T extends Prisma.InterviewPass$bookingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InterviewPass$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the InterviewPass model
 */
export interface InterviewPassFieldRefs {
    readonly id: Prisma.FieldRef<"InterviewPass", 'String'>;
    readonly userId: Prisma.FieldRef<"InterviewPass", 'String'>;
    readonly totalCredits: Prisma.FieldRef<"InterviewPass", 'Int'>;
    readonly usedCredits: Prisma.FieldRef<"InterviewPass", 'Int'>;
    readonly validUntil: Prisma.FieldRef<"InterviewPass", 'DateTime'>;
    readonly transactionId: Prisma.FieldRef<"InterviewPass", 'String'>;
    readonly status: Prisma.FieldRef<"InterviewPass", 'PassStatus'>;
}
/**
 * InterviewPass findUnique
 */
export type InterviewPassFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPass
     */
    select?: Prisma.InterviewPassSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewPass
     */
    omit?: Prisma.InterviewPassOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewPassInclude<ExtArgs> | null;
    /**
     * Filter, which InterviewPass to fetch.
     */
    where: Prisma.InterviewPassWhereUniqueInput;
};
/**
 * InterviewPass findUniqueOrThrow
 */
export type InterviewPassFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPass
     */
    select?: Prisma.InterviewPassSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewPass
     */
    omit?: Prisma.InterviewPassOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewPassInclude<ExtArgs> | null;
    /**
     * Filter, which InterviewPass to fetch.
     */
    where: Prisma.InterviewPassWhereUniqueInput;
};
/**
 * InterviewPass findFirst
 */
export type InterviewPassFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPass
     */
    select?: Prisma.InterviewPassSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewPass
     */
    omit?: Prisma.InterviewPassOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewPassInclude<ExtArgs> | null;
    /**
     * Filter, which InterviewPass to fetch.
     */
    where?: Prisma.InterviewPassWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InterviewPasses to fetch.
     */
    orderBy?: Prisma.InterviewPassOrderByWithRelationInput | Prisma.InterviewPassOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for InterviewPasses.
     */
    cursor?: Prisma.InterviewPassWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InterviewPasses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InterviewPasses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of InterviewPasses.
     */
    distinct?: Prisma.InterviewPassScalarFieldEnum | Prisma.InterviewPassScalarFieldEnum[];
};
/**
 * InterviewPass findFirstOrThrow
 */
export type InterviewPassFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPass
     */
    select?: Prisma.InterviewPassSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewPass
     */
    omit?: Prisma.InterviewPassOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewPassInclude<ExtArgs> | null;
    /**
     * Filter, which InterviewPass to fetch.
     */
    where?: Prisma.InterviewPassWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InterviewPasses to fetch.
     */
    orderBy?: Prisma.InterviewPassOrderByWithRelationInput | Prisma.InterviewPassOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for InterviewPasses.
     */
    cursor?: Prisma.InterviewPassWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InterviewPasses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InterviewPasses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of InterviewPasses.
     */
    distinct?: Prisma.InterviewPassScalarFieldEnum | Prisma.InterviewPassScalarFieldEnum[];
};
/**
 * InterviewPass findMany
 */
export type InterviewPassFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPass
     */
    select?: Prisma.InterviewPassSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewPass
     */
    omit?: Prisma.InterviewPassOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewPassInclude<ExtArgs> | null;
    /**
     * Filter, which InterviewPasses to fetch.
     */
    where?: Prisma.InterviewPassWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InterviewPasses to fetch.
     */
    orderBy?: Prisma.InterviewPassOrderByWithRelationInput | Prisma.InterviewPassOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing InterviewPasses.
     */
    cursor?: Prisma.InterviewPassWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InterviewPasses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InterviewPasses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of InterviewPasses.
     */
    distinct?: Prisma.InterviewPassScalarFieldEnum | Prisma.InterviewPassScalarFieldEnum[];
};
/**
 * InterviewPass create
 */
export type InterviewPassCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPass
     */
    select?: Prisma.InterviewPassSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewPass
     */
    omit?: Prisma.InterviewPassOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewPassInclude<ExtArgs> | null;
    /**
     * The data needed to create a InterviewPass.
     */
    data: Prisma.XOR<Prisma.InterviewPassCreateInput, Prisma.InterviewPassUncheckedCreateInput>;
};
/**
 * InterviewPass createMany
 */
export type InterviewPassCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterviewPasses.
     */
    data: Prisma.InterviewPassCreateManyInput | Prisma.InterviewPassCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * InterviewPass createManyAndReturn
 */
export type InterviewPassCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPass
     */
    select?: Prisma.InterviewPassSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewPass
     */
    omit?: Prisma.InterviewPassOmit<ExtArgs> | null;
    /**
     * The data used to create many InterviewPasses.
     */
    data: Prisma.InterviewPassCreateManyInput | Prisma.InterviewPassCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewPassIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * InterviewPass update
 */
export type InterviewPassUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPass
     */
    select?: Prisma.InterviewPassSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewPass
     */
    omit?: Prisma.InterviewPassOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewPassInclude<ExtArgs> | null;
    /**
     * The data needed to update a InterviewPass.
     */
    data: Prisma.XOR<Prisma.InterviewPassUpdateInput, Prisma.InterviewPassUncheckedUpdateInput>;
    /**
     * Choose, which InterviewPass to update.
     */
    where: Prisma.InterviewPassWhereUniqueInput;
};
/**
 * InterviewPass updateMany
 */
export type InterviewPassUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update InterviewPasses.
     */
    data: Prisma.XOR<Prisma.InterviewPassUpdateManyMutationInput, Prisma.InterviewPassUncheckedUpdateManyInput>;
    /**
     * Filter which InterviewPasses to update
     */
    where?: Prisma.InterviewPassWhereInput;
    /**
     * Limit how many InterviewPasses to update.
     */
    limit?: number;
};
/**
 * InterviewPass updateManyAndReturn
 */
export type InterviewPassUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPass
     */
    select?: Prisma.InterviewPassSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewPass
     */
    omit?: Prisma.InterviewPassOmit<ExtArgs> | null;
    /**
     * The data used to update InterviewPasses.
     */
    data: Prisma.XOR<Prisma.InterviewPassUpdateManyMutationInput, Prisma.InterviewPassUncheckedUpdateManyInput>;
    /**
     * Filter which InterviewPasses to update
     */
    where?: Prisma.InterviewPassWhereInput;
    /**
     * Limit how many InterviewPasses to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewPassIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * InterviewPass upsert
 */
export type InterviewPassUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPass
     */
    select?: Prisma.InterviewPassSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewPass
     */
    omit?: Prisma.InterviewPassOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewPassInclude<ExtArgs> | null;
    /**
     * The filter to search for the InterviewPass to update in case it exists.
     */
    where: Prisma.InterviewPassWhereUniqueInput;
    /**
     * In case the InterviewPass found by the `where` argument doesn't exist, create a new InterviewPass with this data.
     */
    create: Prisma.XOR<Prisma.InterviewPassCreateInput, Prisma.InterviewPassUncheckedCreateInput>;
    /**
     * In case the InterviewPass was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.InterviewPassUpdateInput, Prisma.InterviewPassUncheckedUpdateInput>;
};
/**
 * InterviewPass delete
 */
export type InterviewPassDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPass
     */
    select?: Prisma.InterviewPassSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewPass
     */
    omit?: Prisma.InterviewPassOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewPassInclude<ExtArgs> | null;
    /**
     * Filter which InterviewPass to delete.
     */
    where: Prisma.InterviewPassWhereUniqueInput;
};
/**
 * InterviewPass deleteMany
 */
export type InterviewPassDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewPasses to delete
     */
    where?: Prisma.InterviewPassWhereInput;
    /**
     * Limit how many InterviewPasses to delete.
     */
    limit?: number;
};
/**
 * InterviewPass.bookings
 */
export type InterviewPass$bookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewBooking
     */
    select?: Prisma.InterviewBookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewBooking
     */
    omit?: Prisma.InterviewBookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewBookingInclude<ExtArgs> | null;
    where?: Prisma.InterviewBookingWhereInput;
    orderBy?: Prisma.InterviewBookingOrderByWithRelationInput | Prisma.InterviewBookingOrderByWithRelationInput[];
    cursor?: Prisma.InterviewBookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InterviewBookingScalarFieldEnum | Prisma.InterviewBookingScalarFieldEnum[];
};
/**
 * InterviewPass without action
 */
export type InterviewPassDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPass
     */
    select?: Prisma.InterviewPassSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewPass
     */
    omit?: Prisma.InterviewPassOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewPassInclude<ExtArgs> | null;
};
//# sourceMappingURL=InterviewPass.d.ts.map