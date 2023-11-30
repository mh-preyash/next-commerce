'use client';
import { useState } from 'react';
import StarRating from './StarRating';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import CustomTextarea from './CustomTextarea';

export default function WriteReviewForm({ review = false }) {
  const [rating, setRating] = useState(0);
  return (
    <form className="flex flex-col gap-4 p-4">
      {review ? <StarRating setRating={setRating} rating={rating} /> : null}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <CustomInput variant="flat" label={`${review ? 'Reviewer' : ''} Name`} type="text" />
        <CustomInput variant="flat" label={`${review ? 'Reviewer' : ''} Email`} type="text" />
        {review ? <CustomInput variant="flat" label="Review Title" type="text" /> : null}
      </div>
      <CustomTextarea minRows={60} variant="flat" placeholder={review ? 'Review' : 'Question'} />
      <div className="flex justify-end">
        <CustomButton variant="flat" disabled>
          Submit {review ? 'Review' : 'Question'}
        </CustomButton>
      </div>
    </form>
  );
}
