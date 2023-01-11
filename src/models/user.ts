export type User = {
    membershipValidUntil: string; // isostring  (date en format string)
    isMembershipValid: boolean;
    isLogged: boolean;
}
