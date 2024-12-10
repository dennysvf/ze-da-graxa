import React from 'react';
import styles from './DateRangePicker.module.scss';

export interface DateRangePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  onStartDateChange: (date: Date | null) => void;
  onEndDateChange: (date: Date | null) => void;
  className?: string;
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  className,
}) => {
  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toISOString().split('T')[0];
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value ? new Date(e.target.value) : null;
    onStartDateChange(date);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value ? new Date(e.target.value) : null;
    onEndDateChange(date);
  };

  return (
    <div className={`${styles.wrapper} ${className || ''}`}>
      <div className={styles.field}>
        <label htmlFor="start-date">De</label>
        <input
          type="date"
          id="start-date"
          value={formatDate(startDate)}
          onChange={handleStartDateChange}
          max={formatDate(endDate)}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="end-date">Até</label>
        <input
          type="date"
          id="end-date"
          value={formatDate(endDate)}
          onChange={handleEndDateChange}
          min={formatDate(startDate)}
        />
      </div>
    </div>
  );
};
