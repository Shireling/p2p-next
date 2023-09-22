'use client'

import { useGetAllPaymentsQuery } from "@/redux/queries/payments-queries"

export default function Activity() {
  const { data } = useGetAllPaymentsQuery('/')
  
  return (
    <div>
      <h3 style={{marginBottom: 16}}>Payment Activity</h3>
      {
        data && data?.payments.items.map((payment: any) => {
          return (
            <div key={payment.id.toString()} className='row-item'>
              <p>{payment.recipient}</p>
              <p>${payment.amount.toLocaleString()}</p>
            </div>
          )
        })
      }
    </div>
  )
}
