import Sidebar from '../../components/dashboard/sidebar';
import Headerdashboard from '../../components/dashboard/Headerdashboard'

export default function Layout({ children }) {
    return (
        <div className="Dashboards_flex">
            <Sidebar />
            <div className='form-dashboard-page pt-3 '>
                <div className="container">
                    <Headerdashboard />
                </div>
                {children}
            </div>
            <div id="overLay" className=''></div>
        </div>
    )
}