import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../store/user-ctx';
import ModalContext from '../store/modal-ctx';
import Highlight from '../layout/ui/text/Hightligtht';
import Input from '../layout/ui/input/Input';

import classes from './UserForm.module.css';
import btnClasses from '../layout/ui/button/Button.module.css';
import iptClasses from '../layout/ui/input/Input.module.css';
import txtClasses from '../layout/ui/text/Highlight.module.css';

const UserForm = () => {
  const ctx = useContext(UserContext);
  const modalCtx = useContext(ModalContext);

  const invalidName = !/^[가-힣a-zA-z]+$/.test(ctx.userName.trim());

  const history = useHistory();

  const handleNameChange = (e) => {
    ctx.onSetName(e.target.value);
  };

  const handleGenderSelect = (e) => {
    ctx.onSelectGender(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (invalidName && !ctx.userGender) {
      modalCtx.onSetMessage('잘못된 이름입니다! & 성별을 선택해주세요!');
      modalCtx.onSetModal(true);
    } else if (!ctx.userName) {
      modalCtx.onSetMessage('이름을 입력해주세요!');
      modalCtx.onSetModal(true);
    } else if (!ctx.userGender) {
      modalCtx.onSetMessage('성별을 선택해주세요!');
      modalCtx.onSetModal(true);
    } else if (invalidName) {
      modalCtx.onSetMessage('올바른 이름이 아닙니다!');
      modalCtx.onSetModal(true);
    } else {
      history.push('/example');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={classes.name}>
        <Highlight className={txtClasses.label}>이름</Highlight>
        <Input
          type='text'
          value={ctx.userName}
          name='name-input'
          onChange={handleNameChange}
        />
      </div>
      <div className={classes.genderSelect}>
        <Highlight className={txtClasses.label}>성별</Highlight>
        <div className={classes.genderSelect}>
          <Input
            className={`${iptClasses.control}${
              !invalidName === false ? iptClasses.invalid : ''
            }`}
            type='radio'
            name='gender-select'
            value='남자'
            onClick={handleGenderSelect}
          />
          <Input
            type='radio'
            name='gender-select'
            value='여자'
            onClick={handleGenderSelect}
          />
        </div>
      </div>
      <button className={btnClasses.btn} disabled={ctx.isFormValid}>
        <span style={{ fontWeight: 'bold' }}>검사하기</span>
      </button>
    </form>
  );
};

export default UserForm;
