import jwt from 'jsonwebtoken'

export function login (req, res, next) {
  if (req.body.password != 'password') {
    res.status(401).json({ error: 'Identifiants invalides'})
  }
  
  res.json({
    email: req.body.email,
    token: jwt.sign({
      email: req.body.email,
    }, process.env.JWT_SECRET, { expiresIn: '24h'})
  })
}