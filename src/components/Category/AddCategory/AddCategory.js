import { useState } from 'react';

import { Button} from 'react-bootstrap';
import Swal from 'sweetalert2';

import ModalForm from '../ModalForm/ModalForm';

import { addData } from '../../../services/request';

const AddCategory = (props) => {

    const [show, setShow] = useState(false);
    const [type, setType] = useState('Stream');


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onTypeChange = (e) => {
        const selectedType = e.target.selectedOptions[0].text;
        setType(selectedType);
    }

    const onSubmitHandler = (data, e) => {
        e.preventDefault();
        let form = e.target;

        let name = form.catName.value;
        let order = form.order.value;

        let dataContent = {
            name,
            order,
            type
        }

        addData(dataContent)
            .then(res => res.json())
            .then((result) => {
                
                Swal.fire({
                    text: 'You create new category successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                    .then(() => {
                        props.parentCallback(result)
                        handleClose();
                    })
            })
    }

    return (
        <>
            <Button onClick={handleShow} variant="outline-secondary">
                Create
            </Button>

            <ModalForm
                showModal={show}
                closeModal={handleClose}
                btnOpenModalName="Create"
                formTitle="Create New Category"
                onSubmitHandler={onSubmitHandler}
                type="Choose type"
                onChangeSelectHandler={onTypeChange}
                btnName="Add"
            />
        </>
    );
}

export default AddCategory;