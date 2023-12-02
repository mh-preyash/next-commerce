import {
  Card,
  CardBody,
  Checkbox,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Tab,
  Tabs
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import React, { useMemo, useState } from 'react';
import { Eye, EyeOff } from 'react-feather';
import { Routes, countries } from '../utils';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import CustomLink from './CustomLink';
import Typography from './Typography';

export default function LoginRegister({ tab, error }: { tab: string; error: string }) {
  const [selected, setSelected] = React.useState(tab);
  const [checked, setChecked] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [value, setValue] = useState();
  const pathname = usePathname();
  const isRegister = pathname == Routes.register;

  const findValue = (key) => countries.find((i) => i?.code == value?.currentKey)?.[key];

  const renderCountries = useMemo(() => {
    return (
      <Select
        items={countries}
        className="w-full"
        label="Select Country"
        selectedKeys={value}
        onSelectionChange={setValue}
      >
        {(user) => (
          <SelectItem key={user?.code} textValue={user?.name} value={user?.code}>
            <span className="text-small">{user.name}</span>
          </SelectItem>
        )}
      </Select>
    );
  }, [countries, value]);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="flex items-center justify-center px-6">
      <Card className={`w-full max-w-full md:w-[700px]`}>
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title={<CustomLink href={Routes.signIn}>Login</CustomLink>}>
              <form method="POST" className="flex flex-col gap-4">
                <CustomInput
                  isRequired
                  variant="flat"
                  label="Username or email address"
                  type="email"
                  name="email"
                />
                <CustomInput
                  isRequired
                  name="password"
                  variant="flat"
                  label="Password"
                  type={isVisible ? 'type' : 'password'}
                  endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                      {isVisible ? (
                        <Eye width="30" className="rotate-180" />
                      ) : (
                        <EyeOff width="30" />
                      )}
                    </button>
                  }
                />
                {error ? (
                  <Typography>
                    <mark>
                      <small>{error}</small>
                    </mark>
                  </Typography>
                ) : (
                  <div />
                )}
                <CustomButton radius="sm" fullWidth color="primary" type="submit">
                  Login
                </CustomButton>
              </form>
              <CustomLink className="mt-2 flex justify-center underline" href={Routes.recover}>
                Forgot password?
              </CustomLink>
            </Tab>
            <Tab key="sign-up" title={<CustomLink href={Routes.register}>Register</CustomLink>}>
              <form method="POST" className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <CustomInput
                    isRequired
                    variant="flat"
                    label="Email Address"
                    type="email"
                    name="email"
                  />
                  <CustomInput
                    isRequired
                    name="password"
                    variant="flat"
                    label="Password"
                    type={isVisible ? 'text' : 'password'}
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <Eye width="30" className="rotate-180" />
                        ) : (
                          <EyeOff width="30" />
                        )}
                      </button>
                    }
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <CustomInput
                    isRequired
                    name="passwordConfirm"
                    variant="flat"
                    label="Confirm Password"
                    type={isVisible ? 'text' : 'password'}
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <Eye width="30" className="rotate-180" />
                        ) : (
                          <EyeOff width="30" />
                        )}
                      </button>
                    }
                  />
                  <CustomInput
                    isRequired
                    variant="flat"
                    label="First Name"
                    type="text"
                    name="firstName"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <CustomInput
                    isRequired
                    variant="flat"
                    label="Last Name"
                    type="text"
                    name="lastName"
                  />
                  <CustomInput variant="flat" label="Company Name" type="text" name="companyName" />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <CustomInput
                    isRequired
                    variant="flat"
                    label="Phone Number"
                    type="number"
                    name="phoneNumber"
                  />
                  <CustomInput
                    isRequired
                    variant="flat"
                    label="Address Line 1"
                    type="text"
                    name="addressLine"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <CustomInput
                    variant="flat"
                    label="Address Line 2"
                    type="text"
                    name="addressLine2"
                  />
                  {renderCountries}
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <CustomInput
                    isRequired
                    variant="flat"
                    label="Suburb/City"
                    type="text"
                    name="city"
                  />
                  <CustomInput variant="flat" label="State/Province" type="text" name="state" />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <CustomInput
                    isRequired
                    variant="flat"
                    label="Zip/Postcode"
                    type="number"
                    name="zip"
                  />
                  <RadioGroup label="Are you a business buyer?">
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                  </RadioGroup>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <RadioGroup label="What will this product primarily be used for?">
                    <Radio value="ballet">Ballet/Dance</Radio>
                    <Radio value="barre_fitness">Barre Fitness</Radio>
                    <Radio value="both">Both</Radio>
                    <Radio value="other">Other</Radio>
                  </RadioGroup>
                  <RadioGroup label="In what environment will this product be used?">
                    <Radio value="residential">Residential</Radio>
                    <Radio value="commercial">Commercial</Radio>
                  </RadioGroup>
                </div>
                <Checkbox>I would like to receive updates and offers.</Checkbox>

                {error ? (
                  <Typography>
                    <mark>
                      <small>{error}</small>
                    </mark>
                  </Typography>
                ) : (
                  <div />
                )}
                <CustomButton radius="sm" fullWidth color="primary" type="submit">
                  Create Account
                </CustomButton>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
