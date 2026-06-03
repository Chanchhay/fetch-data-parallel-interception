import DashboardSideBar from "@/components/dashboard/DashboardSideBar";
import { Suspense } from "react";
import Loading from "./loading";

export default function DashboardLayout({
    children,
    products,
    blogs,
    settings,
}: {
    children: React.ReactNode;
    settings: React.ReactNode;
    products: React.ReactNode;
    blogs: React.ReactNode;
}) {
    return (
        <div className="grid grid-cols-4">
            <DashboardSideBar />
            <section className="grid col-span-3">
                <Suspense fallback={<Loading />}>
                    <div className="bg-red-600">{children}</div>
                    <div className="bg-green-500">{blogs}</div>
                    <div className="bg-blue-600">{products}</div>
                    <div className="bg-yellow-600">{settings}</div>
                </Suspense>
            </section>
        </div>
    );
}
