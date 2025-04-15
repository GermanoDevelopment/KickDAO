import { PlatformHeader } from "../../organisms/platformheader";

export default function PlatformLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex flex-col item-center justify-start">
            <PlatformHeader />
            {children}
        </main>
    );
}
