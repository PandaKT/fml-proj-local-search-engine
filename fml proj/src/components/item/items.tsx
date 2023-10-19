import { ButtonBase, Card, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { getItemList } from "../../api/item";
import { PriceChip } from "../common";

export function ItemsListPublic(props: {
  storeID: string;
  heading?: string;
  excludeList?: string[];
  cardOnClick: (id: string) => void;
}) {
  const { isLoading, isError, data, error } = useQuery({
    queryFn: async () => {
      console.log("called query");
      return await getItemList(props.storeID);
    },
    queryKey: [props.storeID, "storeAllItemsList"],
  });

  if (isLoading) return <div>LOADING...</div>;
  if (isError) return <div>{JSON.stringify(error)}</div>;

  if (!data || data?.length == 0) {
  }

  return (
    <div>
      <div className="flex flex-row justify-between">
        <Typography gutterBottom variant="h5" component="div">
          {props.heading ?? "Items"}
        </Typography>
      </div>

      <div className="flex gap-4">
        {(!data || data.length == 0) && (
          <div className="text-gray-500">No Items added!</div>
        )}
        {data?.map((item) => (
          <>
            {(!props.excludeList ||
              props.excludeList.indexOf(item.itemID) < 0) && (
              <Card>
                <ButtonBase
                  className="w-fit flex flex-col"
                  onClick={() => props.cardOnClick(item.itemID)}
                >
                  <div className="w-44 h-36 bg-gray-200"></div>
                  <div className="h-16">
                    <Typography>{item.name}</Typography>
                  </div>
                  <div className="absolute right-0 bottom-0 p-1">
                    <PriceChip amount={item.price} isSmall={true} />
                  </div>
                </ButtonBase>
              </Card>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
