
declare type User = {
  // $id: string; 
  email: string;
  // userId: string;
  // dwollaCustomerUrl: string;
  // dwollaCustomerId: string;
  firstName: string;
  lastName: string;
  // name: string;
  // address1: string;
  // city: string;
  // state: string;
  // postalCode: string;
  // dateOfBirth: string;
  // ssn: string;
};






declare type Account = {
  id: string;
  availableBalance: number;
  currentBalance: number;
  officialName: string;
  mask: string;
  institutionId: string;
  name: string;
  type: string;
  subtype: string;
  appwriteItemId: string;
  shareableId: string;
};

declare type Transaction = {
  id: string;
  $id: string;
  name: string;
  paymentChannel: string;
  type: string;
  accountId: string;
  amount: number;
  pending: boolean;
  category: string;
  date: string;
  image: string;
  $createdAt: string;
  channel: string;
  senderBankId: string;
  receiverBankId: string;
};

declare type Bank = {
  $id: string;
  accountId: string;
  bankId: string;
  accessToken: string;
  fundingSourceUrl: string;
  userId: string;
  shareableId: string;
};

declare interface TotalBalanceProps {
  accounts: Account[];
  totalCurrentBalance: number;
  totalBanks: any;
}

declare interface DoughnutChartProps {
  accounts: Account[];
}

declare interface RightSidebarProps {
  user: User;
  transactions: Transaction[];
  banks: Bank[] & Account[];
}


declare interface HeaderBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}

  
declare interface CreditCardProps {
  account: Account;
  userName: string;
  showBalance?: boolean;
}
