import client_secret from './client_secret.json'

const user = USER
const refreshToken = REFRESH_TOKEN
const accessToken = ACCESS_TOKEN

export default {
  user,
  clientId: client_secret.web.client_id,
  clientSecret: client_secret.web.client_secret,
  refreshToken,
  accessToken
}