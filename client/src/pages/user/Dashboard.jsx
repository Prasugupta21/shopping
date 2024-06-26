import React from 'react'
import Layout from '../../components/Layouts/Layout'
import UserMenu from '../../components/Layouts/UserMenu'
import { useAuth } from '../../context/Auth'
const Dashboard = () => {
  const [authData]=useAuth();
  return (
    <Layout title="Dashboard -Ecommerce App">

<div className="container-fluid m-3 p-3 ">
        
        <div className="row ">
        <div className="col-md-3">

        <UserMenu/>
        </div>
     <div className="col-md-9 ">
        <div className="card w-75 p-3 bg-light">

<h3>Name: {authData?.user?.name}</h3>
<h3>Email: {authData?.user?.email}</h3>
<h3>Address: {authData?.user?.address}</h3>
        </div>
     </div>

        </div>
        
        </div>
        </Layout>
  )
}

export default Dashboard;