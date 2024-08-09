import Sidebar from '../../components/dashboard/sidebar';

export default function Layout({ children }) {
    return (
        <div className="Dashboards_flex">
            <Sidebar />
            {children}
        </div>
    )
}