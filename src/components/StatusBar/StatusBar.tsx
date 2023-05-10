import style from './StatusBar.module.css';

export type StatusBarType = {
  message: string;
  isSuccess: boolean;
};

const StatusBar = ({ status: { message, isSuccess } }: { status: StatusBarType }) => {
  const statusStyle = isSuccess ? style.success : style.fail;

  return (
    <section className={style.wrapper}>
      <div className={` ${style.common}  ${statusStyle} }`}>{message}</div>
    </section>
  );
};

export default StatusBar;
