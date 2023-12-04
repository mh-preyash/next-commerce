import { useCallback, useEffect, useRef, useState } from 'react';
import '../app/multiRangeSlider.css';
import CustomInput from './CustomInput';

interface IMultiRangeSlider {
  min: number;
  max: number;
  onChange: (data: { min: number; max: number }) => void;
}

export const MultiRangeSlider = ({ min, max, onChange }: IMultiRangeSlider) => {
  const [minVal, setMinVal] = useState<number>(min);
  const [maxVal, setMaxVal] = useState<number>(max);
  const minValRef = useRef<number>(min);
  const maxValRef = useRef<number>(max);
  const range = useRef<HTMLDivElement | null>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
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
            type="number"
            placeholder="min"
            value={minVal.toString()}
            min={min}
            max={max}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setMinVal(e.target.valueAsNumber);
            }}
          />
          <CustomInput
            type="number"
            placeholder="max"
            value={maxVal.toString()}
            min={min - 1}
            max={max}
            onChange={(e) => {
              setMaxVal(e.target.valueAsNumber);
            }}
          />
        </div>
      </div>
    </div>
  );
};
