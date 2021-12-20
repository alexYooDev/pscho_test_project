import { useState } from 'react';
import { css } from '@emotion/react';
import BounceLoader from 'react-spinners/BounceLoader';
import { Mobile } from '../layout/viewport/Mobile';
import { Desktop } from '../layout/viewport/Desktop';

const override = css`
  display: fixed;
  margin: auto;
  border-color: red;
  width: 100%;
  height: 100%;

  > span {
    height: 250px;
    width: 250px;
    background-color: #ffffff;
    border-radius: 100%;
    opacity: 0.6;
    left: 40%;
    margin-top: 170px;
  }
`;

const Loading = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#ffffff');

  return (
    <div className='sweet-loading'>
      <Mobile>
        <BounceLoader
          color={color}
          loading={loading}
          css={override}
          size={100}
        />
      </Mobile>
      <Desktop>
        <BounceLoader
          color={color}
          loading={loading}
          css={override}
          size={250}
        />
      </Desktop>
    </div>
  );
};

export default Loading;
