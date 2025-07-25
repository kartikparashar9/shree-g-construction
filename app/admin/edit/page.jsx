// app/admin/edit/page.jsx

import React, { Suspense } from 'react'

// ✅ Lazy load EditProject to avoid useSearchParams SSR error
const EditProject = React.lazy(() => import('@/app/components/EditProject'))

export default function EditPage() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Suspense fallback={<div className="p-8 text-gray-600">Loading form...</div>}>
        <EditProject />
      </Suspense>
    </div>
  )
}
