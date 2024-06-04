// /* eslint-disable no-unused-vars */


  
//   // ========================================
  
  
  
//   declare type LoginUser = {
//     email: string;
//     password: string;
//   };
  
//   // declare type User = {
//   //   $id: string;
//   //   email: string;
//   //   userId: string;
//   //   dwollaCustomerUrl: string;
//   //   dwollaCustomerId: string;
//   //   firstName: string;
//   //   lastName: string;
//   //   name: string;
//   //   address1: string;
//   //   city: string;
//   //   state: string;
//   //   postalCode: string;
//   //   dateOfBirth: string;
//   //   ssn: string;
//   // };
  
//   declare type NewUserParams = {
//     userId: string;
//     email: string;
//     name: string;
//     password: string;
//   };
  
//   // declare type Account = {
//   //   id: string;
//   //   availableBalance: number;
//   //   currentBalance: number;
//   //   officialName: string;
//   //   mask: string;
//   //   institutionId: string;
//   //   name: string;
//   //   type: string;
//   //   subtype: string;
//   //   appwriteItemId: string;
//   //   shareableId: string;
//   // };
  
//   // declare type Transaction = {
//   //   id: string;
//   //   $id: string;
//   //   name: string;
//   //   paymentChannel: string;
//   //   type: string;
//   //   accountId: string;
//   //   amount: number;
//   //   pending: boolean;
//   //   category: string;
//   //   date: string;
//   //   image: string;
//   //   $createdAt: string;
//   //   channel: string;
//   //   senderBankId: string;
//   //   receiverBankId: string;
//   // };
  
//   // declare type Bank = {
//   //   $id: string;
//   //   accountId: string;
//   //   bankId: string;
//   //   accessToken: string;
//   //   fundingSourceUrl: string;
//   //   userId: string;
//   //   shareableId: string;
//   // };
  

  
//   declare interface HeaderBoxProps {
//     type?: "title" | "greeting";
//     title: string;
//     subtext: string;
//     user?: string;
//   }
  
 
//   declare interface PageHeaderProps {
//     topTitle: string;
//     bottomTitle: string;
//     topDescription: string;
//     bottomDescription: string;
//     connectBank?: boolean;
//   }
  
//   declare interface PaginationProps {
//     page: number;
//     totalPages: number;
//   }
  
  
  
//   // declare type User = sdk.Models.Document & {
//   //   accountId: string;
//   //   email: string;
//   //   name: string;
//   //   items: string[];
//   //   accessToken: string;
//   //   image: string;
//   // };
  
//   declare interface AuthFormProps {
//     type: "sign-in" | "sign-up";
//   }
  
//   declare interface BankDropdownProps {
//     accounts: Account[];
//     // setValue?: UseFormSetValue<any>;
//     otherStyles?: string;
//   }
  
//   declare interface BankTabItemProps {
//     account: Account;
//     appwriteItemId?: string;
//   }
  
//   declare interface TotalBalanceBoxProps {
//     accounts: Account[];
//     totalBanks: number;
//     totalCurrentBalance: number;
//   }
  
 
  
//   // declare interface RightSidebarProps {
//   //   user: User;
//   //   transactions: Transaction[];
//   //   banks: Bank[] & Account[];
//   // }
  
  
//   declare interface RecentTransactionsProps {
//     accounts: Account[];
//     transactions: Transaction[];
//     appwriteItemId: string;
//     page: number;
//   }
  
//   declare interface TransactionHistoryTableProps {
//     transactions: Transaction[];
//     page: number;
//   }
  
//   declare interface CategoryBadgeProps {
//     category: string;
//   }
  
//   declare interface TransactionTableProps {
//     transactions: Transaction[];
//   }
  
//   declare interface CategoryProps {
//     category: CategoryCount;
//   }
  
//   declare interface DoughnutChartProps {
//     accounts: Account[];
//   }
  
//   declare interface PaymentTransferFormProps {
//     accounts: Account[];
//   }

  
 
//   declare interface CreateTransactionProps {
//     name: string;
//     amount: string;
//     senderId: string;
//     senderBankId: string;
//     receiverId: string;
//     receiverBankId: string;
//     email: string;
//   }
  
//   declare interface getTransactionsByBankIdProps {
//     bankId: string;
//   }
  
//   declare interface signInProps {
//     email: string;
//     password: string;
//   }
  

  

  

  
//   declare interface getBankByAccountIdProps {
//     accountId: string;
//   }