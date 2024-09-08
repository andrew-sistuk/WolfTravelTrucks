//!react and libraries
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { yupResolver } from '@hookform/resolvers/yup';
//!styles
import css from './BookForm.module.css';
import 'react-datepicker/dist/react-datepicker.css'; //!component
import Button from '../Buttons/Button.jsx';
import clsx from 'clsx';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useForm } from 'react-hook-form'; //!helpers
//!helpers
//!helpers
//!assets
//!myRedux

function BookForm() {
  const [startDate, setStartDate] = useState();
  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Name is required')
      .min(3, 'The name must contain at least 3 characters'),
    email: yup
      .string()
      .required('Email is required')
      .email('Enter a valid email ***@***.**'),
    // bookDate: yup
    //   .date()
    //   .required('Date is required')
    //   .min(
    //     new Date().setHours(0, 0, 0, 0),
    //     'The date must be current or in the future'
    //   )
    //   .typeError('Please enter a valid date'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit() {
    toast('Booking sent!');
  }

  return (
    <form
      className={css.container}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      noValidate
    >
      <h3 className={css.header}>Book your campervan now</h3>
      <p className={css.paragraph}>
        Stay connected! We are always ready to help you.
      </p>
      <input
        className={css.field}
        {...register('name')}
        type="text"
        placeholder="Name*"
        data-tooltip-id="my-tooltip-name"
      />
      <ReactTooltip
        id="my-tooltip-name"
        place="top-end"
        content={
          errors.name ? errors.name.message : 'You must write you real name'
        }
      />
      <input
        className={css.field}
        {...register('email')}
        type="email"
        placeholder="Email*"
        data-tooltip-id="my-tooltip-email"
      />
      <ReactTooltip
        id="my-tooltip-email"
        place="top-end"
        content={
          errors.email
            ? errors.email.message
            : 'You must write your email and then we can connect with you'
        }
      />
      <label
        className={css.label}
        htmlFor="date"
        data-tooltip-id="my-tooltip-date"
      >
        <DatePicker
          className={css.field}
          selected={startDate}
          minDate={new Date()}
          popperPlacement="top-start"
          onChange={date => setStartDate(date)}
          placeholderText="Booking date*"
          id="date"
        />
        <ReactTooltip
          id="my-tooltip-date"
          place="top-end"
          content={
            errors.bookDate
              ? errors.bookDate.message
              : 'Date can be only current and future'
          }
        />
      </label>
      <textarea
        className={clsx(css.field, css.comment)}
        placeholder="Comment"
        data-tooltip-id="my-tooltip-comment"
      ></textarea>
      <ReactTooltip
        id="my-tooltip-comment"
        place="top-end"
        content="You can write some specific information here"
      />
      <Button value="Send" type="submit" />
    </form>
  );
}

export default BookForm;
