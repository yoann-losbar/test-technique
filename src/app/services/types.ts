export interface User {
  firstname: string
  lastname: string
}

export interface UserResponse {
  user: User
  token: string
}

export interface LoginRequest {
  username: string
  password: string
}

export interface Profile {
  firstname: string
  lastname: string
  phone: string
  profilePicture: string
  telegram: string
  whatsapp: string
  mail: string
  location: {
    city: string
    state: string
  }
}
