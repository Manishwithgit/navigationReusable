import { useState } from "react";
import Modal from "../components/Model";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose =()=>{
        setShowModal(false)
    }
    const actionBar = <div>
        <Button onClick={handleClose} primary>i accept</Button>
    </div>

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar} >
        <p>Here is an important agreement for you to accept</p>
    </Modal>
    );
     

    return(
        <div>
            <Button onClick={handleClick} primary> Open Modal </Button>
            {/* {showModal && <Modal onClose={handleClose} />} */}
            {/* <Modal/> */}
            {showModal && modal} 
            <p>lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit sed magna vel volutpat. Sed augue leo, ultricies sit amet convallis id, euismod sollicitudin libero. Morbi sed nulla non orci egestas interdum. Proin congue dui id malesuada tincidunt. Vestibulum mauris eros, fringilla quis elementum non, gravida at ante</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit sed magna vel volutpat. Sed augue leo, ultricies sit amet convallis id, euismod sollicitudin libero. Morbi sed nulla non orci egestas interdum. Proin congue dui id malesuada tincidunt. Vestibulum mauris eros, fringilla quis elementum non, gravida at ante</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit sed magna vel volutpat. Sed augue leo, ultricies sit amet convallis id, euismod sollicitudin libero. Morbi sed nulla non orci egestas interdum. Proin congue dui id malesuada tincidunt. Vestibulum mauris eros, fringilla quis elementum non, gravida at ante</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit sed magna vel volutpat. Sed augue leo, ultricies sit amet convallis id, euismod sollicitudin libero. Morbi sed nulla non orci egestas interdum. Proin congue dui id malesuada tincidunt. Vestibulum mauris eros, fringilla quis elementum non, gravida at ante</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit sed magna vel volutpat. Sed augue leo, ultricies sit amet convallis id, euismod sollicitudin libero. Morbi sed nulla non orci egestas interdum. Proin congue dui id malesuada tincidunt. Vestibulum mauris eros, fringilla quis elementum non, gravida at ante</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit sed magna vel volutpat. Sed augue leo, ultricies sit amet convallis id, euismod sollicitudin libero. Morbi sed nulla non orci egestas interdum. Proin congue dui id malesuada tincidunt. Vestibulum mauris eros, fringilla quis elementum non, gravida at ante</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit sed magna vel volutpat. Sed augue leo, ultricies sit amet convallis id, euismod sollicitudin libero. Morbi sed nulla non orci egestas interdum. Proin congue dui id malesuada tincidunt. Vestibulum mauris eros, fringilla quis elementum non, gravida at ante</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit sed magna vel volutpat. Sed augue leo, ultricies sit amet convallis id, euismod sollicitudin libero. Morbi sed nulla non orci egestas interdum. Proin congue dui id malesuada tincidunt. Vestibulum mauris eros, fringilla quis elementum non, gravida at ante</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit sed magna vel volutpat. Sed augue leo, ultricies sit amet convallis id, euismod sollicitudin libero. Morbi sed nulla non orci egestas interdum. Proin congue dui id malesuada tincidunt. Vestibulum mauris eros, fringilla quis elementum non, gravida at ante</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit sed magna vel volutpat. Sed augue leo, ultricies sit amet convallis id, euismod sollicitudin libero. Morbi sed nulla non orci egestas interdum. Proin congue dui id malesuada tincidunt. Vestibulum mauris eros, fringilla quis elementum non, gravida at ante</p>
            {/* <Button onClick={handleClick} primary> Open Modal </Button>
            {showModal && modal}  */}
        </div>
    );

}
export default ModalPage;