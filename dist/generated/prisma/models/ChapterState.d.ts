import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ChapterState
 *
 */
export type ChapterStateModel = runtime.Types.Result.DefaultSelection<Prisma.$ChapterStatePayload>;
export type AggregateChapterState = {
    _count: ChapterStateCountAggregateOutputType | null;
    _min: ChapterStateMinAggregateOutputType | null;
    _max: ChapterStateMaxAggregateOutputType | null;
};
export type ChapterStateMinAggregateOutputType = {
    userId: string | null;
    chapterId: string | null;
    isUnlocked: boolean | null;
    isCompleted: boolean | null;
};
export type ChapterStateMaxAggregateOutputType = {
    userId: string | null;
    chapterId: string | null;
    isUnlocked: boolean | null;
    isCompleted: boolean | null;
};
export type ChapterStateCountAggregateOutputType = {
    userId: number;
    chapterId: number;
    isUnlocked: number;
    isCompleted: number;
    _all: number;
};
export type ChapterStateMinAggregateInputType = {
    userId?: true;
    chapterId?: true;
    isUnlocked?: true;
    isCompleted?: true;
};
export type ChapterStateMaxAggregateInputType = {
    userId?: true;
    chapterId?: true;
    isUnlocked?: true;
    isCompleted?: true;
};
export type ChapterStateCountAggregateInputType = {
    userId?: true;
    chapterId?: true;
    isUnlocked?: true;
    isCompleted?: true;
    _all?: true;
};
export type ChapterStateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ChapterState to aggregate.
     */
    where?: Prisma.ChapterStateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChapterStates to fetch.
     */
    orderBy?: Prisma.ChapterStateOrderByWithRelationInput | Prisma.ChapterStateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ChapterStateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChapterStates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChapterStates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ChapterStates
    **/
    _count?: true | ChapterStateCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ChapterStateMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ChapterStateMaxAggregateInputType;
};
export type GetChapterStateAggregateType<T extends ChapterStateAggregateArgs> = {
    [P in keyof T & keyof AggregateChapterState]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChapterState[P]> : Prisma.GetScalarType<T[P], AggregateChapterState[P]>;
};
export type ChapterStateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChapterStateWhereInput;
    orderBy?: Prisma.ChapterStateOrderByWithAggregationInput | Prisma.ChapterStateOrderByWithAggregationInput[];
    by: Prisma.ChapterStateScalarFieldEnum[] | Prisma.ChapterStateScalarFieldEnum;
    having?: Prisma.ChapterStateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChapterStateCountAggregateInputType | true;
    _min?: ChapterStateMinAggregateInputType;
    _max?: ChapterStateMaxAggregateInputType;
};
export type ChapterStateGroupByOutputType = {
    userId: string;
    chapterId: string;
    isUnlocked: boolean;
    isCompleted: boolean;
    _count: ChapterStateCountAggregateOutputType | null;
    _min: ChapterStateMinAggregateOutputType | null;
    _max: ChapterStateMaxAggregateOutputType | null;
};
export type GetChapterStateGroupByPayload<T extends ChapterStateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ChapterStateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ChapterStateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ChapterStateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ChapterStateGroupByOutputType[P]>;
}>>;
export type ChapterStateWhereInput = {
    AND?: Prisma.ChapterStateWhereInput | Prisma.ChapterStateWhereInput[];
    OR?: Prisma.ChapterStateWhereInput[];
    NOT?: Prisma.ChapterStateWhereInput | Prisma.ChapterStateWhereInput[];
    userId?: Prisma.StringFilter<"ChapterState"> | string;
    chapterId?: Prisma.StringFilter<"ChapterState"> | string;
    isUnlocked?: Prisma.BoolFilter<"ChapterState"> | boolean;
    isCompleted?: Prisma.BoolFilter<"ChapterState"> | boolean;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    chapter?: Prisma.XOR<Prisma.ChapterScalarRelationFilter, Prisma.ChapterWhereInput>;
};
export type ChapterStateOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    chapterId?: Prisma.SortOrder;
    isUnlocked?: Prisma.SortOrder;
    isCompleted?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    chapter?: Prisma.ChapterOrderByWithRelationInput;
};
export type ChapterStateWhereUniqueInput = Prisma.AtLeast<{
    userId_chapterId?: Prisma.ChapterStateUserIdChapterIdCompoundUniqueInput;
    AND?: Prisma.ChapterStateWhereInput | Prisma.ChapterStateWhereInput[];
    OR?: Prisma.ChapterStateWhereInput[];
    NOT?: Prisma.ChapterStateWhereInput | Prisma.ChapterStateWhereInput[];
    userId?: Prisma.StringFilter<"ChapterState"> | string;
    chapterId?: Prisma.StringFilter<"ChapterState"> | string;
    isUnlocked?: Prisma.BoolFilter<"ChapterState"> | boolean;
    isCompleted?: Prisma.BoolFilter<"ChapterState"> | boolean;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    chapter?: Prisma.XOR<Prisma.ChapterScalarRelationFilter, Prisma.ChapterWhereInput>;
}, "userId_chapterId">;
export type ChapterStateOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    chapterId?: Prisma.SortOrder;
    isUnlocked?: Prisma.SortOrder;
    isCompleted?: Prisma.SortOrder;
    _count?: Prisma.ChapterStateCountOrderByAggregateInput;
    _max?: Prisma.ChapterStateMaxOrderByAggregateInput;
    _min?: Prisma.ChapterStateMinOrderByAggregateInput;
};
export type ChapterStateScalarWhereWithAggregatesInput = {
    AND?: Prisma.ChapterStateScalarWhereWithAggregatesInput | Prisma.ChapterStateScalarWhereWithAggregatesInput[];
    OR?: Prisma.ChapterStateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ChapterStateScalarWhereWithAggregatesInput | Prisma.ChapterStateScalarWhereWithAggregatesInput[];
    userId?: Prisma.StringWithAggregatesFilter<"ChapterState"> | string;
    chapterId?: Prisma.StringWithAggregatesFilter<"ChapterState"> | string;
    isUnlocked?: Prisma.BoolWithAggregatesFilter<"ChapterState"> | boolean;
    isCompleted?: Prisma.BoolWithAggregatesFilter<"ChapterState"> | boolean;
};
export type ChapterStateCreateInput = {
    isUnlocked?: boolean;
    isCompleted?: boolean;
    user: Prisma.UserCreateNestedOneWithoutChapterStatesInput;
    chapter: Prisma.ChapterCreateNestedOneWithoutStatesInput;
};
export type ChapterStateUncheckedCreateInput = {
    userId: string;
    chapterId: string;
    isUnlocked?: boolean;
    isCompleted?: boolean;
};
export type ChapterStateUpdateInput = {
    isUnlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user?: Prisma.UserUpdateOneRequiredWithoutChapterStatesNestedInput;
    chapter?: Prisma.ChapterUpdateOneRequiredWithoutStatesNestedInput;
};
export type ChapterStateUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    chapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    isUnlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChapterStateCreateManyInput = {
    userId: string;
    chapterId: string;
    isUnlocked?: boolean;
    isCompleted?: boolean;
};
export type ChapterStateUpdateManyMutationInput = {
    isUnlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChapterStateUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    chapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    isUnlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChapterStateListRelationFilter = {
    every?: Prisma.ChapterStateWhereInput;
    some?: Prisma.ChapterStateWhereInput;
    none?: Prisma.ChapterStateWhereInput;
};
export type ChapterStateOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ChapterStateUserIdChapterIdCompoundUniqueInput = {
    userId: string;
    chapterId: string;
};
export type ChapterStateCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    chapterId?: Prisma.SortOrder;
    isUnlocked?: Prisma.SortOrder;
    isCompleted?: Prisma.SortOrder;
};
export type ChapterStateMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    chapterId?: Prisma.SortOrder;
    isUnlocked?: Prisma.SortOrder;
    isCompleted?: Prisma.SortOrder;
};
export type ChapterStateMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    chapterId?: Prisma.SortOrder;
    isUnlocked?: Prisma.SortOrder;
    isCompleted?: Prisma.SortOrder;
};
export type ChapterStateCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ChapterStateCreateWithoutUserInput, Prisma.ChapterStateUncheckedCreateWithoutUserInput> | Prisma.ChapterStateCreateWithoutUserInput[] | Prisma.ChapterStateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ChapterStateCreateOrConnectWithoutUserInput | Prisma.ChapterStateCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ChapterStateCreateManyUserInputEnvelope;
    connect?: Prisma.ChapterStateWhereUniqueInput | Prisma.ChapterStateWhereUniqueInput[];
};
export type ChapterStateUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ChapterStateCreateWithoutUserInput, Prisma.ChapterStateUncheckedCreateWithoutUserInput> | Prisma.ChapterStateCreateWithoutUserInput[] | Prisma.ChapterStateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ChapterStateCreateOrConnectWithoutUserInput | Prisma.ChapterStateCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ChapterStateCreateManyUserInputEnvelope;
    connect?: Prisma.ChapterStateWhereUniqueInput | Prisma.ChapterStateWhereUniqueInput[];
};
export type ChapterStateUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ChapterStateCreateWithoutUserInput, Prisma.ChapterStateUncheckedCreateWithoutUserInput> | Prisma.ChapterStateCreateWithoutUserInput[] | Prisma.ChapterStateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ChapterStateCreateOrConnectWithoutUserInput | Prisma.ChapterStateCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ChapterStateUpsertWithWhereUniqueWithoutUserInput | Prisma.ChapterStateUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ChapterStateCreateManyUserInputEnvelope;
    set?: Prisma.ChapterStateWhereUniqueInput | Prisma.ChapterStateWhereUniqueInput[];
    disconnect?: Prisma.ChapterStateWhereUniqueInput | Prisma.ChapterStateWhereUniqueInput[];
    delete?: Prisma.ChapterStateWhereUniqueInput | Prisma.ChapterStateWhereUniqueInput[];
    connect?: Prisma.ChapterStateWhereUniqueInput | Prisma.ChapterStateWhereUniqueInput[];
    update?: Prisma.ChapterStateUpdateWithWhereUniqueWithoutUserInput | Prisma.ChapterStateUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ChapterStateUpdateManyWithWhereWithoutUserInput | Prisma.ChapterStateUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ChapterStateScalarWhereInput | Prisma.ChapterStateScalarWhereInput[];
};
export type ChapterStateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ChapterStateCreateWithoutUserInput, Prisma.ChapterStateUncheckedCreateWithoutUserInput> | Prisma.ChapterStateCreateWithoutUserInput[] | Prisma.ChapterStateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ChapterStateCreateOrConnectWithoutUserInput | Prisma.ChapterStateCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ChapterStateUpsertWithWhereUniqueWithoutUserInput | Prisma.ChapterStateUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ChapterStateCreateManyUserInputEnvelope;
    set?: Prisma.ChapterStateWhereUniqueInput | Prisma.ChapterStateWhereUniqueInput[];
    disconnect?: Prisma.ChapterStateWhereUniqueInput | Prisma.ChapterStateWhereUniqueInput[];
    delete?: Prisma.ChapterStateWhereUniqueInput | Prisma.ChapterStateWhereUniqueInput[];
    connect?: Prisma.ChapterStateWhereUniqueInput | Prisma.ChapterStateWhereUniqueInput[];
    update?: Prisma.ChapterStateUpdateWithWhereUniqueWithoutUserInput | Prisma.ChapterStateUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ChapterStateUpdateManyWithWhereWithoutUserInput | Prisma.ChapterStateUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ChapterStateScalarWhereInput | Prisma.ChapterStateScalarWhereInput[];
};
export type ChapterStateCreateNestedManyWithoutChapterInput = {
    create?: Prisma.XOR<Prisma.ChapterStateCreateWithoutChapterInput, Prisma.ChapterStateUncheckedCreateWithoutChapterInput> | Prisma.ChapterStateCreateWithoutChapterInput[] | Prisma.ChapterStateUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.ChapterStateCreateOrConnectWithoutChapterInput | Prisma.ChapterStateCreateOrConnectWithoutChapterInput[];
    createMany?: Prisma.ChapterStateCreateManyChapterInputEnvelope;
    connect?: Prisma.ChapterStateWhereUniqueInput | Prisma.ChapterStateWhereUniqueInput[];
};
export type ChapterStateUncheckedCreateNestedManyWithoutChapterInput = {
    create?: Prisma.XOR<Prisma.ChapterStateCreateWithoutChapterInput, Prisma.ChapterStateUncheckedCreateWithoutChapterInput> | Prisma.ChapterStateCreateWithoutChapterInput[] | Prisma.ChapterStateUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.ChapterStateCreateOrConnectWithoutChapterInput | Prisma.ChapterStateCreateOrConnectWithoutChapterInput[];
    createMany?: Prisma.ChapterStateCreateManyChapterInputEnvelope;
    connect?: Prisma.ChapterStateWhereUniqueInput | Prisma.ChapterStateWhereUniqueInput[];
};
export type ChapterStateUpdateManyWithoutChapterNestedInput = {
    create?: Prisma.XOR<Prisma.ChapterStateCreateWithoutChapterInput, Prisma.ChapterStateUncheckedCreateWithoutChapterInput> | Prisma.ChapterStateCreateWithoutChapterInput[] | Prisma.ChapterStateUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.ChapterStateCreateOrConnectWithoutChapterInput | Prisma.ChapterStateCreateOrConnectWithoutChapterInput[];
    upsert?: Prisma.ChapterStateUpsertWithWhereUniqueWithoutChapterInput | Prisma.ChapterStateUpsertWithWhereUniqueWithoutChapterInput[];
    createMany?: Prisma.ChapterStateCreateManyChapterInputEnvelope;
    set?: Prisma.ChapterStateWhereUniqueInput | Prisma.ChapterStateWhereUniqueInput[];
    disconnect?: Prisma.ChapterStateWhereUniqueInput | Prisma.ChapterStateWhereUniqueInput[];
    delete?: Prisma.ChapterStateWhereUniqueInput | Prisma.ChapterStateWhereUniqueInput[];
    connect?: Prisma.ChapterStateWhereUniqueInput | Prisma.ChapterStateWhereUniqueInput[];
    update?: Prisma.ChapterStateUpdateWithWhereUniqueWithoutChapterInput | Prisma.ChapterStateUpdateWithWhereUniqueWithoutChapterInput[];
    updateMany?: Prisma.ChapterStateUpdateManyWithWhereWithoutChapterInput | Prisma.ChapterStateUpdateManyWithWhereWithoutChapterInput[];
    deleteMany?: Prisma.ChapterStateScalarWhereInput | Prisma.ChapterStateScalarWhereInput[];
};
export type ChapterStateUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: Prisma.XOR<Prisma.ChapterStateCreateWithoutChapterInput, Prisma.ChapterStateUncheckedCreateWithoutChapterInput> | Prisma.ChapterStateCreateWithoutChapterInput[] | Prisma.ChapterStateUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.ChapterStateCreateOrConnectWithoutChapterInput | Prisma.ChapterStateCreateOrConnectWithoutChapterInput[];
    upsert?: Prisma.ChapterStateUpsertWithWhereUniqueWithoutChapterInput | Prisma.ChapterStateUpsertWithWhereUniqueWithoutChapterInput[];
    createMany?: Prisma.ChapterStateCreateManyChapterInputEnvelope;
    set?: Prisma.ChapterStateWhereUniqueInput | Prisma.ChapterStateWhereUniqueInput[];
    disconnect?: Prisma.ChapterStateWhereUniqueInput | Prisma.ChapterStateWhereUniqueInput[];
    delete?: Prisma.ChapterStateWhereUniqueInput | Prisma.ChapterStateWhereUniqueInput[];
    connect?: Prisma.ChapterStateWhereUniqueInput | Prisma.ChapterStateWhereUniqueInput[];
    update?: Prisma.ChapterStateUpdateWithWhereUniqueWithoutChapterInput | Prisma.ChapterStateUpdateWithWhereUniqueWithoutChapterInput[];
    updateMany?: Prisma.ChapterStateUpdateManyWithWhereWithoutChapterInput | Prisma.ChapterStateUpdateManyWithWhereWithoutChapterInput[];
    deleteMany?: Prisma.ChapterStateScalarWhereInput | Prisma.ChapterStateScalarWhereInput[];
};
export type ChapterStateCreateWithoutUserInput = {
    isUnlocked?: boolean;
    isCompleted?: boolean;
    chapter: Prisma.ChapterCreateNestedOneWithoutStatesInput;
};
export type ChapterStateUncheckedCreateWithoutUserInput = {
    chapterId: string;
    isUnlocked?: boolean;
    isCompleted?: boolean;
};
export type ChapterStateCreateOrConnectWithoutUserInput = {
    where: Prisma.ChapterStateWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChapterStateCreateWithoutUserInput, Prisma.ChapterStateUncheckedCreateWithoutUserInput>;
};
export type ChapterStateCreateManyUserInputEnvelope = {
    data: Prisma.ChapterStateCreateManyUserInput | Prisma.ChapterStateCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ChapterStateUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ChapterStateWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChapterStateUpdateWithoutUserInput, Prisma.ChapterStateUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ChapterStateCreateWithoutUserInput, Prisma.ChapterStateUncheckedCreateWithoutUserInput>;
};
export type ChapterStateUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ChapterStateWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChapterStateUpdateWithoutUserInput, Prisma.ChapterStateUncheckedUpdateWithoutUserInput>;
};
export type ChapterStateUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ChapterStateScalarWhereInput;
    data: Prisma.XOR<Prisma.ChapterStateUpdateManyMutationInput, Prisma.ChapterStateUncheckedUpdateManyWithoutUserInput>;
};
export type ChapterStateScalarWhereInput = {
    AND?: Prisma.ChapterStateScalarWhereInput | Prisma.ChapterStateScalarWhereInput[];
    OR?: Prisma.ChapterStateScalarWhereInput[];
    NOT?: Prisma.ChapterStateScalarWhereInput | Prisma.ChapterStateScalarWhereInput[];
    userId?: Prisma.StringFilter<"ChapterState"> | string;
    chapterId?: Prisma.StringFilter<"ChapterState"> | string;
    isUnlocked?: Prisma.BoolFilter<"ChapterState"> | boolean;
    isCompleted?: Prisma.BoolFilter<"ChapterState"> | boolean;
};
export type ChapterStateCreateWithoutChapterInput = {
    isUnlocked?: boolean;
    isCompleted?: boolean;
    user: Prisma.UserCreateNestedOneWithoutChapterStatesInput;
};
export type ChapterStateUncheckedCreateWithoutChapterInput = {
    userId: string;
    isUnlocked?: boolean;
    isCompleted?: boolean;
};
export type ChapterStateCreateOrConnectWithoutChapterInput = {
    where: Prisma.ChapterStateWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChapterStateCreateWithoutChapterInput, Prisma.ChapterStateUncheckedCreateWithoutChapterInput>;
};
export type ChapterStateCreateManyChapterInputEnvelope = {
    data: Prisma.ChapterStateCreateManyChapterInput | Prisma.ChapterStateCreateManyChapterInput[];
    skipDuplicates?: boolean;
};
export type ChapterStateUpsertWithWhereUniqueWithoutChapterInput = {
    where: Prisma.ChapterStateWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChapterStateUpdateWithoutChapterInput, Prisma.ChapterStateUncheckedUpdateWithoutChapterInput>;
    create: Prisma.XOR<Prisma.ChapterStateCreateWithoutChapterInput, Prisma.ChapterStateUncheckedCreateWithoutChapterInput>;
};
export type ChapterStateUpdateWithWhereUniqueWithoutChapterInput = {
    where: Prisma.ChapterStateWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChapterStateUpdateWithoutChapterInput, Prisma.ChapterStateUncheckedUpdateWithoutChapterInput>;
};
export type ChapterStateUpdateManyWithWhereWithoutChapterInput = {
    where: Prisma.ChapterStateScalarWhereInput;
    data: Prisma.XOR<Prisma.ChapterStateUpdateManyMutationInput, Prisma.ChapterStateUncheckedUpdateManyWithoutChapterInput>;
};
export type ChapterStateCreateManyUserInput = {
    chapterId: string;
    isUnlocked?: boolean;
    isCompleted?: boolean;
};
export type ChapterStateUpdateWithoutUserInput = {
    isUnlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    chapter?: Prisma.ChapterUpdateOneRequiredWithoutStatesNestedInput;
};
export type ChapterStateUncheckedUpdateWithoutUserInput = {
    chapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    isUnlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChapterStateUncheckedUpdateManyWithoutUserInput = {
    chapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    isUnlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChapterStateCreateManyChapterInput = {
    userId: string;
    isUnlocked?: boolean;
    isCompleted?: boolean;
};
export type ChapterStateUpdateWithoutChapterInput = {
    isUnlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user?: Prisma.UserUpdateOneRequiredWithoutChapterStatesNestedInput;
};
export type ChapterStateUncheckedUpdateWithoutChapterInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    isUnlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChapterStateUncheckedUpdateManyWithoutChapterInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    isUnlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChapterStateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    chapterId?: boolean;
    isUnlocked?: boolean;
    isCompleted?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    chapter?: boolean | Prisma.ChapterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chapterState"]>;
export type ChapterStateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    chapterId?: boolean;
    isUnlocked?: boolean;
    isCompleted?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    chapter?: boolean | Prisma.ChapterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chapterState"]>;
export type ChapterStateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    chapterId?: boolean;
    isUnlocked?: boolean;
    isCompleted?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    chapter?: boolean | Prisma.ChapterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chapterState"]>;
export type ChapterStateSelectScalar = {
    userId?: boolean;
    chapterId?: boolean;
    isUnlocked?: boolean;
    isCompleted?: boolean;
};
export type ChapterStateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "chapterId" | "isUnlocked" | "isCompleted", ExtArgs["result"]["chapterState"]>;
export type ChapterStateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    chapter?: boolean | Prisma.ChapterDefaultArgs<ExtArgs>;
};
export type ChapterStateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    chapter?: boolean | Prisma.ChapterDefaultArgs<ExtArgs>;
};
export type ChapterStateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    chapter?: boolean | Prisma.ChapterDefaultArgs<ExtArgs>;
};
export type $ChapterStatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ChapterState";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        chapter: Prisma.$ChapterPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: string;
        chapterId: string;
        isUnlocked: boolean;
        isCompleted: boolean;
    }, ExtArgs["result"]["chapterState"]>;
    composites: {};
};
export type ChapterStateGetPayload<S extends boolean | null | undefined | ChapterStateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ChapterStatePayload, S>;
export type ChapterStateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ChapterStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChapterStateCountAggregateInputType | true;
};
export interface ChapterStateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ChapterState'];
        meta: {
            name: 'ChapterState';
        };
    };
    /**
     * Find zero or one ChapterState that matches the filter.
     * @param {ChapterStateFindUniqueArgs} args - Arguments to find a ChapterState
     * @example
     * // Get one ChapterState
     * const chapterState = await prisma.chapterState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChapterStateFindUniqueArgs>(args: Prisma.SelectSubset<T, ChapterStateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ChapterStateClient<runtime.Types.Result.GetResult<Prisma.$ChapterStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ChapterState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChapterStateFindUniqueOrThrowArgs} args - Arguments to find a ChapterState
     * @example
     * // Get one ChapterState
     * const chapterState = await prisma.chapterState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChapterStateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ChapterStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChapterStateClient<runtime.Types.Result.GetResult<Prisma.$ChapterStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ChapterState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterStateFindFirstArgs} args - Arguments to find a ChapterState
     * @example
     * // Get one ChapterState
     * const chapterState = await prisma.chapterState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChapterStateFindFirstArgs>(args?: Prisma.SelectSubset<T, ChapterStateFindFirstArgs<ExtArgs>>): Prisma.Prisma__ChapterStateClient<runtime.Types.Result.GetResult<Prisma.$ChapterStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ChapterState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterStateFindFirstOrThrowArgs} args - Arguments to find a ChapterState
     * @example
     * // Get one ChapterState
     * const chapterState = await prisma.chapterState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChapterStateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ChapterStateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChapterStateClient<runtime.Types.Result.GetResult<Prisma.$ChapterStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ChapterStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChapterStates
     * const chapterStates = await prisma.chapterState.findMany()
     *
     * // Get first 10 ChapterStates
     * const chapterStates = await prisma.chapterState.findMany({ take: 10 })
     *
     * // Only select the `userId`
     * const chapterStateWithUserIdOnly = await prisma.chapterState.findMany({ select: { userId: true } })
     *
     */
    findMany<T extends ChapterStateFindManyArgs>(args?: Prisma.SelectSubset<T, ChapterStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChapterStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ChapterState.
     * @param {ChapterStateCreateArgs} args - Arguments to create a ChapterState.
     * @example
     * // Create one ChapterState
     * const ChapterState = await prisma.chapterState.create({
     *   data: {
     *     // ... data to create a ChapterState
     *   }
     * })
     *
     */
    create<T extends ChapterStateCreateArgs>(args: Prisma.SelectSubset<T, ChapterStateCreateArgs<ExtArgs>>): Prisma.Prisma__ChapterStateClient<runtime.Types.Result.GetResult<Prisma.$ChapterStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ChapterStates.
     * @param {ChapterStateCreateManyArgs} args - Arguments to create many ChapterStates.
     * @example
     * // Create many ChapterStates
     * const chapterState = await prisma.chapterState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ChapterStateCreateManyArgs>(args?: Prisma.SelectSubset<T, ChapterStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ChapterStates and returns the data saved in the database.
     * @param {ChapterStateCreateManyAndReturnArgs} args - Arguments to create many ChapterStates.
     * @example
     * // Create many ChapterStates
     * const chapterState = await prisma.chapterState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ChapterStates and only return the `userId`
     * const chapterStateWithUserIdOnly = await prisma.chapterState.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ChapterStateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ChapterStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChapterStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ChapterState.
     * @param {ChapterStateDeleteArgs} args - Arguments to delete one ChapterState.
     * @example
     * // Delete one ChapterState
     * const ChapterState = await prisma.chapterState.delete({
     *   where: {
     *     // ... filter to delete one ChapterState
     *   }
     * })
     *
     */
    delete<T extends ChapterStateDeleteArgs>(args: Prisma.SelectSubset<T, ChapterStateDeleteArgs<ExtArgs>>): Prisma.Prisma__ChapterStateClient<runtime.Types.Result.GetResult<Prisma.$ChapterStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ChapterState.
     * @param {ChapterStateUpdateArgs} args - Arguments to update one ChapterState.
     * @example
     * // Update one ChapterState
     * const chapterState = await prisma.chapterState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ChapterStateUpdateArgs>(args: Prisma.SelectSubset<T, ChapterStateUpdateArgs<ExtArgs>>): Prisma.Prisma__ChapterStateClient<runtime.Types.Result.GetResult<Prisma.$ChapterStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ChapterStates.
     * @param {ChapterStateDeleteManyArgs} args - Arguments to filter ChapterStates to delete.
     * @example
     * // Delete a few ChapterStates
     * const { count } = await prisma.chapterState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ChapterStateDeleteManyArgs>(args?: Prisma.SelectSubset<T, ChapterStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ChapterStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChapterStates
     * const chapterState = await prisma.chapterState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ChapterStateUpdateManyArgs>(args: Prisma.SelectSubset<T, ChapterStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ChapterStates and returns the data updated in the database.
     * @param {ChapterStateUpdateManyAndReturnArgs} args - Arguments to update many ChapterStates.
     * @example
     * // Update many ChapterStates
     * const chapterState = await prisma.chapterState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ChapterStates and only return the `userId`
     * const chapterStateWithUserIdOnly = await prisma.chapterState.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends ChapterStateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ChapterStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChapterStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ChapterState.
     * @param {ChapterStateUpsertArgs} args - Arguments to update or create a ChapterState.
     * @example
     * // Update or create a ChapterState
     * const chapterState = await prisma.chapterState.upsert({
     *   create: {
     *     // ... data to create a ChapterState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChapterState we want to update
     *   }
     * })
     */
    upsert<T extends ChapterStateUpsertArgs>(args: Prisma.SelectSubset<T, ChapterStateUpsertArgs<ExtArgs>>): Prisma.Prisma__ChapterStateClient<runtime.Types.Result.GetResult<Prisma.$ChapterStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ChapterStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterStateCountArgs} args - Arguments to filter ChapterStates to count.
     * @example
     * // Count the number of ChapterStates
     * const count = await prisma.chapterState.count({
     *   where: {
     *     // ... the filter for the ChapterStates we want to count
     *   }
     * })
    **/
    count<T extends ChapterStateCountArgs>(args?: Prisma.Subset<T, ChapterStateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ChapterStateCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ChapterState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChapterStateAggregateArgs>(args: Prisma.Subset<T, ChapterStateAggregateArgs>): Prisma.PrismaPromise<GetChapterStateAggregateType<T>>;
    /**
     * Group by ChapterState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterStateGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ChapterStateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ChapterStateGroupByArgs['orderBy'];
    } : {
        orderBy?: ChapterStateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ChapterStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ChapterState model
     */
    readonly fields: ChapterStateFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ChapterState.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ChapterStateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    chapter<T extends Prisma.ChapterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChapterDefaultArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ChapterState model
 */
export interface ChapterStateFieldRefs {
    readonly userId: Prisma.FieldRef<"ChapterState", 'String'>;
    readonly chapterId: Prisma.FieldRef<"ChapterState", 'String'>;
    readonly isUnlocked: Prisma.FieldRef<"ChapterState", 'Boolean'>;
    readonly isCompleted: Prisma.FieldRef<"ChapterState", 'Boolean'>;
}
/**
 * ChapterState findUnique
 */
export type ChapterStateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterState
     */
    select?: Prisma.ChapterStateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChapterState
     */
    omit?: Prisma.ChapterStateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterStateInclude<ExtArgs> | null;
    /**
     * Filter, which ChapterState to fetch.
     */
    where: Prisma.ChapterStateWhereUniqueInput;
};
/**
 * ChapterState findUniqueOrThrow
 */
export type ChapterStateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterState
     */
    select?: Prisma.ChapterStateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChapterState
     */
    omit?: Prisma.ChapterStateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterStateInclude<ExtArgs> | null;
    /**
     * Filter, which ChapterState to fetch.
     */
    where: Prisma.ChapterStateWhereUniqueInput;
};
/**
 * ChapterState findFirst
 */
export type ChapterStateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterState
     */
    select?: Prisma.ChapterStateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChapterState
     */
    omit?: Prisma.ChapterStateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterStateInclude<ExtArgs> | null;
    /**
     * Filter, which ChapterState to fetch.
     */
    where?: Prisma.ChapterStateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChapterStates to fetch.
     */
    orderBy?: Prisma.ChapterStateOrderByWithRelationInput | Prisma.ChapterStateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ChapterStates.
     */
    cursor?: Prisma.ChapterStateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChapterStates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChapterStates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ChapterStates.
     */
    distinct?: Prisma.ChapterStateScalarFieldEnum | Prisma.ChapterStateScalarFieldEnum[];
};
/**
 * ChapterState findFirstOrThrow
 */
export type ChapterStateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterState
     */
    select?: Prisma.ChapterStateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChapterState
     */
    omit?: Prisma.ChapterStateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterStateInclude<ExtArgs> | null;
    /**
     * Filter, which ChapterState to fetch.
     */
    where?: Prisma.ChapterStateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChapterStates to fetch.
     */
    orderBy?: Prisma.ChapterStateOrderByWithRelationInput | Prisma.ChapterStateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ChapterStates.
     */
    cursor?: Prisma.ChapterStateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChapterStates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChapterStates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ChapterStates.
     */
    distinct?: Prisma.ChapterStateScalarFieldEnum | Prisma.ChapterStateScalarFieldEnum[];
};
/**
 * ChapterState findMany
 */
export type ChapterStateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterState
     */
    select?: Prisma.ChapterStateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChapterState
     */
    omit?: Prisma.ChapterStateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterStateInclude<ExtArgs> | null;
    /**
     * Filter, which ChapterStates to fetch.
     */
    where?: Prisma.ChapterStateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChapterStates to fetch.
     */
    orderBy?: Prisma.ChapterStateOrderByWithRelationInput | Prisma.ChapterStateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ChapterStates.
     */
    cursor?: Prisma.ChapterStateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChapterStates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChapterStates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ChapterStates.
     */
    distinct?: Prisma.ChapterStateScalarFieldEnum | Prisma.ChapterStateScalarFieldEnum[];
};
/**
 * ChapterState create
 */
export type ChapterStateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterState
     */
    select?: Prisma.ChapterStateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChapterState
     */
    omit?: Prisma.ChapterStateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterStateInclude<ExtArgs> | null;
    /**
     * The data needed to create a ChapterState.
     */
    data: Prisma.XOR<Prisma.ChapterStateCreateInput, Prisma.ChapterStateUncheckedCreateInput>;
};
/**
 * ChapterState createMany
 */
export type ChapterStateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChapterStates.
     */
    data: Prisma.ChapterStateCreateManyInput | Prisma.ChapterStateCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ChapterState createManyAndReturn
 */
export type ChapterStateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterState
     */
    select?: Prisma.ChapterStateSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ChapterState
     */
    omit?: Prisma.ChapterStateOmit<ExtArgs> | null;
    /**
     * The data used to create many ChapterStates.
     */
    data: Prisma.ChapterStateCreateManyInput | Prisma.ChapterStateCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterStateIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ChapterState update
 */
export type ChapterStateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterState
     */
    select?: Prisma.ChapterStateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChapterState
     */
    omit?: Prisma.ChapterStateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterStateInclude<ExtArgs> | null;
    /**
     * The data needed to update a ChapterState.
     */
    data: Prisma.XOR<Prisma.ChapterStateUpdateInput, Prisma.ChapterStateUncheckedUpdateInput>;
    /**
     * Choose, which ChapterState to update.
     */
    where: Prisma.ChapterStateWhereUniqueInput;
};
/**
 * ChapterState updateMany
 */
export type ChapterStateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ChapterStates.
     */
    data: Prisma.XOR<Prisma.ChapterStateUpdateManyMutationInput, Prisma.ChapterStateUncheckedUpdateManyInput>;
    /**
     * Filter which ChapterStates to update
     */
    where?: Prisma.ChapterStateWhereInput;
    /**
     * Limit how many ChapterStates to update.
     */
    limit?: number;
};
/**
 * ChapterState updateManyAndReturn
 */
export type ChapterStateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterState
     */
    select?: Prisma.ChapterStateSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ChapterState
     */
    omit?: Prisma.ChapterStateOmit<ExtArgs> | null;
    /**
     * The data used to update ChapterStates.
     */
    data: Prisma.XOR<Prisma.ChapterStateUpdateManyMutationInput, Prisma.ChapterStateUncheckedUpdateManyInput>;
    /**
     * Filter which ChapterStates to update
     */
    where?: Prisma.ChapterStateWhereInput;
    /**
     * Limit how many ChapterStates to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterStateIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ChapterState upsert
 */
export type ChapterStateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterState
     */
    select?: Prisma.ChapterStateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChapterState
     */
    omit?: Prisma.ChapterStateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterStateInclude<ExtArgs> | null;
    /**
     * The filter to search for the ChapterState to update in case it exists.
     */
    where: Prisma.ChapterStateWhereUniqueInput;
    /**
     * In case the ChapterState found by the `where` argument doesn't exist, create a new ChapterState with this data.
     */
    create: Prisma.XOR<Prisma.ChapterStateCreateInput, Prisma.ChapterStateUncheckedCreateInput>;
    /**
     * In case the ChapterState was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ChapterStateUpdateInput, Prisma.ChapterStateUncheckedUpdateInput>;
};
/**
 * ChapterState delete
 */
export type ChapterStateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterState
     */
    select?: Prisma.ChapterStateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChapterState
     */
    omit?: Prisma.ChapterStateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterStateInclude<ExtArgs> | null;
    /**
     * Filter which ChapterState to delete.
     */
    where: Prisma.ChapterStateWhereUniqueInput;
};
/**
 * ChapterState deleteMany
 */
export type ChapterStateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ChapterStates to delete
     */
    where?: Prisma.ChapterStateWhereInput;
    /**
     * Limit how many ChapterStates to delete.
     */
    limit?: number;
};
/**
 * ChapterState without action
 */
export type ChapterStateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterState
     */
    select?: Prisma.ChapterStateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChapterState
     */
    omit?: Prisma.ChapterStateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterStateInclude<ExtArgs> | null;
};
//# sourceMappingURL=ChapterState.d.ts.map