
import { useState } from 'react';
import { Delete } from '../../../icons/Delete';
import { Edit } from '../../../icons/Edit';
import './MyShop.css';
import { ModalShop } from './ModalShop/ModalShop';


export default function MyShop() {

    const [show, setShow] = useState(false);
    const [current, setCurrent] = useState("");

    const handleClose = () => {
        setShow(false);
        setCurrent("");
    };

    const handleShowChange = () => {
        setShow(true);
        setCurrent("change");
    };

    const handleShowAdd = () => {
        setShow(true);
        setCurrent("add");
    }

    const handleShowEdit = () => {
        setShow(true);
        setCurrent("edit");
    }

    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                <div>
                    <div className="d-flex justify-content-center">
                        <img
                            src="https://static.wikia.nocookie.net/7d71f1b9-1031-4486-b4ec-ce118cd48b55/scale-to-width/755"
                            alt="qwe"
                            height={200}
                            width={200}
                            className="image"
                        />
                    </div>
                    <h2 className="text-center mt-4">YOUR SHOP - aokigahara</h2>
                    <button className="upperCase button-change mt-2"
                        onClick={handleShowChange}
                    >Change data</button>
                </div>
            </div>

            <div className='d-flex gap-5 flex-wrap mt-5'>
                <div className="d-flex flex-wrap gap-5">

                    <div className="card-product-shop d-flex justify-content-center align-items-center">
                        <button className="add-button-shop" onClick={handleShowAdd}>+</button>
                    </div>


                    <div className="card-product-shop">
                        <img src="https://sun9-77.userapi.com/impg/DDwHIvqunssvgk_z08NVhI1nK9zbRvYiqp6b_w/RRtBl3f37FQ.jpg?size=510x510&quality=95&sign=31e88b113cabdab91c712d5a3e6ab449&c_uniq_tag=fQyt9TExm3lljaumKiopvvzEx4HbLthYZAUDQT1gHkc&type=album" alt="" />
                        <p className="card-shop-shop">sheydov</p>
                        <p className="card-title-shop">t-shirt aokigahara que</p>
                        <p className="card-price-shop">1500 ₽</p>
                        <div className="d-flex justify-content-center gap-3 align-items-center controls-shop-item">
                            <button className="edit-button-shop" onClick={handleShowEdit}><Edit /></button>
                            <button className="edit-button-shop"><Delete /></button>
                        </div>
                    </div>

                    <ModalShop
                        current={current}
                        setCurrent={setCurrent}
                        handleClose={handleClose}
                        show={show}
                    />
                </div>
            </div>
        </>
    )
}