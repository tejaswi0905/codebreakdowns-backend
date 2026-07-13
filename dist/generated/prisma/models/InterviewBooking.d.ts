import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model InterviewBooking
 *
 */
export type InterviewBookingModel = runtime.Types.Result.DefaultSelection<Prisma.$InterviewBookingPayload>;
export type AggregateInterviewBooking = {
    _count: InterviewBookingCountAggregateOutputType | null;
    _min: InterviewBookingMinAggregateOutputType | null;
    _max: InterviewBookingMaxAggregateOutputType | null;
};
export type InterviewBookingMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    slotId: string | null;
    meetingUrl: string | null;
    status: $Enums.BookingStatus | null;
    transactionId: string | null;
    passId: string | null;
};
export type InterviewBookingMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    slotId: string | null;
    meetingUrl: string | null;
    status: $Enums.BookingStatus | null;
    transactionId: string | null;
    passId: string | null;
};
export type InterviewBookingCountAggregateOutputType = {
    id: number;
    userId: number;
    slotId: number;
    meetingUrl: number;
    status: number;
    transactionId: number;
    passId: number;
    _all: number;
};
export type InterviewBookingMinAggregateInputType = {
    id?: true;
    userId?: true;
    slotId?: true;
    meetingUrl?: true;
    status?: true;
    transactionId?: true;
    passId?: true;
};
export type InterviewBookingMaxAggregateInputType = {
    id?: true;
    userId?: true;
    slotId?: true;
    meetingUrl?: true;
    status?: true;
    transactionId?: true;
    passId?: true;
};
export type InterviewBookingCountAggregateInputType = {
    id?: true;
    userId?: true;
    slotId?: true;
    meetingUrl?: true;
    status?: true;
    transactionId?: true;
    passId?: true;
    _all?: true;
};
export type InterviewBookingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewBooking to aggregate.
     */
    where?: Prisma.InterviewBookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InterviewBookings to fetch.
     */
    orderBy?: Prisma.InterviewBookingOrderByWithRelationInput | Prisma.InterviewBookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.InterviewBookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InterviewBookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InterviewBookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned InterviewBookings
    **/
    _count?: true | InterviewBookingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: InterviewBookingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: InterviewBookingMaxAggregateInputType;
};
export type GetInterviewBookingAggregateType<T extends InterviewBookingAggregateArgs> = {
    [P in keyof T & keyof AggregateInterviewBooking]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInterviewBooking[P]> : Prisma.GetScalarType<T[P], AggregateInterviewBooking[P]>;
};
export type InterviewBookingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewBookingWhereInput;
    orderBy?: Prisma.InterviewBookingOrderByWithAggregationInput | Prisma.InterviewBookingOrderByWithAggregationInput[];
    by: Prisma.InterviewBookingScalarFieldEnum[] | Prisma.InterviewBookingScalarFieldEnum;
    having?: Prisma.InterviewBookingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InterviewBookingCountAggregateInputType | true;
    _min?: InterviewBookingMinAggregateInputType;
    _max?: InterviewBookingMaxAggregateInputType;
};
export type InterviewBookingGroupByOutputType = {
    id: string;
    userId: string;
    slotId: string;
    meetingUrl: string | null;
    status: $Enums.BookingStatus;
    transactionId: string | null;
    passId: string | null;
    _count: InterviewBookingCountAggregateOutputType | null;
    _min: InterviewBookingMinAggregateOutputType | null;
    _max: InterviewBookingMaxAggregateOutputType | null;
};
export type GetInterviewBookingGroupByPayload<T extends InterviewBookingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InterviewBookingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InterviewBookingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InterviewBookingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InterviewBookingGroupByOutputType[P]>;
}>>;
export type InterviewBookingWhereInput = {
    AND?: Prisma.InterviewBookingWhereInput | Prisma.InterviewBookingWhereInput[];
    OR?: Prisma.InterviewBookingWhereInput[];
    NOT?: Prisma.InterviewBookingWhereInput | Prisma.InterviewBookingWhereInput[];
    id?: Prisma.StringFilter<"InterviewBooking"> | string;
    userId?: Prisma.StringFilter<"InterviewBooking"> | string;
    slotId?: Prisma.StringFilter<"InterviewBooking"> | string;
    meetingUrl?: Prisma.StringNullableFilter<"InterviewBooking"> | string | null;
    status?: Prisma.EnumBookingStatusFilter<"InterviewBooking"> | $Enums.BookingStatus;
    transactionId?: Prisma.StringNullableFilter<"InterviewBooking"> | string | null;
    passId?: Prisma.StringNullableFilter<"InterviewBooking"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    slot?: Prisma.XOR<Prisma.InterviewSlotScalarRelationFilter, Prisma.InterviewSlotWhereInput>;
    pass?: Prisma.XOR<Prisma.InterviewPassNullableScalarRelationFilter, Prisma.InterviewPassWhereInput> | null;
};
export type InterviewBookingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    slotId?: Prisma.SortOrder;
    meetingUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    passId?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    slot?: Prisma.InterviewSlotOrderByWithRelationInput;
    pass?: Prisma.InterviewPassOrderByWithRelationInput;
};
export type InterviewBookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InterviewBookingWhereInput | Prisma.InterviewBookingWhereInput[];
    OR?: Prisma.InterviewBookingWhereInput[];
    NOT?: Prisma.InterviewBookingWhereInput | Prisma.InterviewBookingWhereInput[];
    userId?: Prisma.StringFilter<"InterviewBooking"> | string;
    slotId?: Prisma.StringFilter<"InterviewBooking"> | string;
    meetingUrl?: Prisma.StringNullableFilter<"InterviewBooking"> | string | null;
    status?: Prisma.EnumBookingStatusFilter<"InterviewBooking"> | $Enums.BookingStatus;
    transactionId?: Prisma.StringNullableFilter<"InterviewBooking"> | string | null;
    passId?: Prisma.StringNullableFilter<"InterviewBooking"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    slot?: Prisma.XOR<Prisma.InterviewSlotScalarRelationFilter, Prisma.InterviewSlotWhereInput>;
    pass?: Prisma.XOR<Prisma.InterviewPassNullableScalarRelationFilter, Prisma.InterviewPassWhereInput> | null;
}, "id">;
export type InterviewBookingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    slotId?: Prisma.SortOrder;
    meetingUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    passId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.InterviewBookingCountOrderByAggregateInput;
    _max?: Prisma.InterviewBookingMaxOrderByAggregateInput;
    _min?: Prisma.InterviewBookingMinOrderByAggregateInput;
};
export type InterviewBookingScalarWhereWithAggregatesInput = {
    AND?: Prisma.InterviewBookingScalarWhereWithAggregatesInput | Prisma.InterviewBookingScalarWhereWithAggregatesInput[];
    OR?: Prisma.InterviewBookingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InterviewBookingScalarWhereWithAggregatesInput | Prisma.InterviewBookingScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"InterviewBooking"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"InterviewBooking"> | string;
    slotId?: Prisma.StringWithAggregatesFilter<"InterviewBooking"> | string;
    meetingUrl?: Prisma.StringNullableWithAggregatesFilter<"InterviewBooking"> | string | null;
    status?: Prisma.EnumBookingStatusWithAggregatesFilter<"InterviewBooking"> | $Enums.BookingStatus;
    transactionId?: Prisma.StringNullableWithAggregatesFilter<"InterviewBooking"> | string | null;
    passId?: Prisma.StringNullableWithAggregatesFilter<"InterviewBooking"> | string | null;
};
export type InterviewBookingCreateInput = {
    id?: string;
    meetingUrl?: string | null;
    status?: $Enums.BookingStatus;
    transactionId?: string | null;
    user: Prisma.UserCreateNestedOneWithoutInterviewBookingsInput;
    slot: Prisma.InterviewSlotCreateNestedOneWithoutBookingsInput;
    pass?: Prisma.InterviewPassCreateNestedOneWithoutBookingsInput;
};
export type InterviewBookingUncheckedCreateInput = {
    id?: string;
    userId: string;
    slotId: string;
    meetingUrl?: string | null;
    status?: $Enums.BookingStatus;
    transactionId?: string | null;
    passId?: string | null;
};
export type InterviewBookingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutInterviewBookingsNestedInput;
    slot?: Prisma.InterviewSlotUpdateOneRequiredWithoutBookingsNestedInput;
    pass?: Prisma.InterviewPassUpdateOneWithoutBookingsNestedInput;
};
export type InterviewBookingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    slotId?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InterviewBookingCreateManyInput = {
    id?: string;
    userId: string;
    slotId: string;
    meetingUrl?: string | null;
    status?: $Enums.BookingStatus;
    transactionId?: string | null;
    passId?: string | null;
};
export type InterviewBookingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InterviewBookingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    slotId?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InterviewBookingListRelationFilter = {
    every?: Prisma.InterviewBookingWhereInput;
    some?: Prisma.InterviewBookingWhereInput;
    none?: Prisma.InterviewBookingWhereInput;
};
export type InterviewBookingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InterviewBookingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    slotId?: Prisma.SortOrder;
    meetingUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    passId?: Prisma.SortOrder;
};
export type InterviewBookingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    slotId?: Prisma.SortOrder;
    meetingUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    passId?: Prisma.SortOrder;
};
export type InterviewBookingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    slotId?: Prisma.SortOrder;
    meetingUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    passId?: Prisma.SortOrder;
};
export type InterviewBookingCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.InterviewBookingCreateWithoutUserInput, Prisma.InterviewBookingUncheckedCreateWithoutUserInput> | Prisma.InterviewBookingCreateWithoutUserInput[] | Prisma.InterviewBookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.InterviewBookingCreateOrConnectWithoutUserInput | Prisma.InterviewBookingCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.InterviewBookingCreateManyUserInputEnvelope;
    connect?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
};
export type InterviewBookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.InterviewBookingCreateWithoutUserInput, Prisma.InterviewBookingUncheckedCreateWithoutUserInput> | Prisma.InterviewBookingCreateWithoutUserInput[] | Prisma.InterviewBookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.InterviewBookingCreateOrConnectWithoutUserInput | Prisma.InterviewBookingCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.InterviewBookingCreateManyUserInputEnvelope;
    connect?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
};
export type InterviewBookingUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewBookingCreateWithoutUserInput, Prisma.InterviewBookingUncheckedCreateWithoutUserInput> | Prisma.InterviewBookingCreateWithoutUserInput[] | Prisma.InterviewBookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.InterviewBookingCreateOrConnectWithoutUserInput | Prisma.InterviewBookingCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.InterviewBookingUpsertWithWhereUniqueWithoutUserInput | Prisma.InterviewBookingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.InterviewBookingCreateManyUserInputEnvelope;
    set?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    disconnect?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    delete?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    connect?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    update?: Prisma.InterviewBookingUpdateWithWhereUniqueWithoutUserInput | Prisma.InterviewBookingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.InterviewBookingUpdateManyWithWhereWithoutUserInput | Prisma.InterviewBookingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.InterviewBookingScalarWhereInput | Prisma.InterviewBookingScalarWhereInput[];
};
export type InterviewBookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewBookingCreateWithoutUserInput, Prisma.InterviewBookingUncheckedCreateWithoutUserInput> | Prisma.InterviewBookingCreateWithoutUserInput[] | Prisma.InterviewBookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.InterviewBookingCreateOrConnectWithoutUserInput | Prisma.InterviewBookingCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.InterviewBookingUpsertWithWhereUniqueWithoutUserInput | Prisma.InterviewBookingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.InterviewBookingCreateManyUserInputEnvelope;
    set?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    disconnect?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    delete?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    connect?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    update?: Prisma.InterviewBookingUpdateWithWhereUniqueWithoutUserInput | Prisma.InterviewBookingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.InterviewBookingUpdateManyWithWhereWithoutUserInput | Prisma.InterviewBookingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.InterviewBookingScalarWhereInput | Prisma.InterviewBookingScalarWhereInput[];
};
export type InterviewBookingCreateNestedManyWithoutSlotInput = {
    create?: Prisma.XOR<Prisma.InterviewBookingCreateWithoutSlotInput, Prisma.InterviewBookingUncheckedCreateWithoutSlotInput> | Prisma.InterviewBookingCreateWithoutSlotInput[] | Prisma.InterviewBookingUncheckedCreateWithoutSlotInput[];
    connectOrCreate?: Prisma.InterviewBookingCreateOrConnectWithoutSlotInput | Prisma.InterviewBookingCreateOrConnectWithoutSlotInput[];
    createMany?: Prisma.InterviewBookingCreateManySlotInputEnvelope;
    connect?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
};
export type InterviewBookingUncheckedCreateNestedManyWithoutSlotInput = {
    create?: Prisma.XOR<Prisma.InterviewBookingCreateWithoutSlotInput, Prisma.InterviewBookingUncheckedCreateWithoutSlotInput> | Prisma.InterviewBookingCreateWithoutSlotInput[] | Prisma.InterviewBookingUncheckedCreateWithoutSlotInput[];
    connectOrCreate?: Prisma.InterviewBookingCreateOrConnectWithoutSlotInput | Prisma.InterviewBookingCreateOrConnectWithoutSlotInput[];
    createMany?: Prisma.InterviewBookingCreateManySlotInputEnvelope;
    connect?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
};
export type InterviewBookingUpdateManyWithoutSlotNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewBookingCreateWithoutSlotInput, Prisma.InterviewBookingUncheckedCreateWithoutSlotInput> | Prisma.InterviewBookingCreateWithoutSlotInput[] | Prisma.InterviewBookingUncheckedCreateWithoutSlotInput[];
    connectOrCreate?: Prisma.InterviewBookingCreateOrConnectWithoutSlotInput | Prisma.InterviewBookingCreateOrConnectWithoutSlotInput[];
    upsert?: Prisma.InterviewBookingUpsertWithWhereUniqueWithoutSlotInput | Prisma.InterviewBookingUpsertWithWhereUniqueWithoutSlotInput[];
    createMany?: Prisma.InterviewBookingCreateManySlotInputEnvelope;
    set?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    disconnect?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    delete?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    connect?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    update?: Prisma.InterviewBookingUpdateWithWhereUniqueWithoutSlotInput | Prisma.InterviewBookingUpdateWithWhereUniqueWithoutSlotInput[];
    updateMany?: Prisma.InterviewBookingUpdateManyWithWhereWithoutSlotInput | Prisma.InterviewBookingUpdateManyWithWhereWithoutSlotInput[];
    deleteMany?: Prisma.InterviewBookingScalarWhereInput | Prisma.InterviewBookingScalarWhereInput[];
};
export type InterviewBookingUncheckedUpdateManyWithoutSlotNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewBookingCreateWithoutSlotInput, Prisma.InterviewBookingUncheckedCreateWithoutSlotInput> | Prisma.InterviewBookingCreateWithoutSlotInput[] | Prisma.InterviewBookingUncheckedCreateWithoutSlotInput[];
    connectOrCreate?: Prisma.InterviewBookingCreateOrConnectWithoutSlotInput | Prisma.InterviewBookingCreateOrConnectWithoutSlotInput[];
    upsert?: Prisma.InterviewBookingUpsertWithWhereUniqueWithoutSlotInput | Prisma.InterviewBookingUpsertWithWhereUniqueWithoutSlotInput[];
    createMany?: Prisma.InterviewBookingCreateManySlotInputEnvelope;
    set?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    disconnect?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    delete?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    connect?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    update?: Prisma.InterviewBookingUpdateWithWhereUniqueWithoutSlotInput | Prisma.InterviewBookingUpdateWithWhereUniqueWithoutSlotInput[];
    updateMany?: Prisma.InterviewBookingUpdateManyWithWhereWithoutSlotInput | Prisma.InterviewBookingUpdateManyWithWhereWithoutSlotInput[];
    deleteMany?: Prisma.InterviewBookingScalarWhereInput | Prisma.InterviewBookingScalarWhereInput[];
};
export type InterviewBookingCreateNestedManyWithoutPassInput = {
    create?: Prisma.XOR<Prisma.InterviewBookingCreateWithoutPassInput, Prisma.InterviewBookingUncheckedCreateWithoutPassInput> | Prisma.InterviewBookingCreateWithoutPassInput[] | Prisma.InterviewBookingUncheckedCreateWithoutPassInput[];
    connectOrCreate?: Prisma.InterviewBookingCreateOrConnectWithoutPassInput | Prisma.InterviewBookingCreateOrConnectWithoutPassInput[];
    createMany?: Prisma.InterviewBookingCreateManyPassInputEnvelope;
    connect?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
};
export type InterviewBookingUncheckedCreateNestedManyWithoutPassInput = {
    create?: Prisma.XOR<Prisma.InterviewBookingCreateWithoutPassInput, Prisma.InterviewBookingUncheckedCreateWithoutPassInput> | Prisma.InterviewBookingCreateWithoutPassInput[] | Prisma.InterviewBookingUncheckedCreateWithoutPassInput[];
    connectOrCreate?: Prisma.InterviewBookingCreateOrConnectWithoutPassInput | Prisma.InterviewBookingCreateOrConnectWithoutPassInput[];
    createMany?: Prisma.InterviewBookingCreateManyPassInputEnvelope;
    connect?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
};
export type InterviewBookingUpdateManyWithoutPassNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewBookingCreateWithoutPassInput, Prisma.InterviewBookingUncheckedCreateWithoutPassInput> | Prisma.InterviewBookingCreateWithoutPassInput[] | Prisma.InterviewBookingUncheckedCreateWithoutPassInput[];
    connectOrCreate?: Prisma.InterviewBookingCreateOrConnectWithoutPassInput | Prisma.InterviewBookingCreateOrConnectWithoutPassInput[];
    upsert?: Prisma.InterviewBookingUpsertWithWhereUniqueWithoutPassInput | Prisma.InterviewBookingUpsertWithWhereUniqueWithoutPassInput[];
    createMany?: Prisma.InterviewBookingCreateManyPassInputEnvelope;
    set?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    disconnect?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    delete?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    connect?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    update?: Prisma.InterviewBookingUpdateWithWhereUniqueWithoutPassInput | Prisma.InterviewBookingUpdateWithWhereUniqueWithoutPassInput[];
    updateMany?: Prisma.InterviewBookingUpdateManyWithWhereWithoutPassInput | Prisma.InterviewBookingUpdateManyWithWhereWithoutPassInput[];
    deleteMany?: Prisma.InterviewBookingScalarWhereInput | Prisma.InterviewBookingScalarWhereInput[];
};
export type InterviewBookingUncheckedUpdateManyWithoutPassNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewBookingCreateWithoutPassInput, Prisma.InterviewBookingUncheckedCreateWithoutPassInput> | Prisma.InterviewBookingCreateWithoutPassInput[] | Prisma.InterviewBookingUncheckedCreateWithoutPassInput[];
    connectOrCreate?: Prisma.InterviewBookingCreateOrConnectWithoutPassInput | Prisma.InterviewBookingCreateOrConnectWithoutPassInput[];
    upsert?: Prisma.InterviewBookingUpsertWithWhereUniqueWithoutPassInput | Prisma.InterviewBookingUpsertWithWhereUniqueWithoutPassInput[];
    createMany?: Prisma.InterviewBookingCreateManyPassInputEnvelope;
    set?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    disconnect?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    delete?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    connect?: Prisma.InterviewBookingWhereUniqueInput | Prisma.InterviewBookingWhereUniqueInput[];
    update?: Prisma.InterviewBookingUpdateWithWhereUniqueWithoutPassInput | Prisma.InterviewBookingUpdateWithWhereUniqueWithoutPassInput[];
    updateMany?: Prisma.InterviewBookingUpdateManyWithWhereWithoutPassInput | Prisma.InterviewBookingUpdateManyWithWhereWithoutPassInput[];
    deleteMany?: Prisma.InterviewBookingScalarWhereInput | Prisma.InterviewBookingScalarWhereInput[];
};
export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus;
};
export type InterviewBookingCreateWithoutUserInput = {
    id?: string;
    meetingUrl?: string | null;
    status?: $Enums.BookingStatus;
    transactionId?: string | null;
    slot: Prisma.InterviewSlotCreateNestedOneWithoutBookingsInput;
    pass?: Prisma.InterviewPassCreateNestedOneWithoutBookingsInput;
};
export type InterviewBookingUncheckedCreateWithoutUserInput = {
    id?: string;
    slotId: string;
    meetingUrl?: string | null;
    status?: $Enums.BookingStatus;
    transactionId?: string | null;
    passId?: string | null;
};
export type InterviewBookingCreateOrConnectWithoutUserInput = {
    where: Prisma.InterviewBookingWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewBookingCreateWithoutUserInput, Prisma.InterviewBookingUncheckedCreateWithoutUserInput>;
};
export type InterviewBookingCreateManyUserInputEnvelope = {
    data: Prisma.InterviewBookingCreateManyUserInput | Prisma.InterviewBookingCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type InterviewBookingUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.InterviewBookingWhereUniqueInput;
    update: Prisma.XOR<Prisma.InterviewBookingUpdateWithoutUserInput, Prisma.InterviewBookingUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.InterviewBookingCreateWithoutUserInput, Prisma.InterviewBookingUncheckedCreateWithoutUserInput>;
};
export type InterviewBookingUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.InterviewBookingWhereUniqueInput;
    data: Prisma.XOR<Prisma.InterviewBookingUpdateWithoutUserInput, Prisma.InterviewBookingUncheckedUpdateWithoutUserInput>;
};
export type InterviewBookingUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.InterviewBookingScalarWhereInput;
    data: Prisma.XOR<Prisma.InterviewBookingUpdateManyMutationInput, Prisma.InterviewBookingUncheckedUpdateManyWithoutUserInput>;
};
export type InterviewBookingScalarWhereInput = {
    AND?: Prisma.InterviewBookingScalarWhereInput | Prisma.InterviewBookingScalarWhereInput[];
    OR?: Prisma.InterviewBookingScalarWhereInput[];
    NOT?: Prisma.InterviewBookingScalarWhereInput | Prisma.InterviewBookingScalarWhereInput[];
    id?: Prisma.StringFilter<"InterviewBooking"> | string;
    userId?: Prisma.StringFilter<"InterviewBooking"> | string;
    slotId?: Prisma.StringFilter<"InterviewBooking"> | string;
    meetingUrl?: Prisma.StringNullableFilter<"InterviewBooking"> | string | null;
    status?: Prisma.EnumBookingStatusFilter<"InterviewBooking"> | $Enums.BookingStatus;
    transactionId?: Prisma.StringNullableFilter<"InterviewBooking"> | string | null;
    passId?: Prisma.StringNullableFilter<"InterviewBooking"> | string | null;
};
export type InterviewBookingCreateWithoutSlotInput = {
    id?: string;
    meetingUrl?: string | null;
    status?: $Enums.BookingStatus;
    transactionId?: string | null;
    user: Prisma.UserCreateNestedOneWithoutInterviewBookingsInput;
    pass?: Prisma.InterviewPassCreateNestedOneWithoutBookingsInput;
};
export type InterviewBookingUncheckedCreateWithoutSlotInput = {
    id?: string;
    userId: string;
    meetingUrl?: string | null;
    status?: $Enums.BookingStatus;
    transactionId?: string | null;
    passId?: string | null;
};
export type InterviewBookingCreateOrConnectWithoutSlotInput = {
    where: Prisma.InterviewBookingWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewBookingCreateWithoutSlotInput, Prisma.InterviewBookingUncheckedCreateWithoutSlotInput>;
};
export type InterviewBookingCreateManySlotInputEnvelope = {
    data: Prisma.InterviewBookingCreateManySlotInput | Prisma.InterviewBookingCreateManySlotInput[];
    skipDuplicates?: boolean;
};
export type InterviewBookingUpsertWithWhereUniqueWithoutSlotInput = {
    where: Prisma.InterviewBookingWhereUniqueInput;
    update: Prisma.XOR<Prisma.InterviewBookingUpdateWithoutSlotInput, Prisma.InterviewBookingUncheckedUpdateWithoutSlotInput>;
    create: Prisma.XOR<Prisma.InterviewBookingCreateWithoutSlotInput, Prisma.InterviewBookingUncheckedCreateWithoutSlotInput>;
};
export type InterviewBookingUpdateWithWhereUniqueWithoutSlotInput = {
    where: Prisma.InterviewBookingWhereUniqueInput;
    data: Prisma.XOR<Prisma.InterviewBookingUpdateWithoutSlotInput, Prisma.InterviewBookingUncheckedUpdateWithoutSlotInput>;
};
export type InterviewBookingUpdateManyWithWhereWithoutSlotInput = {
    where: Prisma.InterviewBookingScalarWhereInput;
    data: Prisma.XOR<Prisma.InterviewBookingUpdateManyMutationInput, Prisma.InterviewBookingUncheckedUpdateManyWithoutSlotInput>;
};
export type InterviewBookingCreateWithoutPassInput = {
    id?: string;
    meetingUrl?: string | null;
    status?: $Enums.BookingStatus;
    transactionId?: string | null;
    user: Prisma.UserCreateNestedOneWithoutInterviewBookingsInput;
    slot: Prisma.InterviewSlotCreateNestedOneWithoutBookingsInput;
};
export type InterviewBookingUncheckedCreateWithoutPassInput = {
    id?: string;
    userId: string;
    slotId: string;
    meetingUrl?: string | null;
    status?: $Enums.BookingStatus;
    transactionId?: string | null;
};
export type InterviewBookingCreateOrConnectWithoutPassInput = {
    where: Prisma.InterviewBookingWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewBookingCreateWithoutPassInput, Prisma.InterviewBookingUncheckedCreateWithoutPassInput>;
};
export type InterviewBookingCreateManyPassInputEnvelope = {
    data: Prisma.InterviewBookingCreateManyPassInput | Prisma.InterviewBookingCreateManyPassInput[];
    skipDuplicates?: boolean;
};
export type InterviewBookingUpsertWithWhereUniqueWithoutPassInput = {
    where: Prisma.InterviewBookingWhereUniqueInput;
    update: Prisma.XOR<Prisma.InterviewBookingUpdateWithoutPassInput, Prisma.InterviewBookingUncheckedUpdateWithoutPassInput>;
    create: Prisma.XOR<Prisma.InterviewBookingCreateWithoutPassInput, Prisma.InterviewBookingUncheckedCreateWithoutPassInput>;
};
export type InterviewBookingUpdateWithWhereUniqueWithoutPassInput = {
    where: Prisma.InterviewBookingWhereUniqueInput;
    data: Prisma.XOR<Prisma.InterviewBookingUpdateWithoutPassInput, Prisma.InterviewBookingUncheckedUpdateWithoutPassInput>;
};
export type InterviewBookingUpdateManyWithWhereWithoutPassInput = {
    where: Prisma.InterviewBookingScalarWhereInput;
    data: Prisma.XOR<Prisma.InterviewBookingUpdateManyMutationInput, Prisma.InterviewBookingUncheckedUpdateManyWithoutPassInput>;
};
export type InterviewBookingCreateManyUserInput = {
    id?: string;
    slotId: string;
    meetingUrl?: string | null;
    status?: $Enums.BookingStatus;
    transactionId?: string | null;
    passId?: string | null;
};
export type InterviewBookingUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    slot?: Prisma.InterviewSlotUpdateOneRequiredWithoutBookingsNestedInput;
    pass?: Prisma.InterviewPassUpdateOneWithoutBookingsNestedInput;
};
export type InterviewBookingUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slotId?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InterviewBookingUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slotId?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InterviewBookingCreateManySlotInput = {
    id?: string;
    userId: string;
    meetingUrl?: string | null;
    status?: $Enums.BookingStatus;
    transactionId?: string | null;
    passId?: string | null;
};
export type InterviewBookingUpdateWithoutSlotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutInterviewBookingsNestedInput;
    pass?: Prisma.InterviewPassUpdateOneWithoutBookingsNestedInput;
};
export type InterviewBookingUncheckedUpdateWithoutSlotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InterviewBookingUncheckedUpdateManyWithoutSlotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InterviewBookingCreateManyPassInput = {
    id?: string;
    userId: string;
    slotId: string;
    meetingUrl?: string | null;
    status?: $Enums.BookingStatus;
    transactionId?: string | null;
};
export type InterviewBookingUpdateWithoutPassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutInterviewBookingsNestedInput;
    slot?: Prisma.InterviewSlotUpdateOneRequiredWithoutBookingsNestedInput;
};
export type InterviewBookingUncheckedUpdateWithoutPassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    slotId?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InterviewBookingUncheckedUpdateManyWithoutPassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    slotId?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InterviewBookingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    slotId?: boolean;
    meetingUrl?: boolean;
    status?: boolean;
    transactionId?: boolean;
    passId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    slot?: boolean | Prisma.InterviewSlotDefaultArgs<ExtArgs>;
    pass?: boolean | Prisma.InterviewBooking$passArgs<ExtArgs>;
}, ExtArgs["result"]["interviewBooking"]>;
export type InterviewBookingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    slotId?: boolean;
    meetingUrl?: boolean;
    status?: boolean;
    transactionId?: boolean;
    passId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    slot?: boolean | Prisma.InterviewSlotDefaultArgs<ExtArgs>;
    pass?: boolean | Prisma.InterviewBooking$passArgs<ExtArgs>;
}, ExtArgs["result"]["interviewBooking"]>;
export type InterviewBookingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    slotId?: boolean;
    meetingUrl?: boolean;
    status?: boolean;
    transactionId?: boolean;
    passId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    slot?: boolean | Prisma.InterviewSlotDefaultArgs<ExtArgs>;
    pass?: boolean | Prisma.InterviewBooking$passArgs<ExtArgs>;
}, ExtArgs["result"]["interviewBooking"]>;
export type InterviewBookingSelectScalar = {
    id?: boolean;
    userId?: boolean;
    slotId?: boolean;
    meetingUrl?: boolean;
    status?: boolean;
    transactionId?: boolean;
    passId?: boolean;
};
export type InterviewBookingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "slotId" | "meetingUrl" | "status" | "transactionId" | "passId", ExtArgs["result"]["interviewBooking"]>;
export type InterviewBookingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    slot?: boolean | Prisma.InterviewSlotDefaultArgs<ExtArgs>;
    pass?: boolean | Prisma.InterviewBooking$passArgs<ExtArgs>;
};
export type InterviewBookingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    slot?: boolean | Prisma.InterviewSlotDefaultArgs<ExtArgs>;
    pass?: boolean | Prisma.InterviewBooking$passArgs<ExtArgs>;
};
export type InterviewBookingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    slot?: boolean | Prisma.InterviewSlotDefaultArgs<ExtArgs>;
    pass?: boolean | Prisma.InterviewBooking$passArgs<ExtArgs>;
};
export type $InterviewBookingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InterviewBooking";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        slot: Prisma.$InterviewSlotPayload<ExtArgs>;
        pass: Prisma.$InterviewPassPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        slotId: string;
        meetingUrl: string | null;
        status: $Enums.BookingStatus;
        transactionId: string | null;
        passId: string | null;
    }, ExtArgs["result"]["interviewBooking"]>;
    composites: {};
};
export type InterviewBookingGetPayload<S extends boolean | null | undefined | InterviewBookingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InterviewBookingPayload, S>;
export type InterviewBookingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InterviewBookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InterviewBookingCountAggregateInputType | true;
};
export interface InterviewBookingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InterviewBooking'];
        meta: {
            name: 'InterviewBooking';
        };
    };
    /**
     * Find zero or one InterviewBooking that matches the filter.
     * @param {InterviewBookingFindUniqueArgs} args - Arguments to find a InterviewBooking
     * @example
     * // Get one InterviewBooking
     * const interviewBooking = await prisma.interviewBooking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewBookingFindUniqueArgs>(args: Prisma.SelectSubset<T, InterviewBookingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InterviewBookingClient<runtime.Types.Result.GetResult<Prisma.$InterviewBookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one InterviewBooking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterviewBookingFindUniqueOrThrowArgs} args - Arguments to find a InterviewBooking
     * @example
     * // Get one InterviewBooking
     * const interviewBooking = await prisma.interviewBooking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewBookingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InterviewBookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterviewBookingClient<runtime.Types.Result.GetResult<Prisma.$InterviewBookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first InterviewBooking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewBookingFindFirstArgs} args - Arguments to find a InterviewBooking
     * @example
     * // Get one InterviewBooking
     * const interviewBooking = await prisma.interviewBooking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewBookingFindFirstArgs>(args?: Prisma.SelectSubset<T, InterviewBookingFindFirstArgs<ExtArgs>>): Prisma.Prisma__InterviewBookingClient<runtime.Types.Result.GetResult<Prisma.$InterviewBookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first InterviewBooking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewBookingFindFirstOrThrowArgs} args - Arguments to find a InterviewBooking
     * @example
     * // Get one InterviewBooking
     * const interviewBooking = await prisma.interviewBooking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewBookingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InterviewBookingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterviewBookingClient<runtime.Types.Result.GetResult<Prisma.$InterviewBookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more InterviewBookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewBookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterviewBookings
     * const interviewBookings = await prisma.interviewBooking.findMany()
     *
     * // Get first 10 InterviewBookings
     * const interviewBookings = await prisma.interviewBooking.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const interviewBookingWithIdOnly = await prisma.interviewBooking.findMany({ select: { id: true } })
     *
     */
    findMany<T extends InterviewBookingFindManyArgs>(args?: Prisma.SelectSubset<T, InterviewBookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a InterviewBooking.
     * @param {InterviewBookingCreateArgs} args - Arguments to create a InterviewBooking.
     * @example
     * // Create one InterviewBooking
     * const InterviewBooking = await prisma.interviewBooking.create({
     *   data: {
     *     // ... data to create a InterviewBooking
     *   }
     * })
     *
     */
    create<T extends InterviewBookingCreateArgs>(args: Prisma.SelectSubset<T, InterviewBookingCreateArgs<ExtArgs>>): Prisma.Prisma__InterviewBookingClient<runtime.Types.Result.GetResult<Prisma.$InterviewBookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many InterviewBookings.
     * @param {InterviewBookingCreateManyArgs} args - Arguments to create many InterviewBookings.
     * @example
     * // Create many InterviewBookings
     * const interviewBooking = await prisma.interviewBooking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends InterviewBookingCreateManyArgs>(args?: Prisma.SelectSubset<T, InterviewBookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many InterviewBookings and returns the data saved in the database.
     * @param {InterviewBookingCreateManyAndReturnArgs} args - Arguments to create many InterviewBookings.
     * @example
     * // Create many InterviewBookings
     * const interviewBooking = await prisma.interviewBooking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many InterviewBookings and only return the `id`
     * const interviewBookingWithIdOnly = await prisma.interviewBooking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends InterviewBookingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InterviewBookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewBookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a InterviewBooking.
     * @param {InterviewBookingDeleteArgs} args - Arguments to delete one InterviewBooking.
     * @example
     * // Delete one InterviewBooking
     * const InterviewBooking = await prisma.interviewBooking.delete({
     *   where: {
     *     // ... filter to delete one InterviewBooking
     *   }
     * })
     *
     */
    delete<T extends InterviewBookingDeleteArgs>(args: Prisma.SelectSubset<T, InterviewBookingDeleteArgs<ExtArgs>>): Prisma.Prisma__InterviewBookingClient<runtime.Types.Result.GetResult<Prisma.$InterviewBookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one InterviewBooking.
     * @param {InterviewBookingUpdateArgs} args - Arguments to update one InterviewBooking.
     * @example
     * // Update one InterviewBooking
     * const interviewBooking = await prisma.interviewBooking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends InterviewBookingUpdateArgs>(args: Prisma.SelectSubset<T, InterviewBookingUpdateArgs<ExtArgs>>): Prisma.Prisma__InterviewBookingClient<runtime.Types.Result.GetResult<Prisma.$InterviewBookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more InterviewBookings.
     * @param {InterviewBookingDeleteManyArgs} args - Arguments to filter InterviewBookings to delete.
     * @example
     * // Delete a few InterviewBookings
     * const { count } = await prisma.interviewBooking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends InterviewBookingDeleteManyArgs>(args?: Prisma.SelectSubset<T, InterviewBookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more InterviewBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewBookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterviewBookings
     * const interviewBooking = await prisma.interviewBooking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends InterviewBookingUpdateManyArgs>(args: Prisma.SelectSubset<T, InterviewBookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more InterviewBookings and returns the data updated in the database.
     * @param {InterviewBookingUpdateManyAndReturnArgs} args - Arguments to update many InterviewBookings.
     * @example
     * // Update many InterviewBookings
     * const interviewBooking = await prisma.interviewBooking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more InterviewBookings and only return the `id`
     * const interviewBookingWithIdOnly = await prisma.interviewBooking.updateManyAndReturn({
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
    updateManyAndReturn<T extends InterviewBookingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InterviewBookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewBookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one InterviewBooking.
     * @param {InterviewBookingUpsertArgs} args - Arguments to update or create a InterviewBooking.
     * @example
     * // Update or create a InterviewBooking
     * const interviewBooking = await prisma.interviewBooking.upsert({
     *   create: {
     *     // ... data to create a InterviewBooking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterviewBooking we want to update
     *   }
     * })
     */
    upsert<T extends InterviewBookingUpsertArgs>(args: Prisma.SelectSubset<T, InterviewBookingUpsertArgs<ExtArgs>>): Prisma.Prisma__InterviewBookingClient<runtime.Types.Result.GetResult<Prisma.$InterviewBookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of InterviewBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewBookingCountArgs} args - Arguments to filter InterviewBookings to count.
     * @example
     * // Count the number of InterviewBookings
     * const count = await prisma.interviewBooking.count({
     *   where: {
     *     // ... the filter for the InterviewBookings we want to count
     *   }
     * })
    **/
    count<T extends InterviewBookingCountArgs>(args?: Prisma.Subset<T, InterviewBookingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InterviewBookingCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a InterviewBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewBookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterviewBookingAggregateArgs>(args: Prisma.Subset<T, InterviewBookingAggregateArgs>): Prisma.PrismaPromise<GetInterviewBookingAggregateType<T>>;
    /**
     * Group by InterviewBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewBookingGroupByArgs} args - Group by arguments.
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
    groupBy<T extends InterviewBookingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InterviewBookingGroupByArgs['orderBy'];
    } : {
        orderBy?: InterviewBookingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InterviewBookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the InterviewBooking model
     */
    readonly fields: InterviewBookingFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for InterviewBooking.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__InterviewBookingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    slot<T extends Prisma.InterviewSlotDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InterviewSlotDefaultArgs<ExtArgs>>): Prisma.Prisma__InterviewSlotClient<runtime.Types.Result.GetResult<Prisma.$InterviewSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    pass<T extends Prisma.InterviewBooking$passArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InterviewBooking$passArgs<ExtArgs>>): Prisma.Prisma__InterviewPassClient<runtime.Types.Result.GetResult<Prisma.$InterviewPassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the InterviewBooking model
 */
export interface InterviewBookingFieldRefs {
    readonly id: Prisma.FieldRef<"InterviewBooking", 'String'>;
    readonly userId: Prisma.FieldRef<"InterviewBooking", 'String'>;
    readonly slotId: Prisma.FieldRef<"InterviewBooking", 'String'>;
    readonly meetingUrl: Prisma.FieldRef<"InterviewBooking", 'String'>;
    readonly status: Prisma.FieldRef<"InterviewBooking", 'BookingStatus'>;
    readonly transactionId: Prisma.FieldRef<"InterviewBooking", 'String'>;
    readonly passId: Prisma.FieldRef<"InterviewBooking", 'String'>;
}
/**
 * InterviewBooking findUnique
 */
export type InterviewBookingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which InterviewBooking to fetch.
     */
    where: Prisma.InterviewBookingWhereUniqueInput;
};
/**
 * InterviewBooking findUniqueOrThrow
 */
export type InterviewBookingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which InterviewBooking to fetch.
     */
    where: Prisma.InterviewBookingWhereUniqueInput;
};
/**
 * InterviewBooking findFirst
 */
export type InterviewBookingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which InterviewBooking to fetch.
     */
    where?: Prisma.InterviewBookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InterviewBookings to fetch.
     */
    orderBy?: Prisma.InterviewBookingOrderByWithRelationInput | Prisma.InterviewBookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for InterviewBookings.
     */
    cursor?: Prisma.InterviewBookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InterviewBookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InterviewBookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of InterviewBookings.
     */
    distinct?: Prisma.InterviewBookingScalarFieldEnum | Prisma.InterviewBookingScalarFieldEnum[];
};
/**
 * InterviewBooking findFirstOrThrow
 */
export type InterviewBookingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which InterviewBooking to fetch.
     */
    where?: Prisma.InterviewBookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InterviewBookings to fetch.
     */
    orderBy?: Prisma.InterviewBookingOrderByWithRelationInput | Prisma.InterviewBookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for InterviewBookings.
     */
    cursor?: Prisma.InterviewBookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InterviewBookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InterviewBookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of InterviewBookings.
     */
    distinct?: Prisma.InterviewBookingScalarFieldEnum | Prisma.InterviewBookingScalarFieldEnum[];
};
/**
 * InterviewBooking findMany
 */
export type InterviewBookingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which InterviewBookings to fetch.
     */
    where?: Prisma.InterviewBookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InterviewBookings to fetch.
     */
    orderBy?: Prisma.InterviewBookingOrderByWithRelationInput | Prisma.InterviewBookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing InterviewBookings.
     */
    cursor?: Prisma.InterviewBookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InterviewBookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InterviewBookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of InterviewBookings.
     */
    distinct?: Prisma.InterviewBookingScalarFieldEnum | Prisma.InterviewBookingScalarFieldEnum[];
};
/**
 * InterviewBooking create
 */
export type InterviewBookingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a InterviewBooking.
     */
    data: Prisma.XOR<Prisma.InterviewBookingCreateInput, Prisma.InterviewBookingUncheckedCreateInput>;
};
/**
 * InterviewBooking createMany
 */
export type InterviewBookingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterviewBookings.
     */
    data: Prisma.InterviewBookingCreateManyInput | Prisma.InterviewBookingCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * InterviewBooking createManyAndReturn
 */
export type InterviewBookingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewBooking
     */
    select?: Prisma.InterviewBookingSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewBooking
     */
    omit?: Prisma.InterviewBookingOmit<ExtArgs> | null;
    /**
     * The data used to create many InterviewBookings.
     */
    data: Prisma.InterviewBookingCreateManyInput | Prisma.InterviewBookingCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewBookingIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * InterviewBooking update
 */
export type InterviewBookingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a InterviewBooking.
     */
    data: Prisma.XOR<Prisma.InterviewBookingUpdateInput, Prisma.InterviewBookingUncheckedUpdateInput>;
    /**
     * Choose, which InterviewBooking to update.
     */
    where: Prisma.InterviewBookingWhereUniqueInput;
};
/**
 * InterviewBooking updateMany
 */
export type InterviewBookingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update InterviewBookings.
     */
    data: Prisma.XOR<Prisma.InterviewBookingUpdateManyMutationInput, Prisma.InterviewBookingUncheckedUpdateManyInput>;
    /**
     * Filter which InterviewBookings to update
     */
    where?: Prisma.InterviewBookingWhereInput;
    /**
     * Limit how many InterviewBookings to update.
     */
    limit?: number;
};
/**
 * InterviewBooking updateManyAndReturn
 */
export type InterviewBookingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewBooking
     */
    select?: Prisma.InterviewBookingSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewBooking
     */
    omit?: Prisma.InterviewBookingOmit<ExtArgs> | null;
    /**
     * The data used to update InterviewBookings.
     */
    data: Prisma.XOR<Prisma.InterviewBookingUpdateManyMutationInput, Prisma.InterviewBookingUncheckedUpdateManyInput>;
    /**
     * Filter which InterviewBookings to update
     */
    where?: Prisma.InterviewBookingWhereInput;
    /**
     * Limit how many InterviewBookings to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewBookingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * InterviewBooking upsert
 */
export type InterviewBookingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the InterviewBooking to update in case it exists.
     */
    where: Prisma.InterviewBookingWhereUniqueInput;
    /**
     * In case the InterviewBooking found by the `where` argument doesn't exist, create a new InterviewBooking with this data.
     */
    create: Prisma.XOR<Prisma.InterviewBookingCreateInput, Prisma.InterviewBookingUncheckedCreateInput>;
    /**
     * In case the InterviewBooking was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.InterviewBookingUpdateInput, Prisma.InterviewBookingUncheckedUpdateInput>;
};
/**
 * InterviewBooking delete
 */
export type InterviewBookingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which InterviewBooking to delete.
     */
    where: Prisma.InterviewBookingWhereUniqueInput;
};
/**
 * InterviewBooking deleteMany
 */
export type InterviewBookingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewBookings to delete
     */
    where?: Prisma.InterviewBookingWhereInput;
    /**
     * Limit how many InterviewBookings to delete.
     */
    limit?: number;
};
/**
 * InterviewBooking.pass
 */
export type InterviewBooking$passArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.InterviewPassWhereInput;
};
/**
 * InterviewBooking without action
 */
export type InterviewBookingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=InterviewBooking.d.ts.map