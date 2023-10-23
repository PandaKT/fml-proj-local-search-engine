import { Card, Divider, List, ListItem } from "@mui/material";
import { MyAvatarImage, MyListItem } from "../../components/common";
import ErrorPage from "../../error-page";
import { Call, WhatsApp } from "@mui/icons-material";
import { useQuery } from "react-query";
import { getUser } from "../../api/user";

export function Profile(props: any) {
  const uid = "uid";
  const userQuery = useQuery({
    queryFn: async () => {
      return await getUser(uid);
    },
    queryKey: ["userData", uid],
  });
  if (userQuery.isLoading) return <div>LOADING</div>;
  if (userQuery.isError) return <div>Error</div>;
  console.log("user data", userQuery.data);
  return (
    <Card variant="outlined" className="w-1/2 pb-24">
      <div className="flex flex-col items-center">
        <MyAvatarImage userID={uid} imageClass="w-24 h-24" />
        <div className="text-2xl py-2">{userQuery.data?.userName}</div>
        <div className="w-full px-2">
          <Divider />
          <MyListItem
            onClick={() => {}}
            icon={<Call />}
            secondary={userQuery.data?.userContact}
            // primary={"Phone Number"}
          />
          <Divider />
          <MyListItem
            onClick={() => {}}
            icon={<WhatsApp />}
            secondary={userQuery.data?.userContact}
          />
        </div>
      </div>
    </Card>
  );
}
