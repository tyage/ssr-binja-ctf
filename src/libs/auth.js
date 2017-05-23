export const isAuthenticated = (cookie) => cookie.get('username') !== undefined

export const login = (cookie, username) => cookie.set('username', username)
