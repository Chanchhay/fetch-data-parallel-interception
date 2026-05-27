"use client";

import { useRouter } from "next/navigation";
import Modal from "./ProductModal";

export default function RouteModal({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    const handleClose = () => {
        router.back();
    };

    return (
        <Modal isOpen={true} onClose={handleClose}>
            {children}
        </Modal>
    );
}
