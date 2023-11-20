import {Checkbox} from '@nextui-org/react';
import {useState} from 'react';
import StarRating from './StarRating';
import CustomButton from './nextui/CustomButton';
import CustomInput from './nextui/CustomInput';
import CustomTextarea from './nextui/CustomTextarea';

export default function WriteReviewForm({showCheckbox = false}) {
  const [rating, setRating] = useState(0);
  const [checked, setChecked] = useState(false);

  return (
    <form className="flex flex-col gap-4 max-w-[70rem] mx-auto border p-8">
      <StarRating setRating={setRating} rating={rating} />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <CustomInput variant="flat" label="Title" type="text" />
        <CustomInput variant="flat" label="Reviewer Name" type="text" />
        <CustomInput variant="flat" label="Reviewer Email" type="text" />
      </div>
      <CustomTextarea
        minRows={60}
        variant="flat"
        placeholder="Review Summary"
      />
      {showCheckbox ? (
        <Checkbox radius="sm" isSelected={checked} onValueChange={setChecked}>
          Save my name, email, and website in this browser for the next time I
          comment.
        </Checkbox>
      ) : null}
      <div className="inline-block">
        <CustomButton disabled>Submit Review</CustomButton>
      </div>
    </form>
  );
}
