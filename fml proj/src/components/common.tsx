import { ButtonBase, Chip, ListItemText } from "@mui/material";
import { COLORS, RUPEE_SYMBOl } from "../utils/constants";
import { WhatsApp } from "@mui/icons-material";
import CallIcon from "@mui/icons-material/Call";

export function Banner(props: { url: string }) {
  return <div className="w-full h-96 bg-gray-100"></div>;
}

export function Heading(props: { heading: string }) {
  return <div className="text-3xl">{props.heading}</div>;
}

export function MyListItem(props: {
  primary?: string;
  secondary?: string;
  onClick: any;
  icon?: JSX.Element;
}) {
  return (
    <div className="rounded-full overflow-clip w-fit">
      <ButtonBase onClick={props.onClick} style={{ color: COLORS.teal[900] }}>
        <div className="py-2 flex flex-row gap-2 w-full px-2">
          {props.icon ?? <></>}
          <ListItemText secondary={props.secondary} primary={props.primary} />
        </div>
      </ButtonBase>
    </div>
  );
}

export function PhoneContact(props: { contact: string; whatsapp: string }) {
  return (
    <div className="w-full flex flex-row gap-4">
      <Chip
        // label={contact.phone.phoneNumber}
        label={"Phone"}
        variant="outlined"
        onClick={() => {}}
        className="py-2 px-4"
        style={{ color: COLORS.teal[900], padding: "8px" }}
        icon={<CallIcon style={{ color: COLORS.teal[900] }} />}
      />
      <Chip
        // label={contact.whatsapp.phoneNumber}
        label={"Whatsapp"}
        variant="outlined"
        onClick={() => {}}
        style={{ color: COLORS.teal[900], padding: "8px" }}
        icon={<WhatsApp style={{ color: COLORS.teal[900] }} />}
      />
    </div>
  );
}

export function PriceChip(props: { amount: string; isSmall?: boolean }) {
  const amount = props.amount;
  const style = props.isSmall
    ? "font-semibold w-fit px-1.5 "
    : "text-xl w-fit px-4 py-1 ";
  if (amount == null || amount.trim().length == 0) return <></>;
  return (
    <div
      className={style + "font-medium rounded-full"}
      style={{ backgroundColor: COLORS.green[50], color: COLORS.green[900] }}
    >
      {RUPEE_SYMBOl} {props.amount}
    </div>
  );
}
