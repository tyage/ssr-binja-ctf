export const isAuthenticated = (cookie) => cookie.get('username') !== undefined

export const login = (cookie, username) => cookie.set('username', username)

export const logout = (cookie) => {
  Object.keys(cookie.getAll()).forEach((key) => cookie.remove(key))
}
