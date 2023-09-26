'use server'

export const sendPayment = async (recipient: string, amount: number) => {
  try {
    const res = await fetch('/api/payments/send', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({recipient, amount})
    })      
  } catch(err) {
    console.error(err)
  }
}
