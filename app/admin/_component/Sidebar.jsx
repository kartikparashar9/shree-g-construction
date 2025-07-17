  import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="w-64 h-screen right-0 bg-gray-900 text-white p-4">
            <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
            <ul>
                <li className="mb-2"><Link href="/admin/uploads">Uploads</Link></li>
                <li className="mb-2"><Link href="/admin/manage-uploads">Manage-uploads</Link></li>
                <li className="mb-2"><Link href="/admin/manage-user">Manage-user</Link></li>
              <li className="mb-2"><Link href="/admin/contact">Contact</Link></li>

                

                

            </ul>
        </div>
    );
}