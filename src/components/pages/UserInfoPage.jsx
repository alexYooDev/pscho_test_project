import { useContext } from 'react';

import UserForm from '../user/UserForm';
import Modal from '../modal/Modal';
import Backdrop from '../modal/Backdrop';
import ModalContext from '../store/modal-ctx';
import Header from '../layout/ui/header/Header';
import Card from '../layout/ui/card/Card';

import cardClasses from '../layout/ui/card/Card.module.css';

const UserInfoPage= () => {
  const modalCtx = useContext(ModalContext);

  return (
    <Card className={cardClasses.cardUser}>
      <Header>직업 가치관 검사</Header>
      <UserForm onSetMessage={modalCtx.onSetMessage} onSetModal={modalCtx.onSetModalIsOpen}/>
      { modalCtx.modalIsOpen && <Backdrop onSetMessage={modalCtx.onSetMessage} onConfirm={modalCtx.onCloseModal}/>}
      { modalCtx.modalIsOpen && <Modal message={modalCtx.message} onConfirm={modalCtx.onCloseModal}/> }
    </Card>
  );
};


export default UserInfoPage;