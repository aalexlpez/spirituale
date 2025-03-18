import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CursoPayment from '../../components/CursoSpiritual/CursoPayment';

function PagoContent() {
    const searchParams = useSearchParams();
    // ...existing code...
    return (
        <div className='bg-themeLilac'>
            <CursoPayment />
        </div>
    );
}

export default function PagoPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PagoContent />
        </Suspense>
    );
}