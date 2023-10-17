import { createContext } from "react";
import { useParams } from "react-router-dom";
import {
  Banner,
  Heading,
  MyListItem,
  PhoneContact,
} from "../../components/common";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Card, Divider } from "@mui/material";
import { COLORS } from "../../utils/constants";
import { ModelStore, getStore } from "../../api/store";
import { useQuery } from "react-query";

export const StoreDataContext = createContext<{
  storeID: string;
  storeData: ModelStore;
}>({
  storeID: "",
  storeData: new ModelStore(),
});

export function StorePage(props: any) {
  let { storeID } = useParams();

  storeID = storeID ?? "";

  const storeQuery = useQuery({
    queryFn: async () => {
      return await getStore(storeID!);
    },
    queryKey: ["storesPage", storeID!],
  });

  if (storeQuery.isLoading || !storeQuery.data) return <div>Loading</div>;
  if (storeQuery.isError)
    return <div>Error {JSON.stringify(storeQuery.error)}</div>;
  console.log("store data", storeQuery.data);
  let storeData = storeQuery.data;
  return (
    <StoreDataContext.Provider
      value={{
        storeData: storeQuery.data!,
        storeID: storeID!,
      }}
    >
      <Card variant="outlined" className="w-3/4 h-full">
        <Banner url={"https://picsum.photos/200/300"} />
        <div className="px-4">
          <div className="flex flex-row gap-4 justify-start items-center py-2">
            <div className="flex flex-col gap-4">
              <Heading heading={storeData.storeName} />
              <PhoneContact
                contact={storeData.storeContact}
                whatsapp={storeData.storeContact}
              />
            </div>
          </div>
          <div className="pt-3" />
          <Divider className="py-2" />
          <MyListItem
            onClick={() => {}}
            icon={
              <LocationOnIcon
                fontSize={"medium"}
                style={{ color: COLORS.teal[900] }}
              />
            }
            secondary={storeData.storeLocation}
          />
          <Divider />
          <div className="py-5" />
        </div>
      </Card>
      <div className="h-32"></div>
    </StoreDataContext.Provider>
  );
}
