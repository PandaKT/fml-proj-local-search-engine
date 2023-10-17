import { useQuery } from "react-query";
import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { ModelStore, getStoreList } from "../../api/store";

export function Home() {
  console.log("inside home");
  const stores = useQuery({
    queryFn: async () => {
      return await getStoreList();
    },
    queryKey: ["storesList", "home"],
  });

  if (stores.isLoading) return <div>Loading...</div>;
  if (stores.isError) return <div>{JSON.stringify(stores.error)}</div>;
  console.log("store data", stores.data);
  return (
    <div className="App w-1/2 border-r-[1px]">
      <List>
        {stores.data?.map((doc) => {
          let storeData = doc as ModelStore;
          return (
            <>
              <StoreCard storeData={storeData} storeID={doc.storeID} />
              <Divider />
            </>
          );
        })}
      </List>
    </div>
  );
}

function StoreCard(props: { storeID: string; storeData: ModelStore }) {
  const navigate = useNavigate();
  let storeID = props.storeID;
  let path = "store/id/" + storeID;

  return (
    <ListItem>
      <ListItemButton
        onClick={() => {
          console.log("navigaiton to ", path);
          navigate(path);
        }}
      >
        <ListItemAvatar>
          <div className="w-32 h-24 rounded-md bg-gray-400"></div>
        </ListItemAvatar>
        <div className="p-2"></div>
        <div className="">
          <div className="font-semibold text-lg">
            {props.storeData.storeName}
          </div>
          <div className="text-sm pt-0.5">{props.storeData.storeLocation}</div>
        </div>
      </ListItemButton>
    </ListItem>
  );
}
