import { ROLES, User } from "./01-enum"

const currentUser: User = {
  username: 'nico',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true
  } else {
    return false
  }
}

console.log('checkAdminRole', checkAdminRole())

export const checkRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true
  } else {
    return false
  }
}

console.log('checkRole', checkRole())


export const checkRole2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true
  } else {
    return false
  }
}

console.log('checkRole2', checkRole2([ROLES.ADMIN, ROLES.SELLER]))

export const checkRole3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true
  } else {
    return false
  }
}

console.log('checkRole3', checkRole3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER))
