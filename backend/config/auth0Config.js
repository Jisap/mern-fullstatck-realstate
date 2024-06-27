

import { auth } from "express-oauth2-jwt-bearer"

const jwtCheck = auth({                                         // Conecta auth0 del frontend con el backend
  audience: "http://localhost:8000",
  issuerBaseURL: "https://dev-txipfgukw38o0bag.us.auth0.com",
  tokenSigningAlg: "RS256"
})

export default jwtCheck