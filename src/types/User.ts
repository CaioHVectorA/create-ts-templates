export type UserRequired = {
    email: string,
    password: string,
    name: string
}

export type UserProtected = {
    id: string,
    email: string,
    name: string
}