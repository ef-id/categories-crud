import { Button, Modal, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import style from './ModalForm.module.css'

const optionArr = ["Stream", "Movie", "Radio", "Series"];

const ModalForm = (props) => {

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    return (
        <>
            <Modal show={props.showModal} onHide={props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.formTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(props.onSubmitHandler)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name*</Form.Label>
                            <Form.Control type="text" name="catName" placeholder="Enter Category Name" defaultValue={props.name} {...register("catName", { required: true, minLength: 2 })} />
                            {errors.catName && errors.catName.type === "required" && <span className={style.errorMsg}>Category name is required</span>}
                            {errors.catName && errors.catName.type === "minLength" && <span className={style.errorMsg}>The field must be at least 2 characters</span>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Order</Form.Label>
                            <Form.Control type="text" name="order" placeholder="Enter Order" defaultValue={props.order} {...register("order", { pattern: /^\d+$/gm })} />
                            {errors.order && <span className={style.errorMsg}>The field must contains only digits</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Type*</Form.Label>
                            <Form.Select name="catType" defaultValue={props.type} onChange={props.onChangeSelectHandler}>
                                {optionArr.map((x, index) => <option key={index} value={x}>{x}</option>)}
                            </Form.Select>
                        </Form.Group>
                        <Button type="submit" variant="primary">{props.btnName}</Button>
                        <Button type="button" variant="secondary" className={`${style.resetBtn} ${props.hidden}`} onClick={() => reset()}>Reset</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalForm;