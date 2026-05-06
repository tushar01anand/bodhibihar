export const WHATSAPP_NUMBER = '917782019833'
export const CONTACT_EMAIL = 'team.bodhibihar@gmail.com'

export const createWhatsAppLink = (message) => {
  const encodedMessage = encodeURIComponent(message)

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
}
