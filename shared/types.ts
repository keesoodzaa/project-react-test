interface UserData {
    name: string;
    surname: string;
    gender: string;
    dateOfBirth: string;
    planCode: string;
    premiumPerYear: number;
    paymentFrequency: string;
  }

interface CostData {
    cost: number
  }

export type { UserData, CostData }