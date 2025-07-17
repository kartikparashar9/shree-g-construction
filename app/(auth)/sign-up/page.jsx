import Manage from '@/app/admin/manage-uploads/page'
import Usermanage from '@/app/admin/manage-user/page'
import React from 'react'

function page() {
  return (
    <div>
      <Manage />
      <Usermanage/>
    </div>
  )
}

export default page