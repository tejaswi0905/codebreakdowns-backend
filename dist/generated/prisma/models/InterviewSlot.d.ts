import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model InterviewSlot
 *
 */
export type InterviewSlotModel = runtime.Types.Result.DefaultSelection<Prisma.$InterviewSlotPayload>;
export type AggregateInterviewSlot = {
    _count: InterviewSlotCountAggregateOutputType | null;
    _min: InterviewSlotMinAggregateOutputType | null;
    _max: InterviewSlotMaxAggregateOutputType | null;
};
export type InterviewSlotMinAggregateOutputType = {
    id: string | null;
    startTime: Date | null;
    status: $Enums.SlotStatus | null;
};
export type InterviewSlotMaxAggregateOutputType = {
    id: string | null;
    startTime: Date | null;
    status: $Enums.SlotStatus | null;
};
export type InterviewSlotCountAggregateOutputType = {
    id: number;
    startTime: number;
    status: number;
    _all: number;
};
export type InterviewSlotMinAggregateInputType = {
    id?: true;
    startTime?: true;
    status?: true;
};
export type InterviewSlotMaxAggregateInputType = {
    id?: true;
    startTime?: true;
    status?: true;
};
export type InterviewSlotCountAggregateInputType = {
    id?: true;
    startTime?: true;
    status?: true;
    _all?: true;
};
export type InterviewSlotAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewSlot to aggregate.
     */
    where?: Prisma.InterviewSlotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InterviewSlots to fetch.
     */
    orderBy?: Prisma.InterviewSlotOrderByWithRelationInput | Prisma.InterviewSlotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.InterviewSlotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InterviewSlots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InterviewSlots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned InterviewSlots
    **/
    _count?: true | InterviewSlotCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: InterviewSlotMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: InterviewSlotMaxAggregateInputType;
};
export type GetInterviewSlotAggregateType<T extends InterviewSlotAggregateArgs> = {
    [P in keyof T & keyof AggregateInterviewSlot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInterviewSlot[P]> : Prisma.GetScalarType<T[P], AggregateInterviewSlot[P]>;
};
export type InterviewSlotGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewSlotWhereInput;
    orderBy?: Prisma.InterviewSlotOrderByWithAggregationInput | Prisma.InterviewSlotOrderByWithAggregationInput[];
    by: Prisma.InterviewSlotScalarFieldEnum[] | Prisma.InterviewSlotScalarFieldEnum;
    having?: Prisma.InterviewSlotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InterviewSlotCountAggregateInputType | true;
    _min?: InterviewSlotMinAggregateInputType;
    _max?: InterviewSlotMaxAggregateInputType;
};
export type InterviewSlotGroupByOutputType = {
    id: string;
    startTime: Date;
    status: $Enums.SlotStatus;
    _count: InterviewSlotCountAggregateOutputType | null;
    _min: InterviewSlotMinAggregateOutputType | null;
    _max: InterviewSlotMaxAggregateOutputType | null;
};
export type GetInterviewSlotGroupByPayload<T extends InterviewSlotGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InterviewSlotGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InterviewSlotGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InterviewSlotGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InterviewSlotGroupByOutputType[P]>;
}>>;
export type InterviewSlotWhereInput = {
    AND?: Prisma.InterviewSlotWhereInput | Prisma.InterviewSlotWhereInput[];
    OR?: Prisma.InterviewSlotWhereInput[];
    NOT?: Prisma.InterviewSlotWhereInput | Prisma.InterviewSlotWhereInput[];
    id?: Prisma.StringFilter<"InterviewSlot"> | string;
    startTime?: Prisma.DateTimeFilter<"InterviewSlot"> | Date | string;
    status?: Prisma.EnumSlotStatusFilter<"InterviewSlot"> | $Enums.SlotStatus;
    bookings?: Prisma.InterviewBookingListRelationFilter;
};
export type InterviewSlotOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    bookings?: Prisma.InterviewBookingOrderByRelationAggregateInput;
};
export type InterviewSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InterviewSlotWhereInput | Prisma.InterviewSlotWhereInput[];
    OR?: Prisma.InterviewSlotWhereInput[];
    NOT?: Prisma.InterviewSlotWhereInput | Prisma.InterviewSlotWhereInput[];
    startTime?: Prisma.DateTimeFilter<"InterviewSlot"> | Date | string;
    status?: Prisma.EnumSlotStatusFilter<"InterviewSlot"> | $Enums.SlotStatus;
    bookings?: Prisma.InterviewBookingListRelationFilter;
}, "id">;
export type InterviewSlotOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.InterviewSlotCountOrderByAggregateInput;
    _max?: Prisma.InterviewSlotMaxOrderByAggregateInput;
    _min?: Prisma.InterviewSlotMinOrderByAggregateInput;
};
export type InterviewSlotScalarWhereWithAggregatesInput = {
    AND?: Prisma.InterviewSlotScalarWhereWithAggregatesInput | Prisma.InterviewSlotScalarWhereWithAggregatesInput[];
    OR?: Prisma.InterviewSlotScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InterviewSlotScalarWhereWithAggregatesInput | Prisma.InterviewSlotScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"InterviewSlot"> | string;
    startTime?: Prisma.DateTimeWithAggregatesFilter<"InterviewSlot"> | Date | string;
    status?: Prisma.EnumSlotStatusWithAggregatesFilter<"InterviewSlot"> | $Enums.SlotStatus;
};
export type InterviewSlotCreateInput = {
    id?: string;
    startTime: Date | string;
    status?: $Enums.SlotStatus;
    bookings?: Prisma.InterviewBookingCreateNestedManyWithoutSlotInput;
};
export type InterviewSlotUncheckedCreateInput = {
    id?: string;
    startTime: Date | string;
    status?: $Enums.SlotStatus;
    bookings?: Prisma.InterviewBookingUncheckedCreateNestedManyWithoutSlotInput;
};
export type InterviewSlotUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus;
    bookings?: Prisma.InterviewBookingUpdateManyWithoutSlotNestedInput;
};
export type InterviewSlotUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus;
    bookings?: Prisma.InterviewBookingUncheckedUpdateManyWithoutSlotNestedInput;
};
export type InterviewSlotCreateManyInput = {
    id?: string;
    startTime: Date | string;
    status?: $Enums.SlotStatus;
};
export type InterviewSlotUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus;
};
export type InterviewSlotUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus;
};
export type InterviewSlotCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type InterviewSlotMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type InterviewSlotMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type InterviewSlotScalarRelationFilter = {
    is?: Prisma.InterviewSlotWhereInput;
    isNot?: Prisma.InterviewSlotWhereInput;
};
export type EnumSlotStatusFieldUpdateOperationsInput = {
    set?: $Enums.SlotStatus;
};
export type InterviewSlotCreateNestedOneWithoutBookingsInput = {
    create?: Prisma.XOR<Prisma.InterviewSlotCreateWithoutBookingsInput, Prisma.InterviewSlotUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.InterviewSlotCreateOrConnectWithoutBookingsInput;
    connect?: Prisma.InterviewSlotWhereUniqueInput;
};
export type InterviewSlotUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewSlotCreateWithoutBookingsInput, Prisma.InterviewSlotUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.InterviewSlotCreateOrConnectWithoutBookingsInput;
    upsert?: Prisma.InterviewSlotUpsertWithoutBookingsInput;
    connect?: Prisma.InterviewSlotWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InterviewSlotUpdateToOneWithWhereWithoutBookingsInput, Prisma.InterviewSlotUpdateWithoutBookingsInput>, Prisma.InterviewSlotUncheckedUpdateWithoutBookingsInput>;
};
export type InterviewSlotCreateWithoutBookingsInput = {
    id?: string;
    startTime: Date | string;
    status?: $Enums.SlotStatus;
};
export type InterviewSlotUncheckedCreateWithoutBookingsInput = {
    id?: string;
    startTime: Date | string;
    status?: $Enums.SlotStatus;
};
export type InterviewSlotCreateOrConnectWithoutBookingsInput = {
    where: Prisma.InterviewSlotWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewSlotCreateWithoutBookingsInput, Prisma.InterviewSlotUncheckedCreateWithoutBookingsInput>;
};
export type InterviewSlotUpsertWithoutBookingsInput = {
    update: Prisma.XOR<Prisma.InterviewSlotUpdateWithoutBookingsInput, Prisma.InterviewSlotUncheckedUpdateWithoutBookingsInput>;
    create: Prisma.XOR<Prisma.InterviewSlotCreateWithoutBookingsInput, Prisma.InterviewSlotUncheckedCreateWithoutBookingsInput>;
    where?: Prisma.InterviewSlotWhereInput;
};
export type InterviewSlotUpdateToOneWithWhereWithoutBookingsInput = {
    where?: Prisma.InterviewSlotWhereInput;
    data: Prisma.XOR<Prisma.InterviewSlotUpdateWithoutBookingsInput, Prisma.InterviewSlotUncheckedUpdateWithoutBookingsInput>;
};
export type InterviewSlotUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus;
};
export type InterviewSlotUncheckedUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus;
};
/**
 * Count Type InterviewSlotCountOutputType
 */
export type InterviewSlotCountOutputType = {
    bookings: number;
};
export type InterviewSlotCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | InterviewSlotCountOutputTypeCountBookingsArgs;
};
/**
 * InterviewSlotCountOutputType without action
 */
export type InterviewSlotCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSlotCountOutputType
     */
    select?: Prisma.InterviewSlotCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * InterviewSlotCountOutputType without action
 */
export type InterviewSlotCountOutputTypeCountBookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewBookingWhereInput;
};
export type InterviewSlotSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    startTime?: boolean;
    status?: boolean;
    bookings?: boolean | Prisma.InterviewSlot$bookingsArgs<ExtArgs>;
    _count?: boolean | Prisma.InterviewSlotCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interviewSlot"]>;
export type InterviewSlotSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    startTime?: boolean;
    status?: boolean;
}, ExtArgs["result"]["interviewSlot"]>;
export type InterviewSlotSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    startTime?: boolean;
    status?: boolean;
}, ExtArgs["result"]["interviewSlot"]>;
export type InterviewSlotSelectScalar = {
    id?: boolean;
    startTime?: boolean;
    status?: boolean;
};
export type InterviewSlotOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "startTime" | "status", ExtArgs["result"]["interviewSlot"]>;
export type InterviewSlotInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | Prisma.InterviewSlot$bookingsArgs<ExtArgs>;
    _count?: boolean | Prisma.InterviewSlotCountOutputTypeDefaultArgs<ExtArgs>;
};
export type InterviewSlotIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type InterviewSlotIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $InterviewSlotPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InterviewSlot";
    objects: {
        bookings: Prisma.$InterviewBookingPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        startTime: Date;
        status: $Enums.SlotStatus;
    }, ExtArgs["result"]["interviewSlot"]>;
    composites: {};
};
export type InterviewSlotGetPayload<S extends boolean | null | undefined | InterviewSlotDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InterviewSlotPayload, S>;
export type InterviewSlotCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InterviewSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InterviewSlotCountAggregateInputType | true;
};
export interface InterviewSlotDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InterviewSlot'];
        meta: {
            name: 'InterviewSlot';
        };
    };
    /**
     * Find zero or one InterviewSlot that matches the filter.
     * @param {InterviewSlotFindUniqueArgs} args - Arguments to find a InterviewSlot
     * @example
     * // Get one InterviewSlot
     * const interviewSlot = await prisma.interviewSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewSlotFindUniqueArgs>(args: Prisma.SelectSubset<T, InterviewSlotFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InterviewSlotClient<runtime.Types.Result.GetResult<Prisma.$InterviewSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one InterviewSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterviewSlotFindUniqueOrThrowArgs} args - Arguments to find a InterviewSlot
     * @example
     * // Get one InterviewSlot
     * const interviewSlot = await prisma.interviewSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewSlotFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InterviewSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterviewSlotClient<runtime.Types.Result.GetResult<Prisma.$InterviewSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first InterviewSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewSlotFindFirstArgs} args - Arguments to find a InterviewSlot
     * @example
     * // Get one InterviewSlot
     * const interviewSlot = await prisma.interviewSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewSlotFindFirstArgs>(args?: Prisma.SelectSubset<T, InterviewSlotFindFirstArgs<ExtArgs>>): Prisma.Prisma__InterviewSlotClient<runtime.Types.Result.GetResult<Prisma.$InterviewSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first InterviewSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewSlotFindFirstOrThrowArgs} args - Arguments to find a InterviewSlot
     * @example
     * // Get one InterviewSlot
     * const interviewSlot = await prisma.interviewSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewSlotFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InterviewSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterviewSlotClient<runtime.Types.Result.GetResult<Prisma.$InterviewSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more InterviewSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterviewSlots
     * const interviewSlots = await prisma.interviewSlot.findMany()
     *
     * // Get first 10 InterviewSlots
     * const interviewSlots = await prisma.interviewSlot.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const interviewSlotWithIdOnly = await prisma.interviewSlot.findMany({ select: { id: true } })
     *
     */
    findMany<T extends InterviewSlotFindManyArgs>(args?: Prisma.SelectSubset<T, InterviewSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a InterviewSlot.
     * @param {InterviewSlotCreateArgs} args - Arguments to create a InterviewSlot.
     * @example
     * // Create one InterviewSlot
     * const InterviewSlot = await prisma.interviewSlot.create({
     *   data: {
     *     // ... data to create a InterviewSlot
     *   }
     * })
     *
     */
    create<T extends InterviewSlotCreateArgs>(args: Prisma.SelectSubset<T, InterviewSlotCreateArgs<ExtArgs>>): Prisma.Prisma__InterviewSlotClient<runtime.Types.Result.GetResult<Prisma.$InterviewSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many InterviewSlots.
     * @param {InterviewSlotCreateManyArgs} args - Arguments to create many InterviewSlots.
     * @example
     * // Create many InterviewSlots
     * const interviewSlot = await prisma.interviewSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends InterviewSlotCreateManyArgs>(args?: Prisma.SelectSubset<T, InterviewSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many InterviewSlots and returns the data saved in the database.
     * @param {InterviewSlotCreateManyAndReturnArgs} args - Arguments to create many InterviewSlots.
     * @example
     * // Create many InterviewSlots
     * const interviewSlot = await prisma.interviewSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many InterviewSlots and only return the `id`
     * const interviewSlotWithIdOnly = await prisma.interviewSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends InterviewSlotCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InterviewSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a InterviewSlot.
     * @param {InterviewSlotDeleteArgs} args - Arguments to delete one InterviewSlot.
     * @example
     * // Delete one InterviewSlot
     * const InterviewSlot = await prisma.interviewSlot.delete({
     *   where: {
     *     // ... filter to delete one InterviewSlot
     *   }
     * })
     *
     */
    delete<T extends InterviewSlotDeleteArgs>(args: Prisma.SelectSubset<T, InterviewSlotDeleteArgs<ExtArgs>>): Prisma.Prisma__InterviewSlotClient<runtime.Types.Result.GetResult<Prisma.$InterviewSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one InterviewSlot.
     * @param {InterviewSlotUpdateArgs} args - Arguments to update one InterviewSlot.
     * @example
     * // Update one InterviewSlot
     * const interviewSlot = await prisma.interviewSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends InterviewSlotUpdateArgs>(args: Prisma.SelectSubset<T, InterviewSlotUpdateArgs<ExtArgs>>): Prisma.Prisma__InterviewSlotClient<runtime.Types.Result.GetResult<Prisma.$InterviewSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more InterviewSlots.
     * @param {InterviewSlotDeleteManyArgs} args - Arguments to filter InterviewSlots to delete.
     * @example
     * // Delete a few InterviewSlots
     * const { count } = await prisma.interviewSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends InterviewSlotDeleteManyArgs>(args?: Prisma.SelectSubset<T, InterviewSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more InterviewSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterviewSlots
     * const interviewSlot = await prisma.interviewSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends InterviewSlotUpdateManyArgs>(args: Prisma.SelectSubset<T, InterviewSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more InterviewSlots and returns the data updated in the database.
     * @param {InterviewSlotUpdateManyAndReturnArgs} args - Arguments to update many InterviewSlots.
     * @example
     * // Update many InterviewSlots
     * const interviewSlot = await prisma.interviewSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more InterviewSlots and only return the `id`
     * const interviewSlotWithIdOnly = await prisma.interviewSlot.updateManyAndReturn({
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
    updateManyAndReturn<T extends InterviewSlotUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InterviewSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one InterviewSlot.
     * @param {InterviewSlotUpsertArgs} args - Arguments to update or create a InterviewSlot.
     * @example
     * // Update or create a InterviewSlot
     * const interviewSlot = await prisma.interviewSlot.upsert({
     *   create: {
     *     // ... data to create a InterviewSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterviewSlot we want to update
     *   }
     * })
     */
    upsert<T extends InterviewSlotUpsertArgs>(args: Prisma.SelectSubset<T, InterviewSlotUpsertArgs<ExtArgs>>): Prisma.Prisma__InterviewSlotClient<runtime.Types.Result.GetResult<Prisma.$InterviewSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of InterviewSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewSlotCountArgs} args - Arguments to filter InterviewSlots to count.
     * @example
     * // Count the number of InterviewSlots
     * const count = await prisma.interviewSlot.count({
     *   where: {
     *     // ... the filter for the InterviewSlots we want to count
     *   }
     * })
    **/
    count<T extends InterviewSlotCountArgs>(args?: Prisma.Subset<T, InterviewSlotCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InterviewSlotCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a InterviewSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterviewSlotAggregateArgs>(args: Prisma.Subset<T, InterviewSlotAggregateArgs>): Prisma.PrismaPromise<GetInterviewSlotAggregateType<T>>;
    /**
     * Group by InterviewSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewSlotGroupByArgs} args - Group by arguments.
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
    groupBy<T extends InterviewSlotGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InterviewSlotGroupByArgs['orderBy'];
    } : {
        orderBy?: InterviewSlotGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InterviewSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the InterviewSlot model
     */
    readonly fields: InterviewSlotFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for InterviewSlot.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__InterviewSlotClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bookings<T extends Prisma.InterviewSlot$bookingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InterviewSlot$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the InterviewSlot model
 */
export interface InterviewSlotFieldRefs {
    readonly id: Prisma.FieldRef<"InterviewSlot", 'String'>;
    readonly startTime: Prisma.FieldRef<"InterviewSlot", 'DateTime'>;
    readonly status: Prisma.FieldRef<"InterviewSlot", 'SlotStatus'>;
}
/**
 * InterviewSlot findUnique
 */
export type InterviewSlotFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSlot
     */
    select?: Prisma.InterviewSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewSlot
     */
    omit?: Prisma.InterviewSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewSlotInclude<ExtArgs> | null;
    /**
     * Filter, which InterviewSlot to fetch.
     */
    where: Prisma.InterviewSlotWhereUniqueInput;
};
/**
 * InterviewSlot findUniqueOrThrow
 */
export type InterviewSlotFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSlot
     */
    select?: Prisma.InterviewSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewSlot
     */
    omit?: Prisma.InterviewSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewSlotInclude<ExtArgs> | null;
    /**
     * Filter, which InterviewSlot to fetch.
     */
    where: Prisma.InterviewSlotWhereUniqueInput;
};
/**
 * InterviewSlot findFirst
 */
export type InterviewSlotFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSlot
     */
    select?: Prisma.InterviewSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewSlot
     */
    omit?: Prisma.InterviewSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewSlotInclude<ExtArgs> | null;
    /**
     * Filter, which InterviewSlot to fetch.
     */
    where?: Prisma.InterviewSlotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InterviewSlots to fetch.
     */
    orderBy?: Prisma.InterviewSlotOrderByWithRelationInput | Prisma.InterviewSlotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for InterviewSlots.
     */
    cursor?: Prisma.InterviewSlotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InterviewSlots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InterviewSlots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of InterviewSlots.
     */
    distinct?: Prisma.InterviewSlotScalarFieldEnum | Prisma.InterviewSlotScalarFieldEnum[];
};
/**
 * InterviewSlot findFirstOrThrow
 */
export type InterviewSlotFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSlot
     */
    select?: Prisma.InterviewSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewSlot
     */
    omit?: Prisma.InterviewSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewSlotInclude<ExtArgs> | null;
    /**
     * Filter, which InterviewSlot to fetch.
     */
    where?: Prisma.InterviewSlotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InterviewSlots to fetch.
     */
    orderBy?: Prisma.InterviewSlotOrderByWithRelationInput | Prisma.InterviewSlotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for InterviewSlots.
     */
    cursor?: Prisma.InterviewSlotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InterviewSlots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InterviewSlots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of InterviewSlots.
     */
    distinct?: Prisma.InterviewSlotScalarFieldEnum | Prisma.InterviewSlotScalarFieldEnum[];
};
/**
 * InterviewSlot findMany
 */
export type InterviewSlotFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSlot
     */
    select?: Prisma.InterviewSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewSlot
     */
    omit?: Prisma.InterviewSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewSlotInclude<ExtArgs> | null;
    /**
     * Filter, which InterviewSlots to fetch.
     */
    where?: Prisma.InterviewSlotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InterviewSlots to fetch.
     */
    orderBy?: Prisma.InterviewSlotOrderByWithRelationInput | Prisma.InterviewSlotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing InterviewSlots.
     */
    cursor?: Prisma.InterviewSlotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InterviewSlots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InterviewSlots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of InterviewSlots.
     */
    distinct?: Prisma.InterviewSlotScalarFieldEnum | Prisma.InterviewSlotScalarFieldEnum[];
};
/**
 * InterviewSlot create
 */
export type InterviewSlotCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSlot
     */
    select?: Prisma.InterviewSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewSlot
     */
    omit?: Prisma.InterviewSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewSlotInclude<ExtArgs> | null;
    /**
     * The data needed to create a InterviewSlot.
     */
    data: Prisma.XOR<Prisma.InterviewSlotCreateInput, Prisma.InterviewSlotUncheckedCreateInput>;
};
/**
 * InterviewSlot createMany
 */
export type InterviewSlotCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterviewSlots.
     */
    data: Prisma.InterviewSlotCreateManyInput | Prisma.InterviewSlotCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * InterviewSlot createManyAndReturn
 */
export type InterviewSlotCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSlot
     */
    select?: Prisma.InterviewSlotSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewSlot
     */
    omit?: Prisma.InterviewSlotOmit<ExtArgs> | null;
    /**
     * The data used to create many InterviewSlots.
     */
    data: Prisma.InterviewSlotCreateManyInput | Prisma.InterviewSlotCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * InterviewSlot update
 */
export type InterviewSlotUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSlot
     */
    select?: Prisma.InterviewSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewSlot
     */
    omit?: Prisma.InterviewSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewSlotInclude<ExtArgs> | null;
    /**
     * The data needed to update a InterviewSlot.
     */
    data: Prisma.XOR<Prisma.InterviewSlotUpdateInput, Prisma.InterviewSlotUncheckedUpdateInput>;
    /**
     * Choose, which InterviewSlot to update.
     */
    where: Prisma.InterviewSlotWhereUniqueInput;
};
/**
 * InterviewSlot updateMany
 */
export type InterviewSlotUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update InterviewSlots.
     */
    data: Prisma.XOR<Prisma.InterviewSlotUpdateManyMutationInput, Prisma.InterviewSlotUncheckedUpdateManyInput>;
    /**
     * Filter which InterviewSlots to update
     */
    where?: Prisma.InterviewSlotWhereInput;
    /**
     * Limit how many InterviewSlots to update.
     */
    limit?: number;
};
/**
 * InterviewSlot updateManyAndReturn
 */
export type InterviewSlotUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSlot
     */
    select?: Prisma.InterviewSlotSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewSlot
     */
    omit?: Prisma.InterviewSlotOmit<ExtArgs> | null;
    /**
     * The data used to update InterviewSlots.
     */
    data: Prisma.XOR<Prisma.InterviewSlotUpdateManyMutationInput, Prisma.InterviewSlotUncheckedUpdateManyInput>;
    /**
     * Filter which InterviewSlots to update
     */
    where?: Prisma.InterviewSlotWhereInput;
    /**
     * Limit how many InterviewSlots to update.
     */
    limit?: number;
};
/**
 * InterviewSlot upsert
 */
export type InterviewSlotUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSlot
     */
    select?: Prisma.InterviewSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewSlot
     */
    omit?: Prisma.InterviewSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewSlotInclude<ExtArgs> | null;
    /**
     * The filter to search for the InterviewSlot to update in case it exists.
     */
    where: Prisma.InterviewSlotWhereUniqueInput;
    /**
     * In case the InterviewSlot found by the `where` argument doesn't exist, create a new InterviewSlot with this data.
     */
    create: Prisma.XOR<Prisma.InterviewSlotCreateInput, Prisma.InterviewSlotUncheckedCreateInput>;
    /**
     * In case the InterviewSlot was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.InterviewSlotUpdateInput, Prisma.InterviewSlotUncheckedUpdateInput>;
};
/**
 * InterviewSlot delete
 */
export type InterviewSlotDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSlot
     */
    select?: Prisma.InterviewSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewSlot
     */
    omit?: Prisma.InterviewSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewSlotInclude<ExtArgs> | null;
    /**
     * Filter which InterviewSlot to delete.
     */
    where: Prisma.InterviewSlotWhereUniqueInput;
};
/**
 * InterviewSlot deleteMany
 */
export type InterviewSlotDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewSlots to delete
     */
    where?: Prisma.InterviewSlotWhereInput;
    /**
     * Limit how many InterviewSlots to delete.
     */
    limit?: number;
};
/**
 * InterviewSlot.bookings
 */
export type InterviewSlot$bookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * InterviewSlot without action
 */
export type InterviewSlotDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSlot
     */
    select?: Prisma.InterviewSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InterviewSlot
     */
    omit?: Prisma.InterviewSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewSlotInclude<ExtArgs> | null;
};
//# sourceMappingURL=InterviewSlot.d.ts.map