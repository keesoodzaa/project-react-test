import { useSelector } from "react-redux";
import { CostData } from "../../shared/types";

type RootState = {
  cost: CostData;
};

const CostDisplay: React.FC = () => {
  const costData = useSelector((state: RootState) => state.cost);
  return (
    <div>
      <div>เบี้ยประกันที่ได้รับ:: {costData.cost}</div>
    </div>
  );
};

export { CostDisplay };
