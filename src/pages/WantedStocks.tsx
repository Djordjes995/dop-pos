import { useQuery } from '@tanstack/react-query';
import { getWantedStocks } from '../api/ManageApi';
import StockList from '../components/StockList';

export default () => {

  const wantedStocksQuery = useQuery({
    queryKey: ['order'],
    queryFn: getWantedStocks,
  })

  return (
    <div>
      <StockList />
    </div>
  );
};