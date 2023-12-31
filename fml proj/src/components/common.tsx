import {
  Avatar,
  ButtonBase,
  Chip,
  ListItemText,
  Typography,
} from "@mui/material";
import { COLORS, RUPEE_SYMBOl } from "../utils/constants";
import { WhatsApp } from "@mui/icons-material";
import CallIcon from "@mui/icons-material/Call";
import { getUserAvatar } from "../api/pics/pics";
import { useQuery } from "react-query";

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

export function Description(props: { description: string }) {
  let desc = props.description;
  if (!desc || desc.trim().length == 0) {
    desc = "No Description added!";
  }
  return (
    <div className="py-2">
      <Typography gutterBottom variant="h5" component="div">
        About
      </Typography>
      <div className="text-gray-500">{desc}</div>
    </div>
  );
}

export const MyAvatarImage = (props: {
  imageClass?: string;
  userName?: string;
  borderClass?: string;
  userID: string;
}) => {
  const imgQuery = useQuery({
    queryFn: async () => {
      return await getUserAvatar(props.userID);
    },
    queryKey: ["userAvatar", props.userID],
  });

  let imageClass = props.imageClass ? props.imageClass : "w-24 h-24";

  return <Avatar src="/broken-image.jpg" className={imageClass} />;
};
