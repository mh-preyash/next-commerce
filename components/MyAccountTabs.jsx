import {
  Code,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import {useState} from 'react';
import {CreditCard, Download, Home, LogOut, Truck, User} from 'react-feather';
import ContainerHOC from './ContainerHOC';
import {CustomLink} from './CustomLink';
import Typography from './Typography';
import CustomButton from './nextui/CustomButton';
import {Routes} from '../utilities/constants';

const TabTitle = ({icon, title}) => (
  <div className="flex items-center space-x-4">
    <div className="w-[20px] h-[20px]">{icon}</div>
    <Typography className="leading-none">{title}</Typography>
  </div>
);

export default function MyAccountTabs() {
  const tabsData = [
    {
      value: 1,
      title: (
        <TabTitle icon={<Home />} title="Dashboard" url={Routes.myAccount} />
      ),
      body: () => (
        <>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </>
      ),
    },
    {
      value: 2,
      title: <TabTitle icon={<Truck />} title="Orders" url={Routes.orders} />,
      body: () => (
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Order</TableColumn>
            <TableColumn>Date</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>Total</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>#1150</TableCell>
              <TableCell>October 4, 2023</TableCell>
              <TableCell>Processing</TableCell>
              <TableCell>$0.50 for 1 item</TableCell>
              <TableCell>
                <CustomButton>View</CustomButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ),
    },
    {
      value: 3,
      title: (
        <TabTitle
          icon={<Download />}
          title="Downloads"
          url={Routes.downloads}
        />
      ),
      body: () => (
        <div className="my-6">
          <Typography>No downloads available yet.</Typography>
          <Code size="lg">
            <CustomLink
              isExternal
              to="https://dev.wholesomeorganicsco.com/shop/"
            >
              Browse products
            </CustomLink>
          </Code>
        </div>
      ),
    },
    {
      value: 4,
      title: (
        <TabTitle
          icon={<Home />}
          title="Addresses"
          url={Routes.addressesHandle}
        />
      ),
      body: () => (
        <>
          <Typography>Addresses</Typography>
          <br />
        </>
      ),
    },
    {
      value: 5,
      title: (
        <TabTitle
          icon={<CreditCard />}
          title="Payment methods"
          url={Routes.payment}
        />
      ),
      body: () => (
        <>
          <Typography>Payment</Typography>
          <br />
        </>
      ),
    },
    {
      value: 6,
      title: (
        <TabTitle icon={<User />} title="Account details" url="/account" />
      ),
      body: () => (
        <>
          <Typography>Account</Typography>
          <br />
        </>
      ),
    },
    {
      value: 7,
      title: <TabTitle icon={<LogOut />} title="Log out" url={Routes.logout} />,
      body: () => (
        <>
          <Typography>Log Out</Typography>
          <br />
        </>
      ),
    },
  ];
  const [active, setActive] = useState(tabsData?.[0]);

  return (
    <ContainerHOC>
      {/* <div className="pt-10 lg:hidden block">
        <Select
          labelPlacement="outside"
          variant="bordered"
          label="Select an animal"
        >
          {(tabsData || []).map((item) => (
            <SelectItem key={item.value} value={String(item.value)}>
              {item.title}
            </SelectItem>
          ))}
        </Select>
      </div> */}

      <div className="grid lg:grid-cols-4 gap-4 lg:gap-8 py-10">
        <div className="w-full overflow-x-scroll overflow-y-hidden lg:overflow-hidden lg:mb-8 lg:h-fit h-full lg:bg-[#f6f6f6] rounded-lg">
          <nav className="flex lg:flex-col flex-row justify-center w-[150vh] lg:w-full">
            {tabsData.map((item, key) => (
              <button
                key={key}
                className={`border-b last:border-b-0 p-4 inline-flex items-center gap-2 bg-none font-medium rounded-t-lg text-left hover:text-gray-700 text-xs lg:text-base ${
                  item?.value == active?.value
                    ? 'text-primary'
                    : 'text-gray-500'
                }`}
                onClick={() => {
                  setActive(item);
                }}
              >
                {item?.title}
              </button>
            ))}
          </nav>
        </div>
        <div className="col-span-full lg:col-span-3 w-full transition-opacity ease-in duration-700 opacity-100 space-y-12">
          <div key={active.value} id={active.value}>
            {active?.body()}
          </div>
        </div>
      </div>
    </ContainerHOC>
  );
}
