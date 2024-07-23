export interface Transaction {
    id: number;
    accountNumber: string;
    transactionType: 'Transfer'; // Assuming all transactions are transfers in this data
    description: string;
    destinationBank: string;
    destinationBankCode: string;
    adminFee: number;
    totalAmount: number;
    date: string;
    status: 'Succeed' | 'Failed';
}

export interface TransactionData {
    status: number;
    transactions: Transaction[];
}

export const data: TransactionData = {
    status: 200,
    transactions: [
        {
            id: 1,
            accountNumber: '100000001',
            transactionType: 'Transfer',
            description: 'Transfer to Jane Smith',
            destinationBank: 'ABC Bank',
            destinationBankCode: '123456',
            adminFee: 2500.00,
            totalAmount: 102500.00,
            date: '2023-06-01 10:30',
            status: 'Succeed'
        },
        {
            id: 2,
            accountNumber: '100000011',
            transactionType: 'Transfer',
            description: 'Transfer to Bob Williams',
            destinationBank: 'XYZ Bank',
            destinationBankCode: '789012',
            adminFee: 6500.00,
            totalAmount: 1006500.00,
            date: '2023-06-05 03:15',
            status: 'Failed'
        },
        {
            id: 3,
            accountNumber: '100000111',
            transactionType: 'Transfer',
            description:
                'Transfer to Emily Davis',
            destinationBank: 'ZZZ Bank',
            destinationBankCode: '997021',
            adminFee: 1500.00,
            totalAmount: 501500.00,
            date: '2023-06-10 11:45',
            status: 'Succeed'
        }
    ]
}

export const transactionTypeOptions: any = [
    {
        label: 'Deposit',
        value: 'Deposit'
    },
    {
        label: 'Withdrawal',
        value: 'Deposit'
    },
    {
        label: 'Transfer',
        value: 'Transfer'
    },
    {
        label: 'Payment',
        value: 'Payment'
    },
    {
        label: 'Loan',
        value: 'Loan'
    },
    {
        label: 'Interest',
        value: 'Interest'
    },
    {
        label: 'Fee',
        value: 'Fee'
    },
    {
        label: 'Refund',
        value: 'Refund'
    },
    {
        label: 'Chargeback',
        value: 'Chargeback'
    },
    {
        label: 'Bill Payment',
        value: 'Bill Payment'
    }
];

export const statusTypeOptions: any = [
    {
        label: 'Succeed',
        value: 'Succeed'
    },
    {
        label: 'Failed',
        value: 'Failed'
    }
]