import { Role } from './role'
import { Gender } from './gender'

export interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    dateOfBirth?: string,
    gender?: Gender,
    interest?: string,
    address?: string,
    phone?: string,
    role: Role
}