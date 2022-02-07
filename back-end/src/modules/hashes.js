import crypto from 'crypto';


export const getSaltedHash = (massage, salt) => {
  return crypto.createHmac('sha256', salt).update(massage).digest('base64')
}

export const generateSalt = (size) => {
  return crypto.randomBytes(size).toString('base64')
}