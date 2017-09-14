export const isAuthenticated = (cookie) => cookie.get('username') !== undefined

export const login = (cookie, username) => cookie.set('username', username)

export const logout = (cookie) => {
  [ 'username', 'idols' ].forEach((key) => cookie.remove(key))
}
