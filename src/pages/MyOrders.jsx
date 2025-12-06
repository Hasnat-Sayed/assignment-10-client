import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { AuthContext } from '../provider/AuthProvider';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


const MyOrders = () => {


    const [myOrders, setMyOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        axios.get(`http://localhost:3000/orders?email=${user?.email}`)
            .then(res => {
                setMyOrders(res.data);
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
            })
    }, [user?.email])

    const downloadPDF = () => {
        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text("My Orders Report", 14, 20);

        const tableColumn = [
            "SL",
            "Product",
            "Buyer",
            "Price",
            "Qty",
            "Address",
            "Date",
            "Phone"
        ];

        const tableRows = [];

        myOrders.forEach((order, index) => {
            const row = [
                index + 1,
                order.productName,
                order.buyerName,
                order.price,
                order.quantity,
                order.address,
                order.date,
                order.phone,
            ];
            tableRows.push(row);
        });

        autoTable(doc, {
            startY: 30,
            head: [tableColumn],
            body: tableRows,
            styles: { fontSize: 9 },
            headStyles: {
                fillColor: [26, 115, 232],
                textColor: [255, 255, 255],
            },
        });

        doc.save("my_orders.pdf");
    };


    // console.log(myOrders)
    return (
        <div className='container bg-base-200 mx-auto pt-10 pb-16 px-4 lg:px-20 min-h-screen'>
            <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content">My <span className='text-primary'>Orders</span></h3>
            </div>


            {
                loading ? (<Loading></Loading>) : (
                    <div className="overflow-x-auto border border-neutral-300 rounded-2xl shadow-2xl">
                        <table className="table table-xs">
                            <thead className='text-secondary text-xl bg-base-300'>
                                <tr>
                                    <th ></th>
                                    <th>Product/Listing Name</th>
                                    <th>Buyer Name</th>
                                    <th>Price </th>
                                    <th>Quantity</th>
                                    <th>Address</th>
                                    <th>Date</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myOrders.map((order, index) =>
                                        <tr key={index} className='text-base'>
                                            <th>{index + 1}</th>
                                            <td>{order?.productName}</td>
                                            <td>{order?.buyerName}</td>
                                            <td>{order?.price}</td>
                                            <td>{order?.quantity}</td>
                                            <td>{order?.address}</td>
                                            <td>{order?.date}</td>
                                            <td>{order?.phone}</td>
                                        </tr>
                                    )
                                }


                            </tbody>

                        </table>

                    </div>
                )
            }
            <div className='flex items-center justify-center pt-10'>
                <button
                    onClick={downloadPDF}
                    className="btn btn-lg rounded-2xl btn-primary"
                >
                    Download Report PDF
                </button>
            </div>



        </div>
    );
};

export default MyOrders;