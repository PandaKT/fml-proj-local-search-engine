import { Paper, Card } from "@mui/material";
import { useQuery } from "react-query";
import { Description, Heading, PriceChip } from "../../components/common";
import { useNavigate, useParams } from "react-router-dom";
import { ItemsListPublic } from "../../components/item/items";
import { getItem } from "../../api/item";
import { getItemPics } from "../../api/pics/pics";

function Carousel_network(props: { itemID: string }) {
  const query = useQuery({
    queryFn: async () => {
      return await getItemPics(props.itemID!);
    },
    queryKey: [props.itemID!, "itemPics"],
  });
  if (query.isError) return <>ERROR</>;
  if (query.isLoading) return <>LOADING</>;
  return (
    <>
      <div className="flex flex-row gap-2 w-full py-4">
        {(query.data as string[]).map((picMeta, i) => (
          <div key={i} className="rounded-md shadow-md">
            <Paper>
              <div className="w-32 h-64 rounded-md object-cover bg-gray-200"></div>
            </Paper>
          </div>
        ))}
      </div>
    </>
  );
}

export function ItemPagePublic(props: any) {
  const { slug, storeID, itemID } = useParams();
  const navigate = useNavigate();

  const {
    isLoading,
    data: itemData,
    error,
  } = useQuery({
    queryFn: async () => {
      return await getItem(itemID!, storeID!);
    },
    queryKey: [itemID!, "itemData"],
  });

  if (isLoading) return <div>LOADING</div>;
  if (error) return <div>{JSON.stringify(error)}</div>;

  return (
    <Card variant="outlined" className="w-3/4 h-full px-4">
      {/* <Banner query={itemPicsQuery} /> */}
      <Carousel_network itemID={itemID!} />
      <Heading heading={itemData!.name} />
      <div className="py-2"></div>
      <PriceChip amount={itemData!.price} />
      <div className="py-2"></div>
      <div className="py-2" />
      <Description description={itemData!.description} />
      <div className="py-4" />
      <ItemsListPublic
        storeID={itemData!.storeID}
        cardOnClick={(id) => {
          if (storeID) return navigate(`/store/id/${storeID}/item/id/${id}`);
        }}
        heading="Other Items"
        excludeList={[itemID!]}
      />
    </Card>
  );
}
