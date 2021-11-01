import { useState, useEffect } from 'react';

import { Button} from 'react-bootstrap'
import Swal from 'sweetalert2';

import ModalForm from '../ModalForm/ModalForm';

import style from './EditCategory.module.css';

import { editData, getOne } from '../../../services/request'

const EditCategory = (props) => {

    const [show, setShow] = useState(false);
    const [savedItem, setSavedItem] = useState([]);
    const [kind, setType] = useState(savedItem.type);

    useEffect(() => {
        getOne(props.id)
            .then(data => {
                setSavedItem(data)
            })

    }, [props.id, savedItem.type])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onTypeChange = (e) => {
        const selectedType = e.target.value;
        setType(selectedType);
    }

    const onSubmitHandler = (data, e) => {
        e.preventDefault();
        let form = e.target;

        const name = form.catName.value;
        const order = form.order.value;

        let dataContent = {
            name,
            order,
            type: kind
        }

        editData(props.id, dataContent)
            .then(res => res.json())
            .then((data) => {
                Swal.fire({
                    text: 'You update category successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                    .then(() => {
                        savedItem.type = kind;
                        props.parentCallback(data);
                        handleClose();
                    })

            })
    }

    return (
        <>
            <Button variant="outline-success" size="sm" onClick={handleShow} className={style.editBtn}>Edit</Button>

            <ModalForm
                showModal={show}
                closeModal={handleClose}
                btnOpenModalName="Edit"
                formTitle="Update Category"
                onSubmitHandler={onSubmitHandler}
                onChangeSelectHandler={onTypeChange}
                name={savedItem.name}
                order={savedItem.order}
                type={savedItem.type}
                btnName="Update"
                hidden={style.hideBtn}
            />
        </>
    )
}

export default EditCategory;