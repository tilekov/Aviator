import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import AdminProductsList from '../AdminProductsList/AdminProductsList';

const AdminPage = () => {
    return (
        <div>
            <div className="admin-prod-list" style={{marginTop:"50px"}}>
                <AdminProductsList />
                <p style={{display: "flex", justifyContent: "center"}}><AddProduct /></p>
            </div>
        </div>
    );
};

export default AdminPage;