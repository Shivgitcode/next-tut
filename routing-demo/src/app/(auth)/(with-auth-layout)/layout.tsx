
export default function authLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h2>inner layout</h2>
            {children}
        </div>
    )
}
