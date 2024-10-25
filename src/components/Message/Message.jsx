//!
//!react and libraries
//!
import {ToastContainer} from 'react-toastify'; //!
//!styles
//!
import 'react-toastify/dist/ReactToastify.css';
import css from './Message.module.css'; //!
//!
//!component
//!
//!
//!helpers
//!
//!
//!assets
//!
//!
//!myRedux
//!

export default function Message() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastClassName={css.message}
      progressClassName={css.progress}
    />
  );
}
