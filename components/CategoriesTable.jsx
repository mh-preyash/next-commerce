import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

export default function CategoriesTable() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Category</TableColumn>
        <TableColumn>Examples</TableColumn>
        <TableColumn>Collected</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>A. Identifiers</TableCell>
          <TableCell>
            Contact details, such as real name, alias, postal address, telephone
            or mobile contact number, unique personal identifier, online
            identifier, Internet Protocol address, email address, and account
            name
          </TableCell>
          <TableCell>YES</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>
            B. Personal information categories listed in the California Customer
            Records statute
          </TableCell>
          <TableCell>
            Name, contact information, education, employment, employment
            history, and financial information
          </TableCell>
          <TableCell>YES</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>
            C. Protected classification characteristics under California or
            federal law
          </TableCell>
          <TableCell>Gender and date of birth</TableCell>
          <TableCell>YES</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>D. Commercial information</TableCell>
          <TableCell>
            Transaction information, purchase history, financial details, and
            payment information
          </TableCell>
          <TableCell>YES</TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell>E. Biometric information</TableCell>
          <TableCell>Fingerprints and voiceprints</TableCell>
          <TableCell>NO</TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell>F. Internet or other similar network activity</TableCell>
          <TableCell>
            Browsing history, search history, online behavior, interest data,
            and interactions with our and other websites, applications, systems,
            and advertisements
          </TableCell>
          <TableCell>NO</TableCell>
        </TableRow>
        <TableRow key="7">
          <TableCell>G. Geolocation data</TableCell>
          <TableCell>Device location</TableCell>
          <TableCell>YES</TableCell>
        </TableRow>
        <TableRow key="8">
          <TableCell>
            H. Audio, electronic, visual, thermal, olfactory, or similar
            information
          </TableCell>
          <TableCell>
            Images and audio, video or call recordings created in connection
            with our business activities
          </TableCell>
          <TableCell>NO</TableCell>
        </TableRow>
        <TableRow key="9">
          <TableCell>
            I. Professional or employment-related information
          </TableCell>
          <TableCell>
            Business contact details in order to provide you our Services at a
            business level or job title, work history, and professional
            qualifications if you apply for a job with us
          </TableCell>
          <TableCell>NO</TableCell>
        </TableRow>
        <TableRow key="10">
          <TableCell>J. Education Information</TableCell>
          <TableCell>Student records and directory information</TableCell>
          <TableCell>NO</TableCell>
        </TableRow>
        <TableRow key="11">
          <TableCell>
            K. Inferences drawn from other personal information
          </TableCell>
          <TableCell>
            Inferences drawn from any of the collected personal information
            listed above to create a profile or summary about, for example, an
            individual’s preferences and characteristics
          </TableCell>
          <TableCell>YES</TableCell>
        </TableRow>
        <TableRow key="12">
          <TableCell>L. Sensitive Personal Information</TableCell>
          <TableCell></TableCell>
          <TableCell>NO</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
