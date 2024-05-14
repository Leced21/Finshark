import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import CompanyPage from "../Pages/CompanyPages/CompanyPage";
import ProtectedRoute from "./ProtectedRoute";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
import SearchPage from "../Pages/SearchPage/SearchPage";
import DesignGuide from "../Pages/DesignGuide/DesignGuide";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import BalanceSheet from "../Components/BalanceSheet/BalanceSheet";
import CashflowStatement from "../Components/CashflowStatement/CashflowStatement";
import HistoricalDividend from "../Components/HistoricalDividend/HistoricalDividend";
import HomePage from "../Pages/HomePage/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "login", element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> },
            {
                path: "search",
                element: (
                    <ProtectedRoute>
                        <SearchPage />
                    </ProtectedRoute>
                ),
            },

            { path: "design-guide", element: <DesignGuide /> },

            {
                path: "company/:ticker",
                element: (
                    <ProtectedRoute>
                        <CompanyPage />
                    </ProtectedRoute>
                ),
                children: [
                    { path: "company-profile", element: <CompanyProfile /> },
                    { path: "income-statement", element: <IncomeStatement /> },
                    { path: "balance-sheet", element: <BalanceSheet /> },
                    { path: "cashflow-statement", element: <CashflowStatement /> },
                    { path: "historical-divided", element: <HistoricalDividend /> },

                ],
            },
        ],
    },
]);