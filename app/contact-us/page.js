'use client';
import { Card, CardBody } from '@nextui-org/react';
import Typography from '../../components/Typography';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import CustomTextarea from '../../components/CustomTextarea';

export default function page() {
  return (
    <Card className="mx-auto w-full max-w-4xl">
      <CardBody className="p-6">
        <div className="max-w-lg">
          <Typography>
            We are happy to answer questions or help you with returns. Please fill out the form
            below if you need assistance.
          </Typography>
          <br />
          <Typography>Vita, Inc.</Typography>
          <Typography>40 Ellwood Court</Typography>
          <Typography>Greenville, SC 29607</Typography>
          <Typography>864-288-8934</Typography>
        </div>
        <br />
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <CustomInput isRequired variant="flat" label="Full Name" type="text" />
            <CustomInput isRequired variant="flat" label="Phone Number" type="number" />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <CustomInput isRequired variant="flat" label="Email address" type="text" />
            <CustomInput isRequired variant="flat" label="Order Number" type="number" />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <CustomInput isRequired variant="flat" label="Company Name" type="text" />
            <CustomInput isRequired variant="flat" label="RMA Number" type="number" />
          </div>
          <CustomTextarea minRows="10" variant="flat" placeholder="Comments/Questions" />
          <div className="mx-auto">
            <CustomButton className="mt-2 uppercase" radius="sm" color="primary">
              Submit Form
            </CustomButton>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
