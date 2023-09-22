export interface DataTypes {
  payments: {
    items: {
      id: number
      recipient: string
      amount: number
    }[]
  }
}
