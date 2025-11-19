export default function PrivateLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="private-container">
            <main>{children}</main>
        </div>
    )
}
