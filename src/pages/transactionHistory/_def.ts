import {QTableColumn} from "quasar";

export const columnsTransactionHistory: QTableColumn[] = [
    {
        label: 'No',
        name: 'no',
        field: 'no',
        align: 'center'
    },
    {
        label: 'Tanggal',
        name: 'date',
        field: 'date',
        align: 'center'
    },
    {
        label: 'Nomor Rekening',
        name: 'accountNumber',
        field: 'accountNumber',
        align: 'right'
    },
    {
        label: 'Biaya Admin',
        name: 'adminFee',
        field: 'adminFee',
        align: 'right'
    },
    {
        label: 'Total',
        name: 'totalAmount',
        field: 'totalAmount',
        align: 'right'
    },
    {
        label: 'Status',
        name: 'status',
        field: 'status',
        align: 'center'
    },
    {
        label: 'Action',
        name: 'action',
        field: 'action',
        align: 'center'
    }
];

