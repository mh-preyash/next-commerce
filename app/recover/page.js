import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import CustomInput from "../components/nextui/CustomInput";
import Typography from "../components/Typography";
import CustomButton from "../components/nextui/CustomButton";

export default function Page() {
  return (
    <div className="flex justify-center items-center">
      <Card className="max-w-full w-full md:w-[550px]">
        <CardBody className="overflow-hidden">
          <form className="flex flex-col gap-4">
            <CustomInput
              isRequired
              variant="flat"
              label="Email address"
              type="email"
            />
            <Typography variant="p">
              Fill in your email below to request a new password. An email will
              be sent to the address below containing a link to verify your
              email address.
            </Typography>
            <CustomButton
              className="mt-4"
              radius="sm"
              fullWidth
              color="primary"
            >
              Reset Password
            </CustomButton>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
