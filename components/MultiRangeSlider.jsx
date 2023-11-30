import { useCallback, useEffect, useRef, useState } from 'react';
import '../app/multiRangeSlider.css';
import CustomInput from './CustomInput';

const Input = ({
  placeholder = 'Search',
  type = 'text',
  rounded,
  className,
  borderDark = false,
  noBorder = true,
  normalLeftPadding,
  bgWhite,
  helperText = '',
  ...props
}) => {
  return (
    <>
      <input
        {...props}
        type={type}
        className={`py-3 ${normalLeftPadding ? 'pl-4' : 'pl-10'} block pr-4 outline-none ${
          rounded ? 'rounded-full' : 'rounded'
        } text-sm  ${className}  ${
          !noBorder ? `border ${borderDark ? `border-primary` : `border-gray`}` : 'bg-searchBg'
        } ${bgWhite ? 'bg-white' : ''}`}
        placeholder={placeholder}
      />
      {helperText ? <small className="pl-4 text-secondary">{helperText}</small> : null}
    </>
  );
};

export const MultiRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);
    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);
    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 && '5' }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
      />
      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="flex justify-between gap-6 pt-8">
          <CustomInput
            placeholder="min"
            normalLeftPadding
            noBorder={false}
            value={minVal}
            min={min}
            max={max}
            onChange={(e) => {
              setMinVal(e.target.value);
            }}
          />
          <CustomInput
            placeholder="max"
            normalLeftPadding
            noBorder={false}
            value={maxVal}
            min={min - 1}
            max={max}
            onChange={(e) => {
              setMaxVal(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};
