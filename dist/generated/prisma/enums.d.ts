export declare const Role: {
    readonly STUDENT: "STUDENT";
    readonly ADMIN: "ADMIN";
    readonly PROMOTER: "PROMOTER";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const SlotStatus: {
    readonly AVAILABLE: "AVAILABLE";
    readonly BOOKED: "BOOKED";
    readonly COMPLETED: "COMPLETED";
};
export type SlotStatus = (typeof SlotStatus)[keyof typeof SlotStatus];
export declare const PassStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly EXHAUSTED: "EXHAUSTED";
    readonly EXPIRED: "EXPIRED";
};
export type PassStatus = (typeof PassStatus)[keyof typeof PassStatus];
export declare const BookingStatus: {
    readonly SCHEDULED: "SCHEDULED";
    readonly COMPLETED: "COMPLETED";
    readonly NO_SHOW: "NO_SHOW";
    readonly CANCELLED: "CANCELLED";
};
export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus];
export declare const ReferralStatus: {
    readonly PENDING: "PENDING";
    readonly CLEARED: "CLEARED";
    readonly REFUNDED: "REFUNDED";
};
export type ReferralStatus = (typeof ReferralStatus)[keyof typeof ReferralStatus];
export declare const PayoutStatus: {
    readonly REQUESTED: "REQUESTED";
    readonly PROCESSING: "PROCESSING";
    readonly PAID: "PAID";
    readonly REJECTED: "REJECTED";
};
export type PayoutStatus = (typeof PayoutStatus)[keyof typeof PayoutStatus];
//# sourceMappingURL=enums.d.ts.map