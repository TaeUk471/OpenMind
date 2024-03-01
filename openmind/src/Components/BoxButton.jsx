import { ReactComponent as ArrowToPage } from '../Assets/Icon/iconArrowToPage.svg';
import Styles from '../Styles/BoxButton.module.css';

const BoxButton = ({
  theme = 'fill',
  state = 'default',
  size = 'medium',
  text = '질문 받기',
}) => {
  const handleOnClick = (e) => {
    // 필요한 방식으로 바꾸세요
    console.log(1);
  };

  return (
    <button
      type='button'
      className={`${Styles.boxButton} ${Styles[theme]} ${Styles[size]}`}
      disabled={state === 'inactive' ? true : false}
      onClick={handleOnClick}
    >
      {text}
      <ArrowToPage className={`${Styles.arrowToPageIcon} ${Styles[theme]}`} />
    </button>
  );
};

export default BoxButton;
