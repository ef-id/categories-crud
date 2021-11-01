import { useState, useEffect } from "react";

import AddCategory from "./AddCategory/AddCategory";
import EditCategory from "./EditCategory/EditCategory";

import { Container, Button, Row, Col } from "react-bootstrap";
import style from './Category.module.css'
import Swal from 'sweetalert2';

import * as requestService from '../../services/request';

const Category = () => {

    const [cat, setCategories] = useState([]);
    const [deleteItem, setDeleteItem] = useState();

    const [state, setState] = useState()

    const handleCallback = (childData) => {
        setState(childData);
    }

    const onDeleteHandler = (e) => {
        e.preventDefault();
        let id = e.target.parentElement.parentElement.dataset.id;

        Swal.fire({
            title: 'Are you sure to delete this category?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                requestService.deleteData(id)
                Swal.fire({
                    title: "Category was deleted",
                    icon: "success",
                    confirmButtonText: "Ok"
                }).then(() => {
                    setDeleteItem(result)
                })

            }
        })
    }

    useEffect(() => {
        requestService.getData()
            .then(data => setCategories(data))
    }, [deleteItem, state]);


    return (
        <Container className={style.container}>

            <Row className={style.headerRow}>
                <Col><h3>Categories</h3></Col>
                <Col className={style.addBtnCol}><AddCategory parentCallback={handleCallback}  /></Col>
            </Row>
            <Row>
                <div className={style.tableContainer}>
                    <ul className={style.table}>
                        <li className={style.tableHeader}>
                            <div className={`${style.col} ${style.col1}`}>Name</div>
                            <div className={`${style.col} ${style.col2}`}>Type</div>
                            <div className={`${style.col} ${style.col3}`}>Order</div>
                            <div className={`${style.col} ${style.col4}`}>Actions</div>
                        </li>
                        {cat.map(x => ( 
                            <li data-id={x.id} key={x.id} className={style.tableRow}>
                                <div className={`${style.col} ${style.col1}`} data-label="Name">{x.name}</div>
                                <div className={`${style.col} ${style.col2}`} data-label="Type">{x.type}</div>
                                <div className={`${style.col} ${style.col3}`} data-label="Order">{x.order}</div>
                                <div className={`${style.col} ${style.col4}`} data-label="Actions">
                                    <EditCategory id={x.id} parentCallback={handleCallback}  />
                                    <Button variant="outline-danger" size="sm" onClick={onDeleteHandler} className={style.deleteBtn}>Delete</Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Row>
        </Container>
    )
}

export default Category;