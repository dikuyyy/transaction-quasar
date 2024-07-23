import {RouteRecordRaw} from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import TransactionHistoryPage from "../pages/transactionHistory/TransactionHistoryPage.vue";
import DetailTransactionPage from "../pages/transactionHistory/DetailTransactionPage.vue";

const useRoute = (routes: RouteRecordRaw[]) => {
    return routes.map((route: RouteRecordRaw) => ({
        ...route,
        meta: {
            layout: MainLayout,
            ...route.meta
        }
    }))
}

const routes: RouteRecordRaw[] = useRoute([
    {
        path: '/',
        name: 'transaction-history',
        component: TransactionHistoryPage,
    },
    {
        path: '/detail/:id',
        name:'detail-transaction',
        component: DetailTransactionPage
    }
])

export default routes;