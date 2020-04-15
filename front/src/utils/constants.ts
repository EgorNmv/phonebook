type Warnings = {
    firstName: string,
    secondName: string,
    phone: string,
    cabinet: string,
    post: string,
    internalPhone: string
}

export const WARNINGS: Warnings = {
    firstName: "First name is required",
    secondName: "Second name is required",
    phone: "Phone value must be between 80000000000 and 89999999999",
    cabinet: "Cabinet value must be between 1 and 500",
    post: "Post value length must be between 5 and 30",
    internalPhone: "Internal phone value must be between 100 and 1000"
};